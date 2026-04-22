import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000000', color: 'white', padding: '60px 20px 20px' }}>
      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
        gap: '40px'
      }}>
        
        {/* Columna 1: Branding */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h3 style={{ fontWeight: '800', marginBottom: '20px' }}>URBAN THREADS</h3>
          <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div style={{ flex: '1', minWidth: '150px' }}>
          <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>ENLACES</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#ccc' }}>
            <li style={{ marginBottom: '10px' }}>Inicio</li>
            <li style={{ marginBottom: '10px' }}>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Columna 3: Ayuda */}
        <div style={{ flex: '1', minWidth: '150px' }}>
          <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>AYUDA</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#ccc' }}>
            <li style={{ marginBottom: '10px' }}>Guía de tallas</li>
            <li style={{ marginBottom: '10px' }}>Envíos</li>
            <li style={{ marginBottom: '10px' }}>Devoluciones</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* COLUMNA 4: SÍGUENOS (Con los iconos debajo) */}
        <div style={{ flex: '1', minWidth: '150px' }}>
          <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>SÍGUENOS</h4>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            {/* TWITTER / X */}
            <a href="#" style={{ color: 'white', display: 'flex' }} aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>

            {/* PINTEREST */}
            <a href="#" style={{ color: 'white', display: 'flex' }} aria-label="Pinterest">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.259 7.929-7.259 4.164 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a href="#" style={{ color: 'white', display: 'flex' }} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #333', marginTop: '60px', paddingTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
        © 2024 Urban Threads. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;