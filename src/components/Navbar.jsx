import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div style={{color: 'white', fontSize: '1.5rem'}}>URBAN <span>THREADS</span></div>
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </div>
  </nav>
);

export default Navbar;