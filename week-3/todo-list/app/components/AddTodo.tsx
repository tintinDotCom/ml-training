import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (title: string, description: string, due: Date) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");

  const handleSubmit = () => {
    if (title && due) {
      addTodo(title, description, new Date(due));
      setTitle("");
      setDescription("");
      setDue("");
    }
  };

  return (
    <div className="flex flex-col w-80 p-6 gap-2 border-b mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg p-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded-lg p-2"
      />
      <input
        placeholder="Due Date"
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        className="border rounded-lg p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-700 text-white p-2 rounded-lg hover:opacity-90"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
