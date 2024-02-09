const connect = require('./config/db.js')
const express = require('express')
const todo = require('./models/todo.js')
const cors = require('cors')

require('dotenv/config')

// connecting to DB
connect()

const app = express();
const port = 3000;


// Express Middleware Objects
app.use(express.json());

app.use(cors())

// get all todo
app.get('/api/todos', async (req, res) => {
    const todos = await todo.find();
    return res.json({ data: todos })
});

// create todo
app.post('/api/todos/new', async (req, res) => {
    {
        const content = req.body.content;

        const newTodo = await todo.create({ content });

        return res.json({ data: newTodo })
    }
})

// update todo
app.put('/api/todos/:id', async (req, res) => {
    const id = req.params.id;
    const oldTodo = await todo.findById(id);
    oldTodo.isDone = !oldTodo.isDone

    const updatedTodo = await oldTodo.save()

    return res.json({ data: updatedTodo })
})

// Delete todo
app.delete('/api/todos/:id', async (req, res) => {
    const id = req.params.id;

    await todo.deleteOne({ id: id });

    return res.json({ message: `Deleted todo ${id}` })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});