import React from 'react';

// TodoItem component receives a task object and functions to modify it
export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      {/* Checkbox to mark task as completed */}
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
        className="todo-checkbox"
      />
      
      {/* Task text, gets a special class if completed */}
      <span className={task.completed ? 'todo-text completed' : 'todo-text'}>
        {task.text}
      </span>
      
      {/* Button to delete the task */}
      <button 
        onClick={() => onDelete(task.id)} 
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
}
