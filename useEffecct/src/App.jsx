import { useEffect, useState } from "react"
import AllCards from "./component/AllCards"
function App() {
  const [val, setVal] = useState('');
  const [filterData , setFilterData]=useState("");
  const [initialData , setInitialData]=useState("");


  async function fetchProductData(){
    let res= await fetch("https://dummyjson.com/products")
    let json= await res.json();
    setFilterData(json.products);
    // setInitialData(json.products);
  }
  fetchProductData();
  

useEffect(() => {
  fetchProductData();
}, []);



  
  function filterHandler(){
    let res = setFilterData.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()));
    setFilterData(res)
  }
  return (
    <div>
        <h1>Raste ka Maal Saste me</h1>
      <div>
        <input type="text" placeholder="Kya Chaiye?..." onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={filterHandler}>Search</button>
      </div>
 
      {filterData.length <= 0 ? (
                <h1 className="text-6xl mt-32">No item</h1>
            ) : (
                <AllCards data={filterData} />
            )}

    </div>
  );
}

export default App;
