// Components/TodoFilter/TodoFilter.tsx
import React, { useState, useEffect } from "react";
import type { FilterType ,  TodoFilterProps} from "../../Types/type";


const TodoFilter: React.FC<TodoFilterProps> = ({ todos, onFilterChange }) => {
  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    const applyFilter = () => {
      if (filter === "completed") {
        return todos.filter((todo) => todo.completed);
      } else if (filter === "incomplete") {
        return todos.filter((todo) => !todo.completed);
      }
      return todos;
    };

    onFilterChange(applyFilter());
  }, [filter, todos, onFilterChange]);

  return (
    <div className="todo-filter-buttons">
      <button
        className={`filter-btn ${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`filter-btn ${filter === "incomplete" ? "active" : ""}`}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TodoFilter;
