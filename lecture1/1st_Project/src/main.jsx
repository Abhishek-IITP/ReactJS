import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Abhi from './Abhishek.jsx' /**default import */
import { Abhi } from './Abhishek.jsx' /**named import */

createRoot(document.getElementById('root')).render(Abhi())
