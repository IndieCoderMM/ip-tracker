import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const MapRenderer = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};

export default MapRenderer;
