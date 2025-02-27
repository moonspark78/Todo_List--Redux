import { ADD_TODO, MARK_COMPLETED, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: "",

}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {text: action.payload.text, completed: true}],
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case TOGGLE_TODO:
            return{
                todos: state.todos.map((todo,index) => 
                index === action.payload.id ? {...todo, completed: !todo.completed} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case REMOVE_TODO:
            return{
                todos: state.todos.filter((todo,index) =>
                index !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        case MARK_COMPLETED:
            return{
                todos: state.todos.map((todo,index) =>
                index === action.payload.id ? {...todo, completed: true} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm,
            }
        
            default:
                break;
    }
};

export default todoReducer;
