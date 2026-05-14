import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React To-Do App</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
