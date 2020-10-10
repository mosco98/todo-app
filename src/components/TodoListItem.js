import React from 'react'
import { Trash2 } from 'react-feather'

const TodoListItem = (props) => {
  const { id, title, completed } = props
  return (
    <li className="bg-gray-400 todo-list-item">
      <input type="checkbox" value={completed} />
      <span>{title}</span>
      <Trash2 />
    </li>
  )
}

export default TodoListItem
