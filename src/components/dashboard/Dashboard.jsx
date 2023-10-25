import React, { useState, useEffect } from "react";
import axios from "axios";
import TotalProductos from "./TotalProductos";
import PrecioPromedio from "./PrecioPromedio";
import TotalPedidos from "./Totalpedidos";
import MasVendidos from "./Masvendidos";
import IngresosTotales from "./IngresosTotales";
import ingreso from "../css/img/ingreso.png";
import productos from "../css/img/productos.png";
import promedio from "../css/img/promedio.png";
import orden from "../css/img/orden.png";
// import "../css/Spinner.css"; // Asegúrate de importar el archivo CSS del spinner

const Dashboard = (props) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = props;

  async function connectAPI(endpoint, setData) {
    try {
      const response = await axios.get(`${data.API}/${endpoint}`);
      // Introduce un retardo de 5 segundos antes de establecer los datos y desactivar el spinner
      setTimeout(() => {
        setData(response.data);
        setLoading(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    connectAPI("products", setDataProducts);
  }, []);

  useEffect(() => {
    connectAPI("carts", setDataCart);
  }, []);

  return (
    <div className="dashboard">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="contenedor2">
          <img src={ingreso} className="tamañoimg" alt="" />
          <div className="item">
            <IngresosTotales data={data} />
          </div>
          <img src={productos} className="tamañoimg" alt="" />
          <div className="item">
            <TotalProductos dataProducts={dataProducts} />
          </div>
          <img src={promedio} className="tamañoimg" alt="" />
          <div className="item">
            <PrecioPromedio dataProducts={dataProducts} />
          </div>
          <img src={orden} className="tamañoimg" alt="" />
          <div className="item">
            <TotalPedidos dataCart={dataCart} />
          </div>
        </div>
      )}
      <div className="item-sell">
        <MasVendidos dataCart={dataCart} />
      </div>
    </div>
  );
};

export default Dashboard;

