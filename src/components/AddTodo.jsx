import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
//making states
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
//dispatch reducer ko use ker ke store mein value aadd kert hai
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input type="text" 
        className='flex-1 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none'  
        placeholder='Enter a todo...'
        value= {input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button 
        type='submit'
        className='bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md font-semibold'>Add Todo</button>
        
    </form>

  )
}

export default AddTodo
