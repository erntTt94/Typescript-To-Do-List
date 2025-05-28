import React from "react";
import { Todo } from "../App";

interface Props {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggleTodo, onDeleteTodo }) => (
  <li className="todo-item">
    <button
      className={`checkbox ${todo.completed ? "checked" : ""}`}
      onClick={() => onToggleTodo(todo.id)}
    ></button>
    <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
    {todo.completed && (
      <button className="delete-btn" onClick={() => onDeleteTodo(todo.id)}>
        ❌
      </button>
    )}
  </li>
);

export default TodoItem;
