import { useState } from "react"

function App() {

  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);

  function formSubmit(e){
    e.preventDefault()
    console.log({email,password})

  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handlePassword(e){
    setPassword(e.target.value)
  }

  return (
    <form action="">
      <input type="text" placeholder='Email' onChange={handleEmail} value={email} /> 
      <br />
      <br/>
      <input type="password" placeholder='Password' onChange={handlePassword} />
      <br />
      <br />
      <button onClick={formSubmit}>Login</button>
    </form>
  )
}

export default App
