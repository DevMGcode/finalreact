import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from "./components/dashboard/Dashboard";
import Navegacion  from "./components/Navegacion";
import Products from './components/products'
import './App.css'



function App() { 

   const API = 'https://fakestoreapi.com';
    return (
     
      <BrowserRouter>
      
      <Navegacion/>
        <Routes>
          
          <Route path="/" element={<Products/>}/>
          <Route path="/dashboard" element={<Dashboard API ={API}/>}/>
          
        </Routes>
        </BrowserRouter>
      
    )
}

export default App
