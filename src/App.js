import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";


export default function Todo() {
  return (
    <div className="Todo-App flex  justify-center">
      <TodoList />
    </div>
  );
}
