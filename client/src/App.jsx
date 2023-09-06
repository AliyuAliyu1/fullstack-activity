import { useState,useEffect } from 'react'

import './App.css'





function App() {
  const [todos, setTodos]= useState([])


  // useEffect(() => {
  //   // Make a fetch GET request to your API endpoint
  //   fetch('/api/todos')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Handle the data by updating the state
  //       setTodos(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  
  // useEffect(() => {
    // const response =fetch("http://localhost:3000/aoi/todos").then()
  // }
  // , []
  // );
  useEffect(() => {
    async function fetchTodos() {
      try {
        // Make a fetch GET request to your API endpoint
        const response = await fetch("http://localhost:3000/api/todos");
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('why', data);
        // Handle the data by updating the state
        setTodos(data);
        // console.log(todos)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div>
      <h1 className='text-green-500 font-semibold text-2xl' > Todo-list </h1>
      <input type='text'/> <button type='delete'>delete</button>
        <ul>
         
        {
          todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox"/> {todo.task} 
              <button type="button">
                Delete
              </button>
            </li>
          ))
        }
          {/* <li><input type='checkbox'/> Foodie  <button type='button'>delete</button></li> */}
          {/* <li><input type='checkbox'/> Foodie  </li> */}
          {/* <li><input type='checkbox'/> Foodie  </li> */}
        </ul>
      

       
      </div>
     
    </>
  )
}

export default App
