
export function Todos({todos}){
  return (
    <>
    <h1 className="text-4xl text-center mt-4 mb-4">List of Todos</h1>
    <div className="grid sm:grid-cols-3">
    {todos.map(function(todo){
      return <div key={todo.title}>
        {/* <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
        <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button> */}

<div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ml-10">
  <div className="p-4">
    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
    {todo.title}
    </h6>
    <p className="text-slate-600 leading-normal font-light">
    {todo.description}
    </p>
  </div>
  <div className="px-4 pb-4 pt-0 mt-2">
    <button className="rounded-md bg-blue-700 py-2 px-4 border border-transparent text-center text-sm text-white " type="button">
    {todo.completed == true ? "Completed" : "Mark as Complete"}
    </button>
  </div>
</div>  
        
      </div>
    })}

</div>
    </>
  )
}