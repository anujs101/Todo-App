const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get('/todos',async(req,res)=>{
    const todos = await todo.find({});
    res.json({todos});
})
app.post('/todo',async(req,res)=>{
    const createPayload =req.body;
const parsedPayload =  createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.status(404).send("wrong inputs");
    return;
}
 await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
})

res.json({
    msg: "todo has been added"
});
})
app.put('/completed',async(req,res)=>{
    const updatePayload =req.body;
    const parsedPayload =  updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(404).send("wrong inputs");
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
      completed: true  
    })
    res.json({msg : 'marked as done'})
})

app.listen(3000,()=>{
    console.log("App listening on port 3000")
});