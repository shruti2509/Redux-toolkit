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
   <h1>data</h1>
   {todos.map((todo) => (
    <div key ={todo.id}>{todo.text} <button onClick={() => dispatch(removeTodo(todo.id6))}>delete</button></div>
    
   ))}
   </>
  )
}

export default Todos
