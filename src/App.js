import React, { useState } from 'react'

import AddTodoModal from './components/AddTodoModal'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])
  const [showModal, updateShowModal] = useState(false)
  return (
    <div className="App">
      {showModal && <AddTodoModal updateShowModal={updateShowModal} />}
      {todos.length ? (
        <div className="absolute top-0 right-0 m-2">
          <button className="bg-green-500 text-white text-sm rounded p-1 mx-1" onClick={() => updateShowModal(true)}>
            Add Todo
          </button>
          <button className="bg-red-500 text-white text-sm rounded p-1 mx-1">Delete All Todos</button>
        </div>
      ) : null}
      {todos.length ? (
        <TodoList todos={todos} />
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
