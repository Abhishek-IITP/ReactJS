import { useState } from 'react'


function App() {

  let [data,setData]=useState(0);
  function incVal(){
    setData((data)=>data+1)
  }
  function decVal(){
    setData((data)=>data-1) 
  }
  return (
  <div>
    <h1>Counter</h1>
    <button onClick={incVal}>Increase</button>
    <h1> {data}</h1>
    <button onClick={decVal}>Decrease</button>
  </div>
  )
}

export default App


/**USESTATE:- react ko batane ke liye ki koi value update hua toh uske liye use krte h  */