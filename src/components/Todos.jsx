import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector (state => state.todos )
    const dispatch = useDispatch()

  return (
    <>
      {todos.map((todo) => (
        <ul className="list-disc pl-5 mt-2">
          <li className="text-gray-300" key={todo.id}>
            {todo.text}
            <button
            onClick={()=> dispatch(removeTodo(todo.id))}
            > </button>
        </li>
        </ul>
        
      ))}
    </>
  )
}

export default Todos
