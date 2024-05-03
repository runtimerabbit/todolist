"use client"
import axios from 'axios';
const ToDoItem = ({todo, key} : {todo:any, key:string}) => {

    const deleteTodo = async () => {
        // Send delete request to axios
        // create request in /api/todo
        // look at POST
        // Use todo id as your parameter
    }

    return (
        <div key={key} className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-between font-mono px-5 my-2" style={{height: "40px", width: "300px", fontSize: "20px"}}>{todo.todo}
        <button onClick={() => deleteTodo()}>-</button>
        </div>

    )
}

export { ToDoItem }