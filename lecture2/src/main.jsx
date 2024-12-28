import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App.jsx'
import Products from "./App.jsx";
let shoedata=[
  { title:"Nike Shoes",
    price:"30000"

  },
  { title:"Adidas Shoes",
    price:"20000"
  },
  {
    title:"reebok Shoes",
    price:"10000"
  },
  {
    title:"Gucci Shoes",
    price:"20000"
  },
  {
    title:"Jorden Shoes",
    price:"15000"
  }
]
// console.log(App(shoedata))
createRoot(document.getElementById("root")).render(App(shoedata));
