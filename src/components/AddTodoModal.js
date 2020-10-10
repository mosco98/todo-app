import React, { useState } from 'react'
import v4 from 'uuid'

const AddTodoModal = ({ updateShowModal, AddNewTodo }) => {
  const [title, setTitle] = useState('')

  function FormSubmitHandler(e) {
    e.preventDefault()

    if (title === '') return

    const newTodo = {
      id: v4(),
      title,
      completed: false
    }

    AddNewTodo(newTodo)
    updateShowModal(false)
  }
  return (
    <>
      <div className="overlay" onClick={() => updateShowModal(false)} />
      <form className="add-todo-form shadow-sm p-8" onSubmit={FormSubmitHandler}>
        <input
          type="text"
          className="p-2"
          placeholder="Enter new todo"
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-green-500 text-white text-sm rounded p-2 mx-1">Add todo</button>
      </form>
    </>
  )
}

export default AddTodoModal
