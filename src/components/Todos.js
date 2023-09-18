import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo} from '../App/todoSlice'


function Todos() {
    // useSelector((state) =>{
    //     state
    // })

    const todos = useSelector(state => state.todos)
    console.log(todos);
    const dispatch = useDispatch()
  return (
   <>
   <strong><h4>Todo List</h4></strong>
   {todos.map((todo) => (
    <div className='text-white'> <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' key ={todo.id}><div>{todo.text}</div>  
    <button className='text-white bg-red-500 border-0 py-1 px-4 focus: outline-none hover: bg-red-600 rounded text-md' onClick={() => dispatch(removeTodo(todo.id))} >delete</button></li></div>
    
   ))}
   </>
  )
}

export default Todos
