import React, { useState } from "react";
import { useAppDispatch } from "../../store/Redux/hook";
import { addTodo } from "../../store/Todo/TodoThunk";
import "./Todoform.css"

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a todo"
        className="todo-input"
      />
      <button type="submit" className="todo-submit-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
