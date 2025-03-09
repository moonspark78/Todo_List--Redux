import PropTypes from 'prop-types';

// Ajout de la validation des props
TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };


const TodoItem = ({todo, index}) => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
            <span className="mr-4 text-gray-500">{index + 1}</span>
            <span className={`mr-4 ${todo.completed ? "line-through text-red-500" : " "}`}>{todo.text}</span>
        </div>
    </li>
  )
}

export default TodoItem