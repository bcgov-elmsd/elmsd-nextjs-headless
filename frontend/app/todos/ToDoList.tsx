import React from 'react'

const fetchToDos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos = await res.json()
}

async function ToDoList() {
    const todos = await fetchToDos()
  return (
    <div>ToDoList</div>
  )
}

export default ToDoList