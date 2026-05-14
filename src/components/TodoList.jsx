import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  // State for storing the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State for storing the current value of the input field
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    // Don't add empty tasks
    if (inputValue.trim() === '') return;

    // Create a new task object
    const newTask = {
      id: Date.now(), // Use current timestamp as a simple unique ID
      text: inputValue,
      completed: false
    };

    // Update tasks state with the new task
    setTasks([...tasks, newTask]);
    
    // Clear the input field
    setInputValue('');
  };

  // Function to toggle the completed status of a task
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>
      
      {/* Form to add new tasks */}
      <form onSubmit={handleAddTask} className="todo-form">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

      {/* List of tasks */}
      <ul className="todo-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          tasks.map(task => (
            <TodoItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTaskCompletion} 
              onDelete={deleteTask} 
            />
          ))
        )}
      </ul>
    </div>
  );
}
