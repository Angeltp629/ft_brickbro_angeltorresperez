// src/components/MapMarker.tsx
interface MapMarkerProps {
    lat: number;
    lng: number;
  }

  // Marcador para el mapa de Google
  
  const MapMarker: React.FC<MapMarkerProps> = () => (
    <div style={{ color: 'red' }}>📍</div>
  );
  
  export default MapMarker;
  