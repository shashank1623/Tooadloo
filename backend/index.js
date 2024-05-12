const express = require('express')
const {createTodo ,updateTodo } = require("./types")
const {todo} = require('./db')
const cors = require("cors")
const app = express()

const port = 8080


//body {
//     title : String;
//     description : String
// }
app.use(cors())
app.use(express.json())
app.get('/', function (req,res){
    res.send(`Hi there!`)
})

app.post('/todo',async function (req,res){
    const createPayload = req.body;
    // console.log(createPayload);
    const parsedPayload = createTodo.safeParse(createPayload)
    // console.log(parsedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong input"
        })
        return ;
    }

    //put the mongo logic here

    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo created!"
    })

})

app.get("/todos", async function (req,res){
    const todos = await todo.find({});

    res.json({
        todos 
    })

})


app.put("/completed",async function(req,res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(4111).json({
            msg : "Oops sometnhing went wrong"
        })
    }

    await todo.update({
        _id :  req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "Todo marked as completed"
    })
})
app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
}) 