const FeatureItem = ({ icono, titulo, descripcion }) => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <div style={{ fontSize: '2rem' }}>{icono}</div>
    <h4>{titulo}</h4>
    <p style={{ fontSize: '0.9rem' }}>{descripcion}</p>
  </div>
);

export default FeatureItem;