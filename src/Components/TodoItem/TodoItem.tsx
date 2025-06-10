import React from "react";
import type { Props} from "../../Types/type";
import { useAppDispatch } from "../../store/Redux/hook";
import { deleteTodo, updateTodo } from "../../store/Todo/TodoThunk";
import { FaTrash } from "react-icons/fa";
import "./TodoItem.css";

const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="todo-item">
      <div className="flex items-start">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>

        <div className="todo-content">
          <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
          <span className="todo-date">
            {new Date(todo.createdAt).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="tooltip-container">
        <button
          className="todo-delete"
          onClick={handleDelete}
          aria-label={`Delete todo ${todo.title}`}
        >
          <FaTrash />
        </button>
        <span className="tooltip-text">Delete</span>
      </div>
    </li>
  );
};

export default TodoItem;
