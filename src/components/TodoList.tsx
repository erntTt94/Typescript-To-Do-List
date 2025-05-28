import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({
  todos,
  filter,
  onToggleTodo,
  onDeleteTodo,
}) => {
  const filtered = todos.filter(
    (t) =>
      filter === "all" ||
      (filter === "active" && !t.completed) ||
      (filter === "completed" && t.completed)
  );

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
