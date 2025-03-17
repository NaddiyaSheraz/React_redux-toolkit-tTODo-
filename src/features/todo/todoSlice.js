import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid =>it is a method it generate nique ids

const initialState = {
    todos: [{id: 1, text: "hello"}] //array us mein object
}


export const todoSlice = createSlice({  //createSlice ye ek method hai aur is mein zada tar objects ate hain
    name: 'todo', 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload // payload ek object hai is mein id kuuch bhi aa skta hai
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.
             id !== action.payload )
        },

    }//object hai lknproperties aur functions ate hain is mein
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer