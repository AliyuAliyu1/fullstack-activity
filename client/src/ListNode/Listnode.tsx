import { todo } from "node:test";
import React, {Fragment, useEffect,useState} from "react";
import EditTodo from "../Editodo/EditTodo";

const Listnode = () => {

    const [todos1,setTodos1] =useState([])

    const deleteTodo = async id => {
       

        try {
            const response = await fetch(`http://localhost:3000/api/todos/${id}`,
            {
                method:"DELETE"
            }
            )
            
            
          setTodos1(todos1.filter(todo => todo.id !== id))
            
        } catch (err) {
            console.error(err.message)
            
        }
    }
  
     
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
      }, [])
     
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

            <tr key= {todo.id}>
            <td>{todo.task}</td>
            <td>
                <EditTodo todo={todo}/>
            </td>
            <td>
               <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
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