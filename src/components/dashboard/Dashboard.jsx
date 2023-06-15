import TotalProductos from "./TotalProductos";
import { useState, useEffect } from "react";
import PrecioPromedio from "./PrecioPromedio";
import TotalPedidos from "./Totalpedidos";
import MasVendidos from "./Masvendidos";
import axios from "axios";
import IngresosTotales from "./IngresosTotales";
import  ingreso  from "../css/img/ingreso.png";
import  productos  from "../css/img/productos.png";
import  promedio  from "../css/img/promedio.png";
import  orden  from "../css/img/orden.png";




const Dashboard = (props) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  const data = props;

  async function conectAPI(endpoint, setData) {
    await axios(`${data.API}/${endpoint}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    conectAPI("products", setDataProducts);
  }, []);

  useEffect(() => {
    conectAPI("carts", setDataCart);
  }, []);


  //grafico de torta 

  


  return (

    <div className="dashboard">
      <div className="contenedor2">
      <img src={ingreso} className="tamañoimg" alt="" />
      <div className="item">
        <IngresosTotales data={data} />
      </div>
      <img src={productos} className="tamañoimg" alt="" />
      <div className="item" >        
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
      <div className="item-sell">
        <MasVendidos dataCart={dataCart} />
      </div>
    </div>
  );
};

export default Dashboard;