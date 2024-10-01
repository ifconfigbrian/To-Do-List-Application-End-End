import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL ='';

//async actions fir fetching,adding,deleting and toggle
export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async()=>{
    const response = await axios.get(`${API_URL}`)
    return response.data//return fetched tasks
});
export const addTask = createAsyncThunk('tasks/addTask',async(task)=>{
    const response = await axios.get(`${API_URL}`)
    return response.data//return newly created task
});
export const toggleTask = createAsyncThunk('tasks/toggleTask',async(id)=>{
    await axios.patch(`${API_URL}/tasks/${id}`,{completed:true})
    return id //return the id to toggle
});
export const deleteTask = createAsyncThunk('tasks/deleteTask',async(id)=>{
    await axios.delete(`${API_URL}/tasks/${id}`)
    return id //return id to delete
});