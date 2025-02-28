import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  UPDATA_SEARCH_TERM,
} from "./actionTypes";



export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {text}
})

export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    payload: {id}
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
})

export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: {id}
})

export const markIncompleted = (id) => ({
    type: MARK_INCOMPLETE,
    payload: {id}
})

export const filterTodos = (filter) => ({
    type: FILTER_TODO,
    payload: {filter}
})

export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
    payload: {}
})

export const updateSearchTerm = (searchTerm) => ({
    type: UPDATA_SEARCH_TERM,
    payload: {searchTerm}
})

