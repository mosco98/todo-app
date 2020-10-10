import React, { useState } from 'react'

const AddTodoModal = ({ updateShowModal }) => {
  const [title, setTitle] = useState('')
  return (
    <>
      <div className="overlay" onClick={() => updateShowModal(false)} />
      <form className="add-todo-form shadow-sm p-8">
        <input type="text" className="p-2" placeholder="Enter new todo" autoFocus={true} />
        <button className="bg-green-500 text-white text-sm rounded p-2 mx-1">Add todo</button>
      </form>
    </>
  )
}

export default AddTodoModal
