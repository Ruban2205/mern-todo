import React from "react";
import Button from "./Button";

const ToDoForm = () => {
    return (
        <form action="" className="flex gap-4 w-[60%]">
            <input className="w-full border-primary border-2 rounded-full" type="text" />

            <Button>Add</Button>
        </form>
    )
}

export default ToDoForm; 