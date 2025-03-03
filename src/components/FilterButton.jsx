

const FilterButton = () => {
  return (
    <div className="flex space-x-4 items-center">
        <select>
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incomplete</option>
        </select>
    </div>
  )
}

export default FilterButton