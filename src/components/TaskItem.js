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
 import PropTypes from 'prop-types'

 const TaskItem = ({task,onToggle,onDelete}) => {
    const{id,name,completed,date} = task
    return (
        <li className='flex justify-between items-center py-2'>
            <span
                 className={`cursor-pointer ${completed ? 'line-through text-gray-300' : 'text-gray-200'}`}
                onClick={() => onToggle(id)} >
                    {name}
            </span>
            {/* display the date */}
            <p className='text-gray-400'>{date}</p>
            {/* button to delete the task */}
            <button className='text-red-500 hover:underline' onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}
    TaskItem.propTypes = {
        task: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            date: PropTypes.string, // Optional date property
        }).isRequired,
        onToggle: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    }
 

 export default TaskItem;