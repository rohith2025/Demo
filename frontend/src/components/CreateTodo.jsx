import { useState } from "react";

import axios from 'axios';


 
export function CreateTodo() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  return (
    <>
<div className="flex items-center justify-center mt-10">
  <div className="flex space-x-4">
  <input
      id="username2"
      type="text"
      onChange={function(e){
        const value = e.target.value
        setTitle(e.target.value)
      }}
      placeholder="Enter Title"
      className="w-36 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
    <input
      id="username2"
      type="text"
      onChange={function(e){
        const value = e.target.value
        setDescription(e.target.value)
      }}
      placeholder="Enter Description"
      className="w-36 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
</div>
<div className="flex items-center justify-center mt-10">

<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 justify-center" onClick={() => {
  axios.post("http://localhost:3000/todo" , {
    title : title,
    description : description
  })
}}>Create Todo</button>
</div>
</>
  );
}