import { todo } from "node:test";
import React, {Fragment, useEffect,useState} from "react";

const Listnode = () => {

    const [todos1,setTodos1] =useState([])
    const getTodos = async () => {
       

        try {
            const response = await fetch("http://localhost:3000/api/todos")
            const jsondata = await response.json()
            
            setTodos1(jsondata)
            
        } catch (err) {
            console.error(err.message)
            
        }
    }
      useEffect(() => {

        getTodos()
      },[])
     
console.log(todos1)
   return ( <Fragment>
       {" "}
   <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Description</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
  {/*       <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr> */}
       {todos1.map(todo => (

            <tr>
            <td>{todo.task}</td>
            <td>Edit</td>
            <td>
               <button className="btn btn-danger">
               Delete
                </button> 
                </td>
            </tr>

        ))} 
 
      </tbody>
    </table>
    </Fragment>
    )
}
export default Listnode