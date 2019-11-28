import React from 'react';
//import {bootstrap} from 'bootstrap'
//import logo from './logo.svg';
//import Hooks from './Hooks.js';
//import Counter from './Counter.js';
import TodoApp from './todo/TodoApp.js';
//import GoogleMap from './GoogleMap.js';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      
     <h1>Hi Umlaut guys</h1>
    {/*< Counter />  
    <GoogleMap/> */}
    
    <TodoApp/>
    </div>
  );
}

export default App;
