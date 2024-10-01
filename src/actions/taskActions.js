// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const API_URL ='';

//async actions fir fetching,adding,deleting and toggle
export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async()=>{
    // const response = await axios.get(`${API_URL}`)
    // return response.data//return fetched tasks
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    return storedTasks.map(task => ({...task,id:task.id.toString(),})) //return stored tasks
});

export const addTask = createAsyncThunk('tasks/addTask',async(task)=>{
    // const response = await axios.post(`${API_URL}`)
    // return response.data//return newly created task
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newTask = {...task,id:Date.now().toString()}
    const updatedTasks = [...storedTasks,newTask]
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    return newTask  
});

export const toggleTask = createAsyncThunk('tasks/toggleTask',async(id)=>{
    // await axios.patch(`${API_URL}/tasks/${id}`,{completed:true})
    // return id //return the id to toggle
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    const updatedTasks = storedTasks.map(task => task.id === id ? {...task,completed:!task.completed}:task)
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    return id //return the id to toggle
});

export const deleteTask = createAsyncThunk('tasks/deleteTask',async(id)=>{
    // await axios.delete(`${API_URL}/tasks/${id}`)
    // return id //return id to delete
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    const updatedTasks = storedTasks.filter(task => task.id !==id)
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    return id //return id to delete
});