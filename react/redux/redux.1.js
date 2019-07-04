
const reducer = combineReducers({
    counter: counterReducer,
    info: InfoReducer
});

const createStore = function (plan) {
    let state;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        /*请按照我的计划修改 state*/
        state = plan(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    function getState() {
        return state;
    }

    dispatch({ type: Symbol() })

    return {
        subscribe,
        dispatch,
        getState
    }
}

const loggerMiddleware = (store) => (next) => (action) => {
    console.log('this state', store.getState());
    console.log('action', action);
    next(action);
    console.log('next state', store.getState());
}

const exceptionMiddleware = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (err) {
        console.error('错误报告: ', err)
    }
}

const timeMiddleware = (store) => (next) => (action) => {
    console.log('time', new Date().getTime());
    next(action);
}

const applyMiddleware = function (...middlewares) {
    /*返回一个重写createStore的方法*/
    return function (oldCreateStore) {
        /*返回重写后新的 createStore*/
        return function (reducer, initState) {
            /*1. 生成store*/
            const store = oldCreateStore(reducer, initState);
            /*给每个 middleware 传下store，相当于 const logger = loggerMiddleware(store);*/
            /* const chain = [exception, time, logger]*/
            const chain = middlewares.map(middleware => middleware(store));
            let dispatch = store.dispatch;
            /* 实现 exception(time((logger(dispatch))))*/
            chain.reverse().map(middleware => {
                dispatch = middleware(dispatch);
            });

            /*2. 重写 dispatch*/
            store.dispatch = dispatch;
            return store;
        }
    }
}

/*接收旧的 createStore，返回新的 createStore*/
const newCreateStore = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)(createStore);

/*返回了一个 dispatch 被重写过的 store*/
store = newCreateStore(reducer);

store.subscribe(() => {
    console.log('subscribe1');
});
/*自增*/
store.dispatch({
    type: 'INCREMENT'
});
// /*修改 name*/
// store.dispatch({
//     type: 'SET_NAME',
//     name: '前端九部2号'
// });

function InfoReducer(state, action) {
    let initState = {
        name: '',
        description: ''
    }
    /*注意：如果 state 没有初始值，那就给他初始值！！*/
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.description
            }
        default:
            return state;
    }
}

/* counter 自己的 state 和 reducer 写在一起*/


function counterReducer(state, action) {
    let initState = {
        count: 0
    }
    /*注意：如果 state 没有初始值，那就给他初始值！！*/
    if (!state) {
        state = initState;
    }
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

function combineReducers(reducers) {

    /* reducerKeys = ['counter', 'info']*/
    const reducerKeys = Object.keys(reducers)

    /*返回合并后的新的reducer函数*/
    return function combination(state = {}, action) {
        /*生成的新的state*/
        const nextState = {}

        /*遍历执行所有的reducers，整合成为一个新的state*/
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i]
            const subReducer = reducers[key]
            /*之前的 key 的 state*/
            const previousStateForKey = state[key]
            /*执行 分 reducer，获得新的state*/
            const nextStateForKey = subReducer(previousStateForKey, action)

            nextState[key] = nextStateForKey
        }
        return nextState;
    }
}