import React, { Fragment } from "react";

const EditTodo = () =>{


    return (

        <Fragment>
         
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Edit 
</button>


<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      
      <div class="modal-body">
        <input types= "button" class="" data-dismiss="model" />
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


        </Fragment>
    )
}
export default EditTodo