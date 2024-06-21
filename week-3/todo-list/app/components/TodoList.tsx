"use client";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { fetchTodo, createTodo, updateTodo, deleteTodo } from "../utils/api";

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due: Date;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodo();
      setTodos(data);
    };
    getTodos();
  }, []);

  const handleCreate = async (
    title: string,
    description: string,
    due: Date
  ) => {
    const todo = await createTodo({ title, description, due });
    setTodos([...todos, todo]);
  };

  const handleUpdate = async (id: number, updates: Partial<Todo>) => {
    const todo = await updateTodo(id, updates);
    setTodos(todos.map((t) => (t.id === id ? todo : t)));
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      handleUpdate(id, { completed: !todo.completed });
    }
  };

  return (
    <div className="flex flex-col p-2 justify-center items-center">
      <AddTodo addTodo={handleCreate} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteItem={handleDelete}
            updateItem={(id, newTitle, newDescription, newDue) =>
              handleUpdate(id, {
                title: newTitle,
                description: newDescription,
                due: newDue,
              })
            }
          />
        ))
      ) : (
        <p>No todos yet. Add some to get started!</p>
      )}
    </div>
  );
};

export default TodoList;
