const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/goodreads'

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});



module.exports = mongoose.model('Todo', todoSchema)
