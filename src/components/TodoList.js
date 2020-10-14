import React from 'react'

import TodoListItem from './TodoListItem'

const TodoList = ({ todos, DeleteTodo, MarkComplete }) => {
  const completedTodos = todos.filter((todo) => todo.completed)
  return (
    <div className="overflow-y-scroll box-content todo-list" style={{ height: '80%' }}>
      <div className="my-4 text-center">
        <h1 className="text-3xl font-bold m-0">Hi, you have {todos.length} todos</h1>
        <small className={completedTodos.length === todos.length ? 'italic text-green-500' : 'italic'}>
          {completedTodos.length === todos.length ? (
            <>Yayyy! You've completed all your todos</>
          ) : (
            <>{completedTodos.length} completed</>
          )}
        </small>
      </div>
      <ul className="p-3" style={{ width: '35%', minWidth: '320px' }}>
        {todos.map((todo, i) => (
          <TodoListItem key={i} {...todo} DeleteTodo={DeleteTodo} MarkComplete={MarkComplete} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
