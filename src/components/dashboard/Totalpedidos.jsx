const Totalpedidos = (props) => {
  const data = props;
  const total = data.dataCart.length;
  return (
    <div className="TotalPedidos">
      <h1>Total Ordenes : {total}</h1>
    </div>
  );
};

export default Totalpedidos;
