import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'white' }}>
      
      
      <div style={{ 
        backgroundColor: '#111111', 
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none', 
        width: '100%'
      }}>
        <h1 style={{ 
          fontSize: '3.8rem', 
          fontWeight: '900', 
          margin: '0', 
          lineHeight: '1',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          ESTILO URBANO
        </h1>
        <h1 style={{ 
          fontSize: '3.8rem', 
          fontWeight: '900', 
          color: '#ff6b00', 
          margin: '-10px 0 0',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          REDEFINIDO
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          margin: '25px 0', 
          opacity: '0.8',
          maxWidth: '550px',
          fontWeight: '400'
        }}>
          Descubre nuestra colección exclusiva de ropa urbana minimalista
        </p>

        <button 
          onClick={() => navigate('/productos')}
          style={{ 
            backgroundColor: '#ff6b00', 
            color: 'white', 
            border: 'none', 
            padding: '14px 45px', 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            textTransform: 'uppercase',
            borderRadius: '4px'
          }}
        >
          Explorar Colección
        </button>
      </div>

      <div style={{ 
        padding: '100px 20px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '60px', 
        textAlign: 'center',
        backgroundColor: 'white'
      }}>
        
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px' }}>
          
   
          <div style={{ 
            backgroundColor: '#141A29', 
            width: '80px', 
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px' 
          }}>
           
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <circle cx="12" cy="12" r="6"></circle>
              <line x1="12" y1="6" x2="12" y2="18"></line>
              <line x1="6" y1="12" x2="18" y2="12"></line>
              <path d="M7 7l10 10"></path>
              <path d="M17 7L7 17"></path>
            </svg>
          </div>
          
          <h3 style={{ 
            fontWeight: '800', 
            fontSize: '1.2rem', 
            textTransform: 'uppercase', 
            color: '#111111',
            margin: '0 0 15px 0'
          }}>
            DISEÑO ÚNICO
          </h3>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
            Piezas exclusivas con estética urbana y minimalista
          </p>
        </div>
        
       
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px' }}>
          
        
          <div style={{ 
            backgroundColor: '#141A29',
            width: '80px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="16 8 10 14 8 12"></polyline>
              <polyline points="16 11 10 17 8 15"></polyline>
            </svg>
          </div>
          
          <h3 style={{ 
            fontWeight: '800', 
            fontSize: '1.2rem', 
            textTransform: 'uppercase', 
            color: '#111111',
            margin: '0 0 15px 0'
          }}>
            CALIDAD PREMIUM
          </h3>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
            Materiales de alta calidad para máxima durabilidad
          </p>
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px' }}>
          
        
          <div style={{ 
            backgroundColor: '#141A29',
            width: '80px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
          
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
              <path d="M12 2v20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          
          <h3 style={{ 
            fontWeight: '800', 
            fontSize: '1.2rem', 
            textTransform: 'uppercase', 
            color: '#111111',
            margin: '0 0 15px 0'
          }}>
            ENVÍO RÁPIDO
          </h3>
          <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', margin: '0' }}>
            Entrega express en 24-48 horas
          </p>
        </div>

      </div>

    </div>
  );
};

export default Home;