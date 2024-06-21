"use client";
import React, { useState } from "react";

interface AddContactProps {
  addContact: (contactName: string, contactNumber: string) => void;
}

const AddContact: React.FC<AddContactProps> = ({ addContact }) => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = () => {
    if (contactName && contactNumber) {
      addContact(contactName, contactNumber);
      setContactName("");
      setContactNumber("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Contact Name"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        className="border rounded-lg p-2"
      />

      <input
        type="text"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        className="border rounded-lg p-2"
      />

      <button
        type="submit"
        className="bg-green-700 text-white p-2 rounded-lg hover:opacity-90"
      >
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
