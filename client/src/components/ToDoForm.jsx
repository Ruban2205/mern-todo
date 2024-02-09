import React, { useState } from "react";
import Button from "./Button";

const ToDoForm = ({ setTodos }) => {
    const [currentTodo, setCurrentTodo] = useState()

    async function handleSubmit(event) {
        event.preventDefault();
        const res = await fetch(`http://localhost:3000/api/todos/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: currentTodo })
        })
        const resData = await res.json();
        console.log(resData.data);
        setTodos((prevData) => [...prevData, resData.data])
    }



    return (
        <form className="flex gap-4 w-[60%]" onSubmit={handleSubmit}>
            <input onChange={(event) => {
                setCurrentTodo(event.target.value)
            }} className="w-full border-primary border-2 rounded-full p-3" type="text" />
            <Button type="submit">Add</Button>
        </form>
    )
}

export default ToDoForm; 