"use client";
import React, { useState, useEffect } from "react";
import {
  createContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "../services/api";

export interface Contact {
  id: number;
  contactName: string;
  contactNumber: string;
}
const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const getContacts = async () => {
      const data = await fetchContacts();
      setContacts(data);
    };
    getContacts();
  });

  const handleCreate = async (contactName: string, contactNumber: string) => {
    const contact = await createContact({ contactName, contactNumber });
    setContacts([...contacts, contact]);
  };

  const handleUpdate = async (id: number, updates: Partial<Contact>) => {
    const contact = await updateContact(id, updates);
    setContacts(contacts.map((t) => (t.id === id ? contact : t)));
  };

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    setContacts(contacts.filter((t) => t.id !== id));
  };
  return <div>ContactList</div>;
};

export default ContactList;
