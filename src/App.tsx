import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  function addTodo(todo: Todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function deleteTodo(id: number) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id: number) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function clearCompleted() {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  }

  return (
    <div className="container">
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        filter={filter}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
      <FilterButtons
        filter={filter}
        setFilter={setFilter}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
