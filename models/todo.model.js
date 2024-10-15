const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }  
})

const TodoModel = mongoose.mongoose.model('Todo', TodoSchema)

module.exports = TodoModel