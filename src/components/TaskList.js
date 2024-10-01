/**
 * displays the list of tasks usint the TaskItem component
 * TaskList Component:
 * Displays a list of tasks using the TaskItem component.
 * 
 * Props:
 * - tasks: Array of task objects.
 */

import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks,onToggle,onDelete}) =>{
    return (
        <ul>
            {/* map over tasks array and render an item for each task */}
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </ul>
    )
}

export default TaskList;