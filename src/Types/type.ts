// Types/type.ts

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export interface Props {
  todo: Todo;
}

export type FilterType = "all" | "completed" | "incomplete";

export interface TodoFilterProps {
  todos: Todo[];
  onFilterChange: (filteredTodos: Todo[]) => void;
}

export interface LoaderProps {
  loading: boolean;
  error: string | null;
  empty: boolean;
}
