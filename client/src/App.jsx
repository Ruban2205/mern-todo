import React, { useEffect, useState } from 'react'
import ToDoForm from './components/ToDoForm';
import ListItem from './components/ListItem';

async function getTodos() {
  const res = await fetch(`http://localhost:3000/api/todos/`)
  const jsonData = await res.json()
  return jsonData;
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      setTodos(data.data)
    })()
  }, [])

  return (
    <div className='grid place-items-center min-h-screen'>
      <div className='bg-white flex w-full max-w-2xl flex-col justify-center items-center p-4 md:p-8 rounded-xl gap-5'>
        <h1 className='text-2xl font-bold'>ToDo List - MERN Stack</h1>

        <ToDoForm setTodos={setTodos} />

        {
          todos.map((item) =>
            <div className='w-full flex flex-col items-center gap-3'>
              <ListItem setTodos={setTodos} id={item._id} content={item.content} isDone={item.isDone} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
