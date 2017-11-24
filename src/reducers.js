import { combineReducers } from 'redux'
import {
  VisibilityFilters,
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './actions'


const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }
//
//   return state
//
// }

//BEFORE comebineReducers!
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     todos: todos(state.todos, action)
//   }
// }

//AFTER comebineReducers!
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, action) => {
        if (state.index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default todoApp
