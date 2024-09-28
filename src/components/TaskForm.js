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
    const [taskName,setTaskName] = useState('');//track new task

    //form submission function
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!taskName.trim()) return;//prevents adding empty tasks

        onAdd({name:taskName,completed:false})
        setTaskName('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}//update taskname on input change
            placeholder="Enter a new task!"
            
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;