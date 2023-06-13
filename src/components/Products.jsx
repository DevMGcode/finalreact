import { useState, useEffect } from "react";
import axios from "axios";
import './css/Products.css' 


const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((res) => setData(res.data));
  }, [])

  const totalItems = async() =>{ 
     console.log(data.length); // total de productos
}
totalItems()
  const promedio = async() =>{
    const sum = data.reduce((accumulator, item) => accumulator + item.price, 0);
    const average = sum / data.length;
    console.log('Promedio:', average);
  }
  promedio()

  return data.map((product) => {
    return (
      
      <div className="card" key={product.id} style={{ width: '48rem' }}>
        <img src={`${product.image}`} style={{ width: '48rem' }} alt="img-product-card" />
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        <button>Comprar</button>
      </div>

      
    );
  }
  
  )
}

export default Products