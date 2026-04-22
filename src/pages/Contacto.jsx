import React, { useState } from 'react';

const Contacto = () => {
 
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    asunto: 'Selecciona un asunto',
    mensaje: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos recibidos del formulario:", formData);
    alert("¡Datos enviados! Revisa la consola del navegador.");
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
    
      <div style={{ textAlign: 'center', padding: '80px 20px 40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a2e', margin: '0' }}>
          CONTACTO
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '10px' }}>
          ¿Tienes alguna pregunta? Nos encantaría escucharte
        </p>
      </div>

      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        display: 'flex', 
        gap: '60px', 
        padding: '0 20px 100px',
        flexWrap: 'wrap' 
      }}>
        
        
        <div style={{ flex: '1', minWidth: '320px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '40px' }}>INFORMACIÓN DE CONTACTO</h2>

          <div style={itemEstilo}>
            <div style={cuadroNegro}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <h4 style={tituloEstilo}>DIRECCIÓN</h4>
              <p style={textoEstilo}>Calle Urban Style 123<br/>28001 Madrid, España</p>
            </div>
          </div>

          <div style={itemEstilo}>
            <div style={cuadroNegro}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <h4 style={tituloEstilo}>TELÉFONO</h4>
              <p style={textoEstilo}>+34 91 123 45 67</p>
            </div>
          </div>

          <div style={itemEstilo}>
            <div style={cuadroNegro}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <h4 style={tituloEstilo}>EMAIL</h4>
              <p style={textoEstilo}>info@urbanthreads.com</p>
            </div>
          </div>

          <div style={itemEstilo}>
            <div style={cuadroNegro}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <h4 style={tituloEstilo}>HORARIO</h4>
              <p style={textoEstilo}>Lun - Vie: 9:00 - 18:00<br/>Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        
        <div style={{ flex: '1', minWidth: '350px', backgroundColor: '#fff', padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '25px' }}>ENVÍANOS UN MENSAJE</h2>
          
          <div style={{ backgroundColor: '#fff9e6', borderLeft: '4px solid #ffcc00', padding: '15px', marginBottom: '25px', color: '#856404', fontSize: '0.9rem' }}>
            <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={labelEstilo}>NOMBRE</label>
                <input name="nombre" type="text" style={inputEstilo} onChange={handleChange} required />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelEstilo}>APELLIDOS</label>
                <input name="apellidos" type="text" style={inputEstilo} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <label style={labelEstilo}>EMAIL</label>
              <input name="email" type="email" style={inputEstilo} onChange={handleChange} required />
            </div>
            <div>
              <label style={labelEstilo}>ASUNTO</label>
              <select name="asunto" style={inputEstilo} onChange={handleChange} value={formData.asunto}>
                <option>Selecciona un asunto</option>
                <option>Consulta general</option>
                <option>Información de producto</option>
                <option>Estado de pedido</option>
                <option>Devoluciones</option>
                <option>Otro</option>
              </select>
            </div>
            <div>
              <label style={labelEstilo}>MENSAJE</label>
              <textarea name="mensaje" rows="4" style={inputEstilo} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" style={{ backgroundColor: '#1a1a2e', color: 'white', padding: '15px', border: 'none', fontWeight: '800', cursor: 'pointer', marginTop: '10px' }}>
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const itemEstilo = { display: 'flex', alignItems: 'center', marginBottom: '30px' };
const cuadroNegro = { backgroundColor: '#1a1a2e', padding: '15px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const tituloEstilo = { margin: '0', fontWeight: '800', fontSize: '1rem', color: '#1a1a2e' };
const textoEstilo = { margin: '5px 0 0', color: '#666', fontSize: '0.95rem', lineHeight: '1.4' };
const labelEstilo = { display: 'block', fontSize: '0.75rem', fontWeight: '800', marginBottom: '8px', color: '#333' };
const inputEstilo = { width: '100%', padding: '12px', border: '1px solid #e0e0e0', boxSizing: 'border-box', outline: 'none' };

export default Contacto;