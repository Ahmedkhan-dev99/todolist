import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineSave } from "react-icons/md";

import { removeTodo,updateTodo } from '../redux/TodoSlice'
import { useDispatch, } from "react-redux"



function TodoList({todo}) {
    
    const [edit,setEdit] = useState(false)
    const [newText,setNewText] = useState(todo.text)
    const dispatch = useDispatch()

    
    
    const Save = ()=> {
        setEdit((pre)=>!pre)
        dispatch( updateTodo({id:todo.id,newText}))
        console.log(edit);
        
    }

    return (
        <div className="space-y-4">
            <div
                className="flex items-center justify-between mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 hover:shadow-md transition duration-300">
                <div className="flex items-center space-x-3 ">
                    <input value={newText} onChange={(e)=>setNewText(e.target.value) } className={`${edit? 'border cursor-text' :''}cursor-pointer text-gray-800 font-medium  border-indigo-500 p-2 rounded-lg bg-transparent outline-none focus:border-indigo-500 transition duration-300 w-96`} readOnly={!edit}/>
                </div>
                <div className="flex space-x-3">
                    <button onClick={Save}  className=" text-indigo-500 hover:text-indigo-700 text-2xl cursor-pointer transition duration-300">
                    {edit? <MdOutlineSave />:<FaEdit /> }
                    
                    
                    </button>

                    <button onClick={()=>dispatch(removeTodo(todo.id))} className="text-red-500 hover:text-red-700 text-2xl cursor-pointer transition duration-300">
                    <RiDeleteBinLine />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TodoList