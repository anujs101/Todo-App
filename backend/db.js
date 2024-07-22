const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://anuj:mongo2024@cluster0.hyvqjrf.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema)
module.exports={
    todo
}