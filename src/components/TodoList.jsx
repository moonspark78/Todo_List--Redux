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
    <ul>
      <li>
        {
          filteredTodos.map((todo, index)=>(
            <li key={index}>{todo.text}</li>
          ))
        }
      </li>
    </ul>
  )
}

export default TodoList;