import React from "react";
import { FaTrash } from "react-icons/fa";

const ListItem = ({ content, isDone }) => {
    return (
        <div className={`bg-light w-[60%] flex justify-between px-7 py-4 rounded-full`}>
            <p className={isDone && "line-through"}>{content}</p>
            <div className="flex items-center gap-4">
                <input type="checkbox" checked={isDone} name="done" id="done" />
                <button className="text-red-500">
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default ListItem