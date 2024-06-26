const TotalProductos = (props) => {
  const data = props;
  const TotalProductos = data.dataProducts.length;

  return (
    <div className="TotalProductos">
      <div> TOTAL PRODUCTOS: {TotalProductos}</div>
    </div>
  );
};

export default TotalProductos;
