import React from 'react'

import Button from './componets/Button'
import ToDoForm from './componets/ToDoForm';
import { CiEdit } from "react-icons/ci";
import ListItem from './componets/ListItem';


function App() {
  return (
    <div className='grid place-items-center min-h-screen'>
      <div className='bg-white flex w-full max-w-2xl flex-col justify-center items-center p-4 md:p-8 rounded-xl gap-5'>
        <h1 className='text-2xl font-bold'>ToDo List - MERN Stack</h1>
        <ToDoForm />
        <ListItem content="Hello" isDone={true} />
      </div>
    </div>
  )
}

export default App
