import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Tables from './components/Table'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Naming from './components/Naming'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(1000)

  return (
    <>
      
  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Table" element={<Tables />} />
        <Route path="/Statebasics" element={<Statebasics />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Name" element={<Naming />} /> 
        <Route path="/product" element={<Product/>} /> 
      </Routes>
    </>
  )
}

export default App
