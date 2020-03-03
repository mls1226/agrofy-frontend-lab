import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
