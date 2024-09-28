// src/reducers/taskReducer.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return await api.fetchTasks();
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  return await api.createTask(task);
});

export const toggleTask = createAsyncThunk('tasks/toggleTask', async (id) => {
  return await api.updateTask(id, { completed: true });
});

export const removeTask = createAsyncThunk('tasks/removeTask', async (id) => {
  await api.deleteTask(id);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const task = state.tasks.find(task => task.id === action.payload.id);
        if (task) {
          task.completed = action.payload.completed;
        }
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;