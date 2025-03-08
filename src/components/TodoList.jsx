import { useSelector } from "react-redux";


const TodoList = () => {
    const filteredTodos = useSelector((state) => {
      const todos = state.todos;
      const filter = state.filter;
      const searchTerm = state.searchTerm;
    });


  return (
    <div>TodoList</div>
  )
}

export default TodoList