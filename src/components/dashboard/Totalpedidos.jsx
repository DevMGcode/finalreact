const Totalpedidos = (props) => {
  const data = props;
  const total = data.dataCart.length;
  return (
    <div className="TotalPedidos">
      <div>Total Ordenes : {total}</div>
    </div>
  );
};

export default Totalpedidos;
