import React from 'react';

const Productos = () => {
  const listaProductos = [
    { id: 1, nombre: "Camiseta Básica Urban", desc: "Algodón 100% orgánico", precio: "29", tipo: "user" },
    { id: 2, nombre: "Jeans Slim Fit", desc: "Denim premium stretch", precio: "89", tipo: "jeans" },
    { id: 3, nombre: "Sudadera Oversize", desc: "Algodón French Terry", precio: "65", tipo: "sudadera" },
    { id: 4, nombre: "Chaqueta Bomber", desc: "Nylon resistente al agua", precio: "120", tipo: "chaqueta" },
    { id: 5, nombre: "Gorra Snapback", desc: "Bordado premium", precio: "35", tipo: "gorra" },
    { id: 6, nombre: "Zapatillas Urban", desc: "Suela de goma antideslizante", precio: "95", tipo: "reloj" }
  ];

  const renderIcono = (tipo) => {
    const p = { width: "100", height: "100", viewBox: "0 0 24 24", fill: "none", stroke: "#9CA3AF", strokeWidth: "1" };
    switch(tipo) {
      case "user": return <svg {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
      case "jeans": return <svg {...p}><rect x="9" y="4" width="6" height="16" rx="2"/><path d="M12 4v16"/></svg>;
      case "sudadera": return <svg {...p}><path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/><path d="M2 12h20M7 12v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6"/></svg>;
      case "chaqueta": return <svg {...p}><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>;
      case "gorra": return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10a15 15 0 0 1-4 10"/></svg>;
      case "reloj": return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
      default: return null;
    }
  };

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontWeight: '800', fontSize: '2.5rem', marginBottom: '40px' }}>NUESTRA COLECCIÓN</h2>
        
     
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px',
          justifyContent: 'start', 
          alignItems: 'stretch'
        }}>
          {listaProductos.map((prod) => (
            <div key={prod.id} style={{ 
              border: '1px solid #eee', 
              display: 'flex', 
              flexDirection: 'column', 
              backgroundColor: '#fff',
              minWidth: '0' 
            }}>
      
              <div style={{ backgroundColor: '#F3F4F6', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {renderIcono(prod.tipo)}
              </div>

         
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0' }}>{prod.nombre}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '5px 0 20px' }}>{prod.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontWeight: '800', fontSize: '1.4rem' }}>€{prod.precio}</span>
                  <button style={{ backgroundColor: '#111827', color: 'white', border: 'none', padding: '10px 15px', fontWeight: 'bold', cursor: 'pointer' }}>
                    AÑADIR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;