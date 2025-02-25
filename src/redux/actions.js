import { ADD_TODO } from "./actionTypes";
import { TOGGLE_TODO } from "./actionTypes";
import { REMOVE_TODO } from "./actionTypes";
import { MARK_COMPLETED } from "./actionTypes";
import { MARK_INCOMPLETED } from "./actionTypes";
import { FILTER_TODO } from "./actionTypes";

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
    type: MARK_INCOMPLETED,
    payload: {id}
})

export const filterTodos = (id) => ({
    type: FILTER_TODO,
    payload: {id}
})