import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";
import { v4 as uuidv4 } from "uuid";

const App = ()=>{
  const [tasks,setTasks] = useState([])
  // load tasks from local storage
  useEffect(()=>{
    try{
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks)
    }catch(error){
      console.error('unable to load files',error)
      setTasks([])
    }
  },[]);
  //save tasks to local storage whenever state changes
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks]);//only updates if list changes

  //function to add a new task
  const addTask = (newTask) =>{
    setTasks([...tasks,{...newTask,id:uuidv4()}])
  }

  // function to toggle completion status of a task
  const toggleTask =(id) =>{
    setTasks(tasks.map(task => task.id === id ? {...task,completed: !task.completed} : task))
  }

  // function to delete the task
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !==id))//remove task from the state
  }

  return(
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            {/* navigation links */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tasks">Your Tasks</Link></li>
            <li><Link to="/tasks/add">Add Task</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/"element={
            <div className="bg-black min-h-screen text-white p-4 font-sans">
              <div className="max-w-md mx-auto">
                {/* first screen */}
                <div className="bg-gray-900 rounded-3xl p-6 mb-8">
                  <h1 className="text-4xl font-bold mb-6">Your Task Manager Sucks:)</h1>
                  <div className="bg-gray-800 rounded-xl p-4 mb-4">
                    <p className="text-white">Yes, Created in one day</p>
                    <p className="text-yellow-400">😊</p>
                    <p className="text-gray-400 text-sm">23rd Nov 2003</p>
                  </div>
                  {/* tasks screen */}
                  <Link to="/tasks" className="bg-purple-600 text-white py-3 px-6 rounded-xl w-full text-center">
                    Click To Start
                    </Link>
                </div>
              </div>
            </div>
          }/>
          {/* task list screen */}
          <Route path="/tasks"element={
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
          }/>
          {/* form screen for adding new tasks */}
          <Route path="/task/:id"element={
            <TaskDetail tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
          }/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;