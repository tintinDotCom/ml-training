import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (title: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [title, setTitle] = useState("");

  const handleSearch = () => {
    onSearch(title);
  };
  return (
    <div className="flex flex-row gap-2">
      <input
        placeholder="Search tasks..."
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 text-sm rounded-2xl shadow-sm"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="p-2 bg-green-950 text-white rounded-2xl text-sm"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
