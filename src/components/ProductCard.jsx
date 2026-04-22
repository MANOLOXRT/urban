import React from 'react'; 

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