import React from "react";
import { FaTrash } from "react-icons/fa";

const ListItem = ({ id, content, isDone, setTodos }) => {

    async function handleUpdate() {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'PUT'
        })
        const jsonData = await res.json()
        /**
         * [{..}, {...}, {...., isDone}, {...}]
         */
        setTodos((prevTodos) => prevTodos.map(todo => {
            if (todo._id === id) return jsonData.data;
            return todo;
        }))
    }

    async function handleDelete() {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'DELETE'
        })
        const jsonData = await res.json()

        // Higher order fns: map, filter, reduce
        setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id))
    }

    return (
        <div className={`bg-light w-[60%] flex justify-between px-7 py-4 rounded-full`}>
            <p className={isDone && "line-through"}>{content}</p>
            <div className="flex items-center gap-4">
                <input type="checkbox" onChange={handleUpdate} checked={isDone} name="done" id="done" />
                <button onClick={handleDelete} className="text-red-500">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default ListItem