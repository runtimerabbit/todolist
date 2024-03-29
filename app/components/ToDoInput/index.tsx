"use client"
import { useState } from "react"

const ToDoInput = () => {
    const [task,setTask]=useState("")
    return (
        <div className="flex flex-row justify-center space-around content-center items-center w-full">
          <label className="block text-gray-700 text-sm font-bold align-center align-middle text-xl mr-3" htmlFor="username">
          Enter task
          </label> 
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Math homework" onChange={(evt) => setTask(evt.target.value)}></input>
          <button className="bg-slate-700 text-white rounded px-4 py-2 ml-2" onClick={() => console.info(task)}>+</button>
        </div>
    )
}

export{ToDoInput} 