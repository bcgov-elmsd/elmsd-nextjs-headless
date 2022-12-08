import React from "react";
import { Todo } from "../../../typings";
import {notFound} from "next/navigation";

//this is a dynamic page, it will be generated at build time
export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};

//at most every 60 seconds it will rebuild, after 60 seconds it will rebuild the page within 60 seconds,
//this can be very useful for headless cms
const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) {
    return notFound();
  }

  return (
    <div className="p-10 bg-slate-700 border-2 m-2 shadow-lg">
      <p className=" text-xl">
        #{todo.id}: {todo.title}
      </p>

      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-white text-end ">By User: {todo.userId}</p>
    </div>
  );
}

export default TodoPage;

//this allows us to generate all of the pages up until 200, imprvong performance so we do not have to re fetch everytime
//basically this is very useful as when we build the application, we will have the pages generated
//from the server as static pages.
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
