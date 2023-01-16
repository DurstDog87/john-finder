import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import { AddFacilPopup } from "../utils/mapHelper";
import '../App.css';
import '../style/map.css'


// The main map
const Map = () => {
    const [markers, setMarkers] = useState([]);
    const getMarkers = async () => {
        try {
            const response = await fetch("http://localhost:5000/facilities/");
            const markerData = await response.json();
            setMarkers(markerData);
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }
    useEffect(() => {
        getMarkers()
    }, []);


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'right',
            marginRight: '1%'
        }}>
            <MapContainer className="map" center={[42.9865817633812, -85.67138671875]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <AddFacilPopup />
            </MapContainer>
        </div>
    )
};

export default Map;