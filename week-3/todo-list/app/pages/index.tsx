"use client";
import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import SearchBar from "../components/SearchBar";
import { searchTodo } from "../utils/api";
import { Todo } from "../type/types";

const TodoHome: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initially, load all todo or a default set
    fetchTodo("");
  }, []);

  const fetchTodo = async (query: string) => {
    setLoading(true);
    try {
      const result = await searchTodo(query);
      setTodo(result);
    } catch (error) {
      console.error("Failed to fetch todo", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <h1 className="text-4xl font-bold">Todo List</h1>
      <SearchBar onSearch={fetchTodo} />
      {loading ? <p>Loading...</p> : <TodoList />}
    </div>
  );
};

export default TodoHome;
