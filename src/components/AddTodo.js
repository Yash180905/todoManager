import React,{useState} from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or descreption cannot be empty");
        }else{
        addTodo(title,desc)
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container">
        <h3>Add a Todo </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title of Todo</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label for="Desc" className="form-label">Descreption</label>
                    <input type="text"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="Desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">AddTodo</button>
            </form>
        </div>
    )
}
