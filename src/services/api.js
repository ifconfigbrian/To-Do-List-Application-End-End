// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (id, updates) => {
  const response = await axios.patch(`${API_URL}/tasks/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};