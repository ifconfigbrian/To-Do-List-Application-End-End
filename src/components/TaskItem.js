/**
 *represents a single task,handles toggling and deletion actions

 * TaskItem Component:
 * Represents a single task in the list. Displays the task name,
 * allows toggling completion, and deleting the task.
 * 
 * Props:
 * - task: The task object { id, name, completed }.
 * - onToggle: Function to toggle the task's completion status.
 * - onDelete: Function to delete the task.
 */

 import React from 'react';

 const TaskItem = ({task,onToggle,onDelete}) => {
    return (
        <li>
            <span
                style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                onClick={() => onToggle(task.id)} >
                    {task.name}
            </span>
            {/* button to delete the task */}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    )
 }

 export default TaskItem;