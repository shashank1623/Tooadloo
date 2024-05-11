const express = require('express')
import { createTodo,updateTodo } from './types'
const app = express()

const port = 8080


//body {
//     title : String;
//     description : String
// }
app.get('/', function (req,res){
    res.send(`Hi there!`)
})

app.post('/todo', function (req,res){

})

app.get("/todos", function (req,res){


})
app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})