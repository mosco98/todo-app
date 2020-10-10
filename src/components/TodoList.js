import React from 'react'

import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <TodoListItem key={i} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
