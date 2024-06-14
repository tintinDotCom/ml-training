import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});

export const fetchTodo = async () => {
  const response = await api.get("/to-do");
  return response.data;
};

export const createTodo = async (todo: {
  title: string;
  description: string;
  due: Date;
}) => {
  const response = await api.post("/to-do", todo);
  return response.data;
};

export const updateTodo = async (
  id: number,
  updates: Partial<{
    title: string;
    description: string;
    due: Date;
    completed: boolean;
  }>
) => {
  const response = await api.patch(`/to-do/${id}`, updates);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  await api.delete(`/to-do/${id}`);
};

export const searchTodo = async (title: string) => {
  const response = await api.get(`/to-do/${title}`);
  return response.data;
};

export default api;
