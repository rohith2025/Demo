import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { Rough } from './components/Rough'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
    .then(async function (res){
      setTodos(res.data.todoss)
   }) 
  })
  

  return (
    <>
    <h1 className='bg-violet-500 text-center text-green-400 w-full'>Hi There</h1>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    
    {/* <Rough></Rough> */}
    </>
  )
}

export default App
