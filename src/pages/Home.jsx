import React from 'react'; // <--- EL QUE FALTA
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const Home = () => (
  <div>
    <Hero />
    <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Tendencias</h2>
    <div className="productos-grid">
      <ProductCard nombre="Camiseta Black" precio="25.00" />
      <ProductCard nombre="Hoodie Orange" precio="45.00" />
      <ProductCard nombre="Jogger Urban" precio="35.00" />
    </div>
  </div>
);

export default Home;