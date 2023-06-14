const TotalProductos = (props) => {
  const data = props;
  const TotalProductos = data.dataProducts.length;

  return (
    <div className="TotalProductos">
      <h1> TOTAL PRODUCTOS: {TotalProductos}</h1>
    </div>
  );
};

export default TotalProductos;
