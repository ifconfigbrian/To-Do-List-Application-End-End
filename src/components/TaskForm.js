/**
 * handles adding new tasks
 * TaskForm Component:
 * Renders a form to add a new task. 
 * 
 * Props:
 * - onAdd: Function to add a new task.
 */

import React,{useState} from "react";

const TaskForm = ({onAdd}) => {
    const [taskText,setTaskText] = useState('');//state for task text
    const [taskDate,setTaskDate] = useState('');//holds date input for the task

    //form submission function
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!taskText.trim()) return;//prevents adding empty tasks

     const newTask ={
        text:taskText,
        date:taskDate,
     }

     onAdd(newTask)
     setTaskText('')
     setTaskDate('')

    }
    return(
        <form className="bg-gray-900 p-6 rounded-3xl shadow-lg" onSubmit={handleSubmit}>
         <h2 className="text-white text-2xl font-bold mb-4">Add New Task</h2>
         <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="taskText">Task</label>
            <input type="text" id="taskText" className="w-full p-2 rounded-md text-black"
             value={taskText} onChange={(e)=> setTaskText(e.target.value)} placeholder="Enter Task Description"/>
         </div>
         <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="taskDate">Due Date</label>
            <input type="date" id="taskDate" className="w-full p-2 rounded-md text-black"
            value={taskDate} onChange={(e)=> setTaskDate(e.target.value)}/>
         </div>
         <button type="submit"className="bg-purple-600 text-white py-2 px-4 rounded-full w-full">
            Add Task
         </button>
        </form>
    )
}

export default TaskForm;