"use client";
import React, { useState } from "react";
import { Contact } from "../types/type";

interface ContactItemProps {
  contact: Contact;
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newContactName: string,
    newContactNumber: string
  ) => void;
}
const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  deleteItem,
  updateItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContactName, setNewContactName] = useState(contact.contactName);
  const [newContactNumber, setNewContactNumber] = useState(
    contact.contactNumber
  );

  const handleUpdate = () => {
    updateItem(contact.id, newContactName, newContactNumber);
    setIsEditing(false);
  };

  const handleContactNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContactName(e.target.value);
  };

  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewContactNumber(e.target.value);
  };

  const handleDelete = () => {
    deleteItem(contact.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder="Contact Name"
            value={newContactName}
            onChange={handleContactNameChange}
            className="p-2 border rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={newContactNumber}
            onChange={handleContactNumberChange}
            className="p-2 border rounded-md text-sm"
          />
          <button
            onClick={handleUpdate}
            className="p-2 border rounded-md text-sm text-white bg-green-950 hover:opacity-90"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <span>{contact.contactName}</span>
          <p>{contact.contactNumber}</p>

          <button
            onClick={handleDelete}
            className="border-2 bg-red-800 p-2 rounded-md text-white hover:opacity-90"
          >
            Delete
          </button>

          <button
            onClick={handleUpdate}
            className="border-2 bg-yellow-600 p-2 rounded-md text-white hover:opacity-90"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactItem;
