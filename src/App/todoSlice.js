import {createSlice, nanoid} from "@reduxjs/toolkit"

// const initialState ={
//     todos: [{id: 1, text: 'Hello'}],
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action)=>{
        //   const todo ={
        //     id: nanoid(),
        //     text: action.payload,
        //   }
         state.push(action.payload)
        },
        removeTodo: (state, action) => {
            // state.todos = state.todos.filter((todo) =>
            // todo.id !== action.payload)
            state.splice(action.payload, 1)
            console.log(action.payload)
        },
        updateUser: (state, action) => {
            const { id, text } = action.payload;
            // const updatedTodos = state.todos.map(todo => {
            //     // Check if the todo item has the specified id
            //     if (todo.id === id) {
            //         // If it does, create a new object with the updated text
            //         return { ...todo, text: newText };
            //     }
            //     // If it doesn't, leave the todo item unchanged
            //     return todo;
            // });
        
            // // Return a new state object with the updated todos
            // return { ...state, todos: updatedTodos };



            
            state[id] = text;

             // Check if the todo item has the specified id
        // if (todo.id === id) {
        //     // If it does, create a new object with the updated text
        //     return { ...todo, text: newText };
        // }
        // If it doesn't, leave the todo item unchanged
        // return todo;
    // });

    // Return a new state object with the updated todos
    // return { ...state, todos: updatedTodos };
        },
    }
})
export const {addTodo, removeTodo, updateUser} = todoSlice.actions

export default todoSlice.reducer
