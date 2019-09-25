/**
 * 数据流
 * 1. 严格的单向数据流
 * 2. 生命周期
 *      a. 调用 store.dispatch(action)
 *      b. Redux store 调用传入的 reducer 函数(参数：当前state、action)
 *      c. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
 *      d. Redux store 保存了根 reducer 返回的完整 state 树，调用监听器
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter,
//     VisibilityFilters
// } from './actions'


/**
 * 1. 维持应用的 state
 * 2. 提供 getState() 方法获取 state
 * 3. 提供 dispatch(action) 方法更新 state
 * 4. 监听器注册、取消
 */
const store = createStore(rootReducer)
// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))


// store.dispatch(addTodo('Learn about actions'))
// store.dispatch({
//     type: 'ADD_TODO',
//     id: 16,
//     text: '1111111'
// })
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// unsubscribe()
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// store.dispatch(toggleTodo(1))

render(
    //让容器组件访问 store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)