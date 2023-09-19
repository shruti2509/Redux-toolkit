import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState ={
    todos: [{id: 1, text: 'Hello'}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
          const todo ={
            id: nanoid(),
            text: action.payload,
          }
         state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
            todo.id !== action.payload)
        },
        updateUser: (state, action) => {
            const { id, text } = action.payload;
            state[id] = text;
        },
    }
})
export const {addTodo, removeTodo, updateUser} = todoSlice.actions

export default todoSlice.reducer
