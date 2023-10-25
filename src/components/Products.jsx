import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/Products.css';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('https://fakestoreapi.com/products').then((res) => setData(res.data));
    }, []);

    return (
        <div className="container1">
            <div className="product-card-container">
                {data.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={`${product.image}`} alt="img-product-card" />
                        <h3>{product.title}</h3>
                        <h4>${product.price}</h4>
                        <button>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
