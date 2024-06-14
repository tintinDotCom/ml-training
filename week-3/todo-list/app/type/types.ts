export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due: Date;
}

export interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newTitle: string,
    newDescription: string,
    newDue: Date
  ) => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newTitle: string,
    newDescription: string,
    newDue: Date
  ) => void;
}
