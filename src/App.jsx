import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="app-container">
        <header className="app-header">
          <div className="header-top">
            <h1>React To-Do App</h1>
            <button 
              className="theme-toggle-btn" 
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </header>
        <main>
          <TodoList />
        </main>
      </div>
    </div>
  );
}

export default App;
