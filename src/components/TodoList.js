import React from 'react'

import TodoListItem from './TodoListItem'

const TodoList = ({ todos, DeleteTodo, MarkComplete }) => {
  return (
    <>
      <h1 className="text-3xl font-bold my-4">Hi, you have {todos.length} todos</h1>
      <ul className="p-3" style={{ width: '35%', minWidth: '320px' }}>
        {todos.map((todo, i) => (
          <TodoListItem key={i} {...todo} DeleteTodo={DeleteTodo} MarkComplete={MarkComplete} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
