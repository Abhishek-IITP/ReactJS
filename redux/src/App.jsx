import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./Utility/CounterSlice";

function App() {
  const dispacth=useDispatch()
  const show=useSelector((a)=>a.counter.value)
  console.log(show)
  function handleInc(){
    dispacth(increment(''))
  }
  function handleDec(){
    dispacth(decrement(''))
  }
  function handleRsest(){
    dispacth(reset(''))
  }

  return (
    <div>
      <h1>hello jii</h1>
      <p>{show}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleRsest}>Reset</button>
    </div>
  )
}
export default App;