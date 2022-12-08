import Link from 'next/link'
import React from 'react'
import { Todo } from '../../typings'

//any console log will be available on the terminal not the browser
const fetchToDos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json()
    return todos
}


//we need to switch to a client side element if we are to use an interactive component with bindings
async function ToDoList() {
    const todos = await fetchToDos()
  return (
    <>
    {todos.map((todo)=> (
      <p key={todo.id}>
        <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
      </p>
    ))}
    </>
  )
}

export default ToDoList