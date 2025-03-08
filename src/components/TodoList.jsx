import { useSelector } from "react-redux";


const TodoList = () => {
    const filteredTodos = useSelector((state) => {
      const todos =  state.todos;
      const filter =  state.filter;
      const searchTerm = state.searchTerm;
    

    return todos.filter((todo) => {
      const matchsFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
      const marchSearchTerm = todo.text.toLowerCase().includes(searchTerm);
      return matchsFilter && marchSearchTerm;
    })

  })

  console.log("Filtered Todos",filteredTodos)
  return (
    <div>TodoList</div>
  )
}

export default TodoList;