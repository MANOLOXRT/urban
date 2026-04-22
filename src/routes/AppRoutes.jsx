import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import Contacto from '../pages/Contacto';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/contacto" element={<Contacto />} />
  </Routes>
);

export default AppRoutes;