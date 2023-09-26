import React, { Fragment, useState } from "react";

const EditTodo = ({todo}) => {

  const [task, setDescription] = useState(todo.task)

  const updateDescription = async(e) =>
  {

    e.preventDefault()
    try{

      const body = {task}
      const response = await fetch(`http://localhost:3000/api/todos/${todo.id}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)

      }) 

      window.location ="/"


    } catch (err) {

      console.error(err.message)
    }


  }

  console.log(todo)

    return (

        <Fragment>
         
<button 
type="button" 
class="btn btn-warning" 
data-toggle="modal" 
data-target={`#id${todo.id}`}
>

  Edit 
</button>


<div class="modal" id={`id${todo.id}`}
onClick={() => setDescription(todo.id)}
>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal"
         onClick={() => setDescription(todo.id)}>
           &times;
        </button>
      </div>

      
      <div class="modal-body">
        {/* <input type= "button" class="" data-dismiss="model" /> */}
        <input type= "text" className="form-control" value = {task} onChange={
          e => setDescription(e.target.value)
        } />
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal"
        onClick = {e => updateDescription(e) }
        >Edit
        </button>
        <button type="button" class="btn btn-danger" data-dismiss="modal"
        onClick={() => setDescription(todo.id)}
        >Close
        </button>
        
      </div>

    </div>
  </div>
</div>


        </Fragment>
    )
}
export default EditTodo