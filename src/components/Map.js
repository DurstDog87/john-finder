import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import '../App.css';
import '../style/map.css'

function LocationMarker() {
    const [position, setPosition] = useState(null)
    useMapEvents({
        click(e) {
            setPosition(e.latlng)
        }
    })

    return position === null ? null : (
        //<Marker position={position} >
        <Popup position={position}>
            <div>
                <h3>point coordinates:</h3>
                <h3>lat: {position.lat}</h3>
                <h3>long: {position.lng}</h3>
                <button>add a facility</button>
            </div ></Popup>
        //</Marker>
    )
};

const Map = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
            marginRight: '1%'
        }}
        >
            <MapContainer className="map" center={[42.9865817633812, -85.67138671875]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker />
            </MapContainer>
        </div>
    )
};

export default Map;