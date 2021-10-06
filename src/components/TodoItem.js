import React from 'react'

export const  TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            {/* here if we call the function directly it will we called dunring the time of rendering,
            but now it is called when soneone call the arrow function i,e when click */}
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}> delete</button>
        </div>
        <hr/>
        </>
    )
}
