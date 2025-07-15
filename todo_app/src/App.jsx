import React, { useState } from "react";
import { useEffect } from "react";
function App() {
  const [singleTodo, setSingleTodo] = useState({ title: "", desc: "" });
  const [alltodos, setAllTodos] = useState([]);
  function handleTodo() {
    setAllTodos([...alltodos, singleTodo])
    saveTodoLocalStorage([...alltodos, singleTodo]);
    // setAllTodos(upperwalaValue => [...upperwalaValue, singleTodo]);00
  }
  function deleteTodo(i){
    alltodos.splice(i,1)
    saveTodoLocalStorage(alltodos)
    // getTodoFromLocalStorage(alltodos)
    setAllTodos([...alltodos])

  }
  function saveTodoLocalStorage(todo){
    localStorage.setItem("todos",JSON.stringify(todo))
  }
  function getTodoFromLocalStorage(){
    let data=JSON.parse(localStorage.getItem('todos')) || [];
    setAllTodos(data || []) 
    }
  
  useEffect(() => {getTodoFromLocalStorage() }, []);

  return(
    <>
           <div>
      <input
        type="text"
        placeholder="title"
        required
        onChange={(e) =>
          setSingleTodo((upperwalaValue) => ({ ...upperwalaValue, title: e.target.value }))
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="desc" required
        onChange={(e) =>
          setSingleTodo((upperwalaValue) => ({ ...upperwalaValue, desc: e.target.value }))
        }
      />
      <br />
      <br />
      <button onClick={handleTodo}>ADD Todo</button>
    </div>
    <div>
      {alltodos.map((data,i) => (
        <div>
          <p>{i+1}</p>
          <h1 >{data.title}</h1>
          <p>{data.desc}</p>
          <button onClick={()=>deleteTodo(i)}>Remove</button>
        </div>
      ))}
    </div></>
  )
}


export default App;
