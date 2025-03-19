import React, { useState } from 'react'
import { addTodo } from '../redux/TodoSlice'
import { useDispatch } from 'react-redux'



function TodoInput() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text)); 
            setText("");
        }
    };



    return (
        <div className="mb-8">
            <form onSubmit={handleSubmit} className="flex items-center">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task..." className="flex-grow px-5 py-3 border-2 border-indigo-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300" />
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-r-lg transition duration-300 font-medium">
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoInput