export interface Contact {
  id: number;
  contactName: string;
  contactNumber: string;
}

export interface ContactItemProps {
  contact: Contact;
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newContactName: string,
    newContactNumber: string
  ) => void;
}
export interface ContactListProps {
  contacts: Contact[];
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newContactName: string,
    newContactNumber: string
  ) => void;
}
