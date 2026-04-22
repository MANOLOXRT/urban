import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        
        <div style={styles.column}>
          <h3 style={styles.title}>URBAN THREADS</h3>
          <p style={styles.text}>
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

    
        <div style={styles.column}>
          <h3 style={styles.title}>ENLACES</h3>
          <ul style={styles.list}>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>

 
        <div style={styles.column}>
          <h3 style={styles.title}>AYUDA</h3>
          <ul style={styles.list}>
            <li>Guía de tallas</li>
            <li>Envíos</li>
            <li>Devoluciones</li>
            <li>FAQ</li>
          </ul>
        </div>

     
        <div style={{ ...styles.column, ...styles.socialColumn }}>
          <h3 style={styles.title}>SÍGUENOS</h3>
          <div style={styles.socialIcons}>
      
            <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
       
            <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.41 7.63 11.17-.11-.94-.2-2.39.04-3.41.22-.93 1.45-6.13 1.45-6.13s-.37-.74-.37-1.84c0-1.73 1-3.02 2.25-3.02 1.06 0 1.57.8 1.57 1.75 0 1.07-.68 2.66-1.03 4.14-.3 1.25.62 2.27 1.85 2.27 2.22 0 3.93-2.34 3.93-5.71 0-2.98-2.14-5.07-5.21-5.07-3.55 0-5.64 2.66-5.64 5.42 0 1.07.41 2.22.92 2.84.1.13.12.24.09.37-.1.4-.33 1.34-.37 1.52-.06.24-.19.29-.43.18-1.59-.74-2.58-3.06-2.58-4.93 0-4.01 2.91-7.7 8.41-7.7 4.42 0 7.84 3.15 7.84 7.35 0 4.39-2.76 7.92-6.61 7.92-1.29 0-2.51-.67-2.92-1.46 0 0-.64 2.43-.79 3.03-.29 1.1-.85 2.21-1.27 2.89C10.15 23.86 11.06 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
            </svg>
    
            <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>

      </div>
      

      <div style={styles.copyright}>
        <hr style={styles.hr} />
        <p style={styles.copyText}>© 2024 Urban Threads. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000', 
    color: '#fff',
    padding: '60px 0 20px 0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between', 
    padding: '0 40px',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    letterSpacing: '1px',
  },
  text: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: '#ccc',
    maxWidth: '250px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '0.9rem',
    lineHeight: '2',
    color: '#ccc',
  },

  socialColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
  },
  socialIcons: {
    display: 'flex',
    gap: '20px', 
    marginTop: '5px',
  },
  icon: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '40px',
    width: '100%',
  },
  hr: {
    border: '0',
    borderTop: '1px solid #333',
    margin: '20px 0',
  },
  copyText: {
    fontSize: '0.8rem',
    color: '#666',
  }
};

export default Footer;