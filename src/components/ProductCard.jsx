import React from 'react'; // <--- EL QUE FALTA

const ProductCard = ({ nombre, precio }) => {
  return (
    <div className="card">
      <div className="img-placeholder">👕</div>
      <h3>{nombre}</h3>
      <p className="price">${precio}</p>
      <button className="btn-comprar">Añadir al Carrito</button>
    </div>
  );
};

export default ProductCard;