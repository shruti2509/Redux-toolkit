// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {

  // const [editForm, setEditForm]= useState(false);
  // const handleEditClick=()=>{
  //   setEditForm(true);
  // }
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
      
    </div>
  );
}

export default App;
