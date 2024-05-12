const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://theghost:UmnB9y9sVtpAt1ut@cluster0.8zcgi4d.mongodb.net/react-todo')
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo
}