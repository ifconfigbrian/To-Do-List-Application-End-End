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
        onAdd({text:taskText,date:taskDate})
        if (!taskText.trim()) return;//prevents adding empty tasks
        setTaskText('')
        setTaskDate('')
    }
    return(
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6">
            <div className="mb-4">
                <label className="block text-white mb-1">Task:</label>
                <input
                type="text"
                value={taskText}
                onChange={(e)=>setTaskText(e.target.value)} required
                className="w-full p-2 rounded-md bg-gray-700 text-white"
                placeholder="Enter Your Task"/>
            </div>
            <button type="submit" className="bg-purple-600 text-white py-2 rounded-full w-full">
               Add Task
            </button>
        </form>
    )
}

export default TaskForm;