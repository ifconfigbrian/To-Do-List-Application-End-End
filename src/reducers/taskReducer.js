import { createSlice } from "@reduxjs/toolkit";
import { deleteTask, fetchTasks, toggleTask,addTask } from "../actions/taskActions";

const initialState ={
  tasks:[],
  loading:false,
  error:null,
};
//create a slice for tasks
const taskSlice = createSlice({
  name:'tasks',//slice name
  initialState,//initial state
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchTasks.pending,(state)=>{
      state.loading = true
    })
    .addCase(fetchTasks.fulfilled,(state,action)=>{
      state.loading = false//set loading to false on success
      state.tasks = action.payload//set tasks with the fetched data
    })
    .addCase(fetchTasks.rejected,(state,action)=>{
      state.loading = false //loading to false on error
      state.error = action.error.message //capture the error message
    })
    .addCase(addTask.fulfilled,(state,action)=>{
      state.tasks.push(action.payload)
    })
    .addCase(toggleTask.fulfilled,(state,action)=>{
      const task = state.tasks.find(task => task.id === action.payload)
      if (task){
        task.completed = !task.completed //toggle the complete status
      } 
    })
    .addCase(deleteTask.fulfilled,(state,action)=>{
      state.tasks = state.tasks.filter(task => task.id !== action.payload) //remove task from list
    })
  }
})
export default taskSlice.reducer