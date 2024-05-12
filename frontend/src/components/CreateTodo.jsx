import { useState } from "react";

export function CreateTodo(props){

    //react-query
    const [title,setTitle] = useState();
    const [description , setDescription] = useState("");
    return <div>
        <h1>Toodaloo App</h1>
        <input id="title" style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="title" onChange={function(e){
            // const value = e.target.value
            setTitle(e.target.value)
        }} /> <br /> <br />
        <input id="description" style={{
            padding : 10,
            margin : 10
        }} type="text" placeholder="description" onChange={function(e){
            // const value = e.target.value
            setDescription(e.target.value)
        }}  /> <br /> <br />
        <button style={{
            padding : 10,
            margin : 10
        }}  onClick={()=>{
            fetch("http://localhost:8080/todo",{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then(async function(res){
                const json = await res.json();
                console.log(json);
                alert('Todo Added!')
            })
        }} >Add a Todoloo</button>
    </div>
}

