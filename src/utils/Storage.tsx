import type { Todo } from "../Types/type";

const TODO_STORAGE_KEY = "todos";
const TODO_DATE_KEY = "todosDate";

export const getTodayDateString = (): string => {
  const today = new Date();
  return today.toISOString().slice(0, 10); 
};

export const loadTodosFromStorage = (): Todo[] | null => {
  const savedDate = localStorage.getItem(TODO_DATE_KEY);
  const todayDate = getTodayDateString();

  if (savedDate === todayDate) {
    const savedTodos = localStorage.getItem(TODO_STORAGE_KEY);
    if (savedTodos) {
      return JSON.parse(savedTodos) as Todo[];
    }
  }
  return null;
};

export const saveTodosToStorage = (todos: Todo[]): void => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
  localStorage.setItem(TODO_DATE_KEY, getTodayDateString());
};

export const clearTodosStorage = (): void => {
  localStorage.removeItem(TODO_STORAGE_KEY);
  localStorage.setItem(TODO_DATE_KEY, getTodayDateString());
};
