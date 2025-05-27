import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://68357811cd78db2058c1a4a3.mockapi.io/tasks/todo/users";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(BASE_URL);
  return response.data; 
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (title: string) => {
    const response = await axios.post(BASE_URL, {
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: { id: string; title?: string; completed?: boolean }) => {
    const response = await axios.put(`${BASE_URL}/${todo.id}`, todo);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  }
);
