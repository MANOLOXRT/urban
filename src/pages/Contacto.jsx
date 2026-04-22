import React, { useState } from 'react';

const Contacto = () => {
  // 1. Creamos el estado para guardar los datos del formulario
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // 2. Función que se ejecuta cada vez que escribes en un input
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // 3. Función que se ejecuta al dar clic en el botón de enviar
  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // ESTO ES LO QUE PIDAS: Muestra los datos en la consola
    console.log("--- NUEVO MENSAJE RECIBIDO ---");
    console.table(datos); // Lo muestra en una tabla elegante
    console.log("Objeto completo:", datos);

    // Feedback visual para el usuario
    alert(`¡Gracias ${datos.nombre}! Tu mensaje ha sido enviado correctamente. Revisa la consola (F12) para ver los datos.`);
    
    // Opcional: Limpiar el formulario después de enviar
    setDatos({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', color: '#1a1a1a' }}>CONTACTO URBAN THREADS</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Escríbenos y nos pondremos en contacto contigo pronto.
      </p>

      <form onSubmit={enviarFormulario} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre:</label>
          <input 
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Camilo"
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Correo:</label>
          <input 
            type="email"
            name="email"
            value={datos.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mensaje:</label>
          <textarea 
            name="mensaje"
            value={datos.mensaje}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            required
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', height: '120px' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ 
            background: '#ff6b00', 
            color: 'white', 
            border: 'none', 
            padding: '15px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        >
          ENVIAR A CONSOLA
        </button>
      </form>
    </div>
  );
};

export default Contacto;