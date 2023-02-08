import React from 'react';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/icon-location.svg';
import { Icon } from 'leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { useSelector } from 'react-redux';
import { selectLocation } from '../redux/clientState/client';

const MapView = () => {
  const location = useSelector((state) => state.client.data.location);
  console.log(location);
  return (
    <>
      {location ? (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: '70vh', width: '100vw' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[location.lat, location.lng]}
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
        </MapContainer>
      ) : null}
    </>
  );
};

export default MapView;
