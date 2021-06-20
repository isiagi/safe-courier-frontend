import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Polyline } from '@react-google-maps/api';
// AIzaSyAArBzVCXw8OSDV3GNDtoKLzcGCasWGaUQ

const containerStyle = {
  maxWidth: '1400px',
  height: '600px',
};

const center = {
  lat: 0.322985114134563,
  lng: 32.57803308928811,
};

const onLoad = polyline => {
  console.log('polyline: ', polyline)
};

const path = [
  { lat: 0.322985114134563, lng: 32.57803308928811 },
  { lat: 0.32392322993485073, lng:  32.576373751871465}
];

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [
    { lat: 0.322985114134563, lng: 32.57803308928811 },
    { lat: 0.32392322993485073, lng:  32.576373751871465}
  ],
  zIndex: 1
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAArBzVCXw8OSDV3GNDtoKLzcGCasWGaUQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker label="pick up" position={{ lat: 0.322985114134563, lng: 32.57803308928811 }} />
        <Marker label="destination" position={{ lat: 0.32392322993485073, lng:  32.576373751871465}} />
        <Polyline
      onLoad={onLoad}
      path={path}
      options={options}
    />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);