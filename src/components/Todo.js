import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className=" border-2   m-2 p-2 ">
      <div
        className={todo.isComplete ? "todo-row complete " : "todo-row flex justify-between text-2xl "}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons flex space-x-2  ">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon bg-red-600"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon bg-blue-600"
          />
        </div>
      </div>
    </div>
  ));
};

export default Todo;
