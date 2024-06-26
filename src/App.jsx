import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from "./components/dashboard/Dashboard";
import Navegacion  from "./components/Navegacion";
import Products from './components/products'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 

   const API = 'https://fakestoreapi.com';
    return (
     
      <BrowserRouter>
      <Navegacion />

      
      

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard API={API} />} />
        </Routes>
      </div>
    </BrowserRouter>
      
    )
}

export default App
