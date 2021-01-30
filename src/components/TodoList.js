import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "./TodoList.css";

function TodoList() {
  let todos = useSelector((state) => state);
  return (
    <div className="list d-flex">
      <div className="card1">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
