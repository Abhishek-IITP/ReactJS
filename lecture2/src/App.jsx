import Products from './components/products'
import './App.css'

function App(shoedata) {
  return (

    <div>
      {
        shoedata.map((data)=>{
          return <Products title={data.title} price={data.price} />
        })
      }


    </div>
  )
}

export default App;
