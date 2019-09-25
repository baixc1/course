/**
 * 1. 设计 State 结构
 * 2. 更新state
 * 3. 纯函数
 * 4. Action 处理
 * 5. combineReducers生成一个函数，将所有reducer的结果合并成一个对象
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


const todoApp = combineReducers({
    visibilityFilter,
    todos
})


export default todoApp

// export default function (state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }