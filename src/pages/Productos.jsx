import React from 'react'; // <--- EL QUE FALTA
import ProductCard from '../components/ProductCard';

const Productos = () => {
  const listaProductos = [
    { id: 1, nombre: "Camiseta Oversize", precio: "29.99" },
    { id: 2, nombre: "Jeans Baggy", precio: "49.99" },
    { id: 3, nombre: "Chaqueta Denim", precio: "65.00" },
    { id: 4, nombre: "Gorra Urban", precio: "19.99" },
    { id: 5, nombre: "Sudadera Minimal", precio: "39.99" },
    { id: 6, nombre: "Tenis Street", precio: "89.99" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', margin: '30px 0' }}>NUESTRA COLECCIÓN</h2>
      <div className="productos-grid">
        {listaProductos.map((prod) => (
          <ProductCard key={prod.id} nombre={prod.nombre} precio={prod.precio} />
        ))}
      </div>
    </div>
  );
};

export default Productos;