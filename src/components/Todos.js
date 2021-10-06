import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
const myStyle={
    minHeight:"70vh"
}
    return (
    <div className="container my-3" style={myStyle}>
    <h2 className=" my-3">Todos List</h2>
    {/* used loop on the items come in todos with the help of props  this mehod mainly call the callback function for every element of array
         we renser the ui using array function we have to send a key also   */}
    {props.todos.length===0?"No Todos to display ":
    props.todos.map((todo)=>{   
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
         })
         }
      

   

    </div>
    )
}
