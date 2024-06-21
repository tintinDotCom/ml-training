import axios from "axios";

const API_URL = axios.create({
  baseURL: "http://localhost:3007",
});

export const fetchContacts = async () => {
  const response = await API_URL.get("/contacts");
  return response.data;
};

export const createContact = async (contacts: {
  contactName: string;
  contactNumber: string;
}) => {
  const response = await API_URL.post("contacts", contacts);
  return response.data;
};

export const updateContact = async (
  id: number,
  updates: Partial<{
    contactName: string;
    contactNumber: string;
  }>
) => {
  const response = await API_URL.patch(`/contact/${id}`, updates);
  return response.data;
};

export const deleteContact = async (id: number) => {
  await API_URL.delete(`/contacts/${id}`);
};

export const searchContact = async (contactName: string) => {
  const response = await API_URL.get(`/contact/${contactName}`);
  return response.data;
};

export default API_URL;
