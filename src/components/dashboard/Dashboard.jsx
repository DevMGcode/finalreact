import TotalProductos from "./TotalProductos";
import { useState, useEffect } from "react";
import PrecioPromedio from "./PrecioPromedio";
import TotalPedidos from "./Totalpedidos";
import MasVendidos from "./Masvendidos";
import axios from "axios";
import IngresosTotales from "./IngresosTotales";


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
      <div className="item">
        <IngresosTotales data={data} />
      </div>
      <div className="item">
        <TotalProductos dataProducts={dataProducts} />
      </div>
      <div className="item">
        <PrecioPromedio dataProducts={dataProducts} />
      </div>
      <div className="item">
        <TotalPedidos dataCart={dataCart} />
      </div>
      <div className="item-sell">
        <MasVendidos dataCart={dataCart} />
      </div>
    </div>
  );
};

export default Dashboard;