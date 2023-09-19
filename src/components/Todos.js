import { useState } from 'react' 
import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo, updateUser} from '../App/todoSlice'
// import { BiSolidEditAlt , BiSave } from 'react-icons/bi';


function Todos() {
    
    const [editableUser, setEditableUser] = useState({id: null, text: ""});
    const editUser = (id) => {
      if (editableUser.id === null) {
        setEditableUser({ id});
      } else {
        
        dispatch(updateUser({ id: editableUser.id, text: editableUser.text }));
        setEditableUser({ id: null, text: '' });
      }
    };

    const handleInputChange = (e) => {
      setEditableUser({ ...editableUser, text: e.target.value });
    };
  

    const todos = useSelector(state => state.users)
    console.log(todos);
    const dispatch = useDispatch()
  return (
   <>
   <strong><h4>Todo List</h4></strong>
   {todos.map((todo, id) => (
     <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' key ={id} style={{color: 'white'}}>
      
      {editableUser.id === id ? (
            <input style={{color: 'black'}}
              type="text"
              value={editableUser.text}
              onChange={handleInputChange}
            />
          ):(
      <span>{todo}</span> 
      )}
    <button className='text-white bg-red-500 border-0 py-1 px-4 focus: outline-none hover: bg-red-600 rounded text-md' 
    
    onClick={() => dispatch(removeTodo(id))} >delete</button>
    
          <button onClick={() => editUser(id)}>
          {editableUser.id === id ?  <div>save</div> : <div>edit</div> }
          </button>
    </li>
    
   ))}
   </>
  )
}

export default Todos
