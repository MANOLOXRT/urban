import React from 'react'; // <--- LA PIEZA FINAL

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      textAlign: 'center', 
      padding: '20px', 
      marginTop: '40px' 
    }}>
      <p>&copy; 2026 URBAN THREADS - Medellín</p>
      <p style={{ fontSize: '0.8rem', opacity: '0.6' }}>Hecho con React + Vite</p>
    </footer>
  );
};

export default Footer;