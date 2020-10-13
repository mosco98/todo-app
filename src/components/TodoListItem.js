import React from 'react'
import { Trash2 } from 'react-feather'

const TodoListItem = (props) => {
  const { id, title, completed, DeleteTodo, MarkComplete } = props
  return (
    <li className={completed ? 'bg-red-400 todo-list-item p-3 my-2' : 'bg-gray-400 todo-list-item p-3 my-2'}>
      <input type="checkbox" className="cursor-pointer" checked={completed} onChange={() => MarkComplete(id)} />
      <span
        className={completed ? 'text-center break-normal italic line-through' : 'text-center break-normal'}
        style={{ width: '50%', minWidth: '150px' }}>
        {title}
      </span>
      <Trash2 onClick={() => DeleteTodo(id)} className="cursor-pointer" size="20" color="red" />
    </li>
  )
}

export default TodoListItem
