"use client";
import { useEffect, useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
          cashe: "no-store",
        }
      );
      const result = await response.json();
      setTodo(result);
    };
    getTodos();
  }, []);

  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
    </div>
  );
}
