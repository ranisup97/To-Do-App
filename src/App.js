import React from 'react';
import './App.css';
import {TodoInput, TodoList} from './components';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <div className="App m-5">
      <div className='title'>To-Do App</div>
      <TodoInput/>
      <TodoList/>

    </div>
  );
}

export default App;
