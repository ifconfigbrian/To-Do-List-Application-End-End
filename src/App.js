import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks,addTask,toggleTask,deleteTask } from "./actions/taskActions";

const App = () => {
	const dispatch = useDispatch(); // Initialize dispatch for Redux

	const tasks = useSelector((state)=> state.tasks.tasks) //get tasks from redux state

	// fetch tasks on component mount from redux store
	useEffect(() => {
	  dispatch(fetchTasks())
	}, [dispatch]); 

	const handleAddTask = (newTask) => {
		// Function to add a new task
		const taskWithId = {...newTask,id:uuidv4()}
		dispatch(addTask(taskWithId)) //update redux store
	};

	const handleToggleTask = (id) => {
		// Function to toggle a task's completion status
		dispatch(toggleTask(id))

	};

	const handleDeleteTask = (id) => {
		// Function to delete a task
		dispatch(deleteTask(id))

	};

	return (
	<Router>
		<div className="app-container bg-black min-h-screen text-white">
		 <div className="max-w-full sm:max-w-lg mx-auto p-4">
		  <div className="bg-gray-900 rounded-3xl p-6 overflow-y-auto min-h-screen">
			<nav className="mb-6">
				<ul className="flex justify-around text-center">
				  <li className="flex-1">
					 <Link to="/" className="text-white bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-full block">
						Home
					 </Link>
				  </li>
				  <li className="flex-1">
				    <Link to="/tasks" className="text-white bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-full block">
					  Your Tasks
					</Link>
					</li>
					<li className="flex-1">
					<Link to="/tasks/add" className="text-white bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-full block">
					  Add Task
					</Link>
					</li>
					</ul>
					</nav>
	<Routes>
		<Route
			path="/"
			element={
			 <div className="bg-gray-900 rounded-3xl p-6 mb-8">
				<h1 className="text-4xl font-bold mb-6">Your Task Manager Sucks :)</h1>
			 <div className="bg-gray-800 rounded-xl p-4 mb-4">
		    	<p className="text-white">Yes, Created in one day</p>
				<p className="text-yellow-400">😊</p>
				<p className="text-gray-400 text-sm">23rd Nov 2003</p>
			</div>
				<Link to="/tasks" className="bg-purple-500 text-white py-3 px-6 rounded-xl w-full text-center">
					Click To Start
				</Link>
									</div>
					}
					/>
		<Route path="/tasks" element={<TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />} />
		<Route path="/task/:id" element={<TaskDetail tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />} />
	    <Route path="/tasks/add" element={<TaskForm onAdd={handleAddTask} />} />
		</Routes>
		</div>
		</div>
		</div>
	</Router>
	);
};

export default App;
