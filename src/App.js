import React, { useState, useEffect } from 'react'; // Importing React and hooks
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importing routing components
import TaskList from './components/TaskList'; // Importing TaskList component
import TaskForm from './components/TaskForm'; // Importing TaskForm component
import TaskDetail from './components/TaskDetail'; // Importing TaskDetail component
import { v4 as uuidv4 } from 'uuid'; // Importing UUID for unique IDs

const App = ()=>{
  const [tasks,setTasks] = useState([]);
  // load tasks from local storage on mount
  useEffect(()=>{
    try{
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];//retrieve tasks from local storage
      setTasks(storedTasks)//set tasks state
    }catch (error){
      console.error('unable to load from local storage',error)
      setTasks([])
    }
  },[])
  // save tasks to localstorage whenever they change
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])//run this effect whenever tasks change
  // add a new task
  const addTask = (newTask) =>{
    setTasks([...tasks,{...newTask,id:uuidv4()}])
  }
  // toggle task completion
  const toggleTask = (id)=>{
    setTasks(tasks.map(task => task.id === id ? {...task,completed: !task.completed} : task))
  }
  // delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }
  return(
    <Router>
      <div className='app-container'>
        <nav>
          <ul>
            <li><Link to="/tasks">All Tasks</Link></li>
            <li><Link to="/tasks/add">Add Task</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/'element={
            <>
            <h1>Task Manager</h1>
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
            </>
          }/>
          <Route path='/add'element={
            <>
            <h1>Add new Task</h1>
            <TaskForm onAdd={addTask}/>
            </>
          }/>
          <Route path='/task/:id'element={<TaskDetail tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
