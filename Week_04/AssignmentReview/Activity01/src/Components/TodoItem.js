
const TodoItem = ({ todo, toggleComplete, handleDelete }) => {
  const handleChecked = (e) => {
    toggleComplete(todo.id)
  }

  return (
    <li className='TodoItem' >
      <input type='checkbox' value={todo.completed} onChange={(e) => handleChecked(e)} />
      <p> {todo.title} </p>
      <button onClick={(e) => handleDelete(todo.id)}>X</button>
    </li>
  )
}

export default TodoItem;