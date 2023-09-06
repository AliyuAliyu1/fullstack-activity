
import './App.css'

function App() {

  return (
    <>
      <div>
      <h1 className='text-green-500 font-semibold text-2xl' > Todo-list </h1>
      <input type='text'/> <button type='delete'>delete</button>
        <ul>
         
          <li><input type='checkbox'/> Foodie  <button type='button'>delete</button></li>
          <li><input type='checkbox'/> Foodie  </li>
          <li><input type='checkbox'/> Foodie  </li>
        </ul>
      

       
      </div>
     
    </>
  )
}

export default App
