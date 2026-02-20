import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const loginUser = async (email, password) => {
  const response = await API.post("/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (username, email, password) => {
  const response = await API.post("/auth/register", { username, email, password });
  return response.data;
};

// Skills
export const getSkills = async () => {
  const response = await API.get("/skills");
  return response.data;
};

export const addSkill = async (name, level) => {
  const response = await API.post("/skills", { name, level });
  return response.data;
};

export const updateSkill = async (id, name, level) => {
  const response = await API.put(`/skills/${id}`, { name, level });
  return response.data;
};

export const deleteSkill = async (id) => {
  const response = await API.delete(`/skills/${id}`);
  return response.data;
};

export default API;
