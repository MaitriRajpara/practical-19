import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/Redux/hook";
import { fetchTodos } from "./store/Todo/TodoThunk";
import { setTodos } from "./store/Todo/TodoSlice";
import type { Todo } from "./Types/type";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoItem from "./Components/TodoItem/TodoItem";
import TodoFilter from "./Components/Filter/TodoFilter";
import Loader from "./Components/Loader/Loader";
import {
  loadTodosFromStorage,
  saveTodosToStorage,
  clearTodosStorage,
} from "./utils/Storage";
import "./App.css";

const TodoApp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos, loading, error } = useAppSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = loadTodosFromStorage();
    if (savedTodos) {
      dispatch(setTodos(savedTodos));
    } else {
      clearTodosStorage();
      dispatch(setTodos([]));
      dispatch(fetchTodos());
    }
  }, [dispatch]);

  useEffect(() => {
    if (todos && todos.length >= 0) {
      saveTodosToStorage(todos);
    }
  }, [todos]);

  return (
    <div className="todo-app-container">
      <h1 className="todo-app-title">Todo List</h1>

      <TodoForm />

      <TodoFilter todos={todos} onFilterChange={setFilteredTodos} />

      <Loader loading={loading} error={error} empty={filteredTodos.length === 0} />

      {!loading && !error && filteredTodos.length > 0 && (
        <ul className="todo-list">
          {filteredTodos.map((todo: Todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
