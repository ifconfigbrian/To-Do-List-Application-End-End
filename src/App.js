import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		try {
			const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
			setTasks(storedTasks);
		} catch (error) {
			console.error("Unable to load tasks", error);
			setTasks([]);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const addTask = newTask => {
		setTasks([...tasks, { ...newTask, id: uuidv4() }]);
	};

	const toggleTask = id => {
		setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
	};

	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
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
							<Route path="/tasks" element={<TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />} />
							<Route path="/task/:id" element={<TaskDetail tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />} />
							<Route path="/tasks/add" element={<TaskForm onAdd={addTask} />} />
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
