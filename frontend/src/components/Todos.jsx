/*
    todos = [
        {
            title : "go to gym",
            description : " YOu need to go to the gym at 6pm"
        }
    ]
*/

export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}