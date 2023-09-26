import { useState} from 'react'
import './App.css'
import Listnode from './ListNode/Listnode'





function App() {
  const [ data1, setTodos]= useState("")
  const onSubmitForm = async ( e  ) => {
     e.preventDefault()
    try {
        const body = { task: data1 }
        const response = await fetch("http://localhost:3000/api/todos2",
        {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
        }
        )
         const responseText = await response.text();
        console.log(responseText);
         
        window.location ="/"
         
    } catch (err) {
      console.error(err.message)
      
    } 
  }
/*   useEffect(() => {
    fetchData();
  }, []); */

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

/* 
  
    const fetchData = async () => {
      try {
        // const body = {data1}
        // Make a fetch GET request to your API endpoint
        const response = await fetch("http://localhost:3000/api/todos2",
        {
        method:"GET",
        headers:{"Content-Type":"application/json"},
        // body:JSON.stringify(body)
        }
        );
        
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
    
    } */
  
/*   const addTodo = async() =>{
    try {
      
      console.log("everytime")
      const response = await fetch("http://localhost:3000/api/todos2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: "Wash clothes",
          is_completed: false
        }),
      }); */
  
  // get response in json
  /*     const data = await response.json();
    } catch (error) {
      console.error("eror fetching", error)
      
    } */
  // };

  return (
    <>
      <div>
      <h1 className='text-green-500 font-semibold text-2xl' > Todo-list </h1>
      <form  className='d-flex mt-5' onSubmit={onSubmitForm}>

        <input type='text' className='form-control' value={data1} onChange={e => 
        
        setTodos(
          e.target.value) }
        />
        
         <button className='btn btn-success'>Add</button>

         </form> 
         <Listnode/>
      
       
        <ul>
         
   {/*      {
          todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox"/> {todo.task} 
              <button type="button">
                delete
              </button>
            </li>
          ))
        } */}
          {/* <li><input type='checkbox'/> Foodie  <button type='button'>delete</button></li> */}
          {/* <li><input type='checkbox'/> Foodie  </li> */}
          {/* <li><input type='checkbox'/> Foodie  </li> */}
        </ul>
      

       
      </div>
     
    </>
  )
}

export default App
