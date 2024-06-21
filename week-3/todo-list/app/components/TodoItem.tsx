"use client";
import React, { useState } from "react";
import { Todo } from "../type/types";

interface TodoItemProps {
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

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteItem,
  updateItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newDue, setNewDue] = useState(getFormattedDate(todo.due));

  function getFormattedDate(date: Date | undefined): string {
    return date instanceof Date ? date.toLocaleString().split("T")[0] : "";
  }

  const handleUpdate = () => {
    updateItem(todo.id, newTitle, newDescription, new Date(newDue));
    setIsEditing(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDescription(e.target.value);
  };

  const handleDueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDue(e.target.value);
  };

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDelete = () => {
    deleteItem(todo.id);
  };

  const formattedDueDate = todo.due.toLocaleString();

  return (
    <div className="mb-7">
      {isEditing ? (
        <>
          <div className="flex flex-col p-2 w-72 gap-4 shadow-sm border rounded">
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={handleTitleChange}
              className="p-2 border rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Description"
              value={newDescription}
              onChange={handleDescriptionChange}
              className="p-2 border rounded-md text-sm"
            />
            <input
              type="date"
              placeholder="Due Date"
              value={newDue}
              onChange={handleDueChange}
              className="p-2 border rounded-md text-sm"
            />
            <button
              onClick={handleUpdate}
              className="p-2 border rounded-md text-sm text-white bg-green-950 hover:opacity-90"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 border p-4 rounded shadow-sm">
          <span className="font-bold self-center">{todo.title}</span>
          <p>{todo.description}</p>
          <p className="opacity-70 self-center text-sm">
            {formattedDueDate.split("T")[0]}
          </p>
          <div className="flex flex-row gap-6 items-center justify-center mt-2">
            <button
              onClick={handleToggleComplete}
              className={`border-2 ${
                todo.completed ? "border-gray-800" : "border-green-800"
              } p-2 rounded-md hover:opacity-50`}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={handleDelete}
              className="border-2 bg-red-800 p-2 rounded-md text-white hover:opacity-90"
            >
              Delete
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="border-2 bg-yellow-600 p-2 rounded-md text-white hover:opacity-90"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
