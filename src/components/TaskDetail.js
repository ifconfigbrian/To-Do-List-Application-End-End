/**
 * TaskDetail Component:
 * Displays the details of a single task, fetched by ID from the task list.
 * 
 * Props:
 * - tasks: Array of task objects.
 * - onToggle: Function to toggle task completion.
 * - onDelete: Function to delete a task.
 */

import React from "react";
import { useParams } from "react-router-dom";

const TaskDetail = ({tasks,onToggle,onDelete}) => {
    const {id} = useParams();//get id from route parameters
    const task = tasks.find(task => task.id === parseInt(id));//find task by id

    if(!task) return <p>Task Not Found</p>;//case when task is 404

    return(
        <div>
            <h2>{task.name}</h2>
            <p>Status: {task.completed ? 'Completed' : 'Pending'} </p>
            {/* button to toggle completion */}
            <button onClick={() => onToggle(task.id)}>
                {task.completed ? 'Mark as incomplete':'Mark as complete'}
            </button>
            {/* button to delete task */}
            <button onClick={() => onDelete(task.id)}>Delete Task</button>
        </div>
    )
}

export default TaskDetail;