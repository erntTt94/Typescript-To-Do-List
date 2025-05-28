import { useState } from "react";
import { Todo } from "../App";

interface Props {
  onAdd: (todo: Todo) => void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState<string>("");

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!text) return;

    const newItem = { text, completed: false, id: Date.now() };

    onAdd(newItem);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        placeholder="Create a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoInput;
