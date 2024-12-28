import { useState } from "react"
import AllCards from "./component/AllCards"
import { data } from "./utills/data"
function App() {
  const [val, setVal] = useState('');
  const [filterData , setFilterData]=useState(data);
  
  function filterHandler(){
    let res = data.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()));
    setFilterData(res)
  }

  return (
    <div>
        <h1>Raste ka Maal Saste me</h1>
      <div>
        <input type="text" placeholder="Kya Chaiye?..." onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={filterHandler}>Search</button>
      </div>
      <div>
        <AllCards data={filterData}/>
      </div>
    </div>
  )
}

export default App
