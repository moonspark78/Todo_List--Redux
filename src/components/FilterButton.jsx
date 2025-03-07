import { useDispatch, useSelector } from 'react-redux';

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  return (
    <div className="flex space-x-4 items-center">
        <select
        value={currentFilter}
         className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none">
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
        </select>

        <button className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded">Mark All Completed</button>
    </div>
  )
}

export default FilterButton