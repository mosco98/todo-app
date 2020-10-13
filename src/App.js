import React, { useState, useEffect } from 'react'

import AddTodoModal from './components/AddTodoModal'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])
  const [showModal, updateShowModal] = useState(false)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos === null) {
      return setTodos([])
    }

    setTodos(todos)
  }, [])

  function AddNewTodo(newTodoObj) {
    const newTodos = []
    newTodos.push(...todos, newTodoObj)
    setTodos(newTodos)
    SaveToLocalStorage(newTodos)
  }

  function MarkComplete(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    })
    setTodos(newTodos)
    SaveToLocalStorage(newTodos)
  }

  function DeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
    SaveToLocalStorage(newTodos)
  }

  function SaveToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  function DeleteAllTodos() {
    setTodos([])
    SaveToLocalStorage([])
  }

  return (
    <div className="App">
      {showModal && <AddTodoModal updateShowModal={updateShowModal} AddNewTodo={AddNewTodo} />}
      {todos.length ? (
        <div className="absolute top-0 right-0 m-2">
          <button className="bg-green-500 text-white text-sm rounded p-1 mx-1" onClick={() => updateShowModal(true)}>
            Add Todo
          </button>
          <button className="bg-red-500 text-white text-sm rounded p-1 mx-1" onClick={DeleteAllTodos}>
            Delete All Todos
          </button>
        </div>
      ) : null}
      {todos.length ? (
        <TodoList todos={todos} DeleteTodo={DeleteTodo} MarkComplete={MarkComplete} />
      ) : (
        <>
          <h1 className="font-bold text-3xl my-2">No Todos here!</h1>
          <button className="bg-green-500 text-white text-sm rounded p-1" onClick={() => updateShowModal(true)}>
            Add New Todo
          </button>
        </>
      )}
    </div>
  )
}

export default App
