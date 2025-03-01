import { BsPlus } from "react-icons/bs";

const Todo = () => {
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONNAL TODO</h2>

      {/* input text and btn */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add todo"
          className="flex"
        />
        <button>
          <BsPlus />
        </button>
      </div>
    </div>
  )
}

export default Todo