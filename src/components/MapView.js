import React from 'react';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/icon-location.svg';
import { Icon } from 'leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { useSelector } from 'react-redux';
import MapRenderer from './MapRenderer';

const MapView = () => {
  const clientLocation = useSelector((state) => state.client.data.location);
  const queryLocation = useSelector((state) => state.query.data.location);
  const displayLocation = Object.keys(queryLocation).length
    ? queryLocation
    : clientLocation;

  return (
    <MapContainer
      center={[displayLocation.lat, displayLocation.lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '70vh', width: '100%', zIndex: 2 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[displayLocation.lat, displayLocation.lng]}
        icon={
          new Icon({
            iconUrl: markerIcon,
            iconSize: [48, 55],
            iconAnchor: [24, 55],
          })
        }
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapRenderer lat={displayLocation.lat} lng={displayLocation.lng} />
    </MapContainer>
  );
};

export default MapView;
