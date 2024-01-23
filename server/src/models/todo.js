const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    content: { type: String, required: true },
    isDone: { type: Boolean, required: true, default: false },
})

const todo = mongoose.model('todo', todoSchema);

module.exports = todo
