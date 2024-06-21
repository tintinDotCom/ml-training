import React, { useState, useEffect } from "react";
import ContactList from "../components/ContactList";
import { Contact } from "../types/type";

const Index: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contact List</h1>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Index;
