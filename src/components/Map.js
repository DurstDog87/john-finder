import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { AddFacilPopup } from "../utils/mapHelper";
import '../App.css';
import '../style/map.css';
import portaIcon from "../assets/porta1.png";

const porta = new Icon({
    iconUrl: portaIcon,
    iconRetinaUrl: portaIcon,
    iconSize: [30, 30]
})


// The main map
const Map = () => {
    const [markers, setMarkers] = useState([]);
    const [currentJohn, setJohn] = useState(null);

    function handleDelete(id) {
        console.log(id);
        
        fetch(`http://localhost:5000/facilities/${id}`, {
            method: "DELETE"
        })
    }

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
                {markers.map(feature => (
                    <Marker
                        key={feature.fid}
                        position={[ feature.geom.x, feature.geom.y ]}
                        icon={porta}>
                            <Popup>
                                <div>
                                    <h2>{feature.condition}</h2>
                                    <p>{feature.submitter_description}</p>
                                    <p className="mt-3">submitted on: {feature.submitted_on}</p>
                                </div>
                                <button className="buttonCancel" type="button" onClick={() => handleDelete(feature.fid)}>Delete</button>
                            </Popup>
                    </Marker>
                ))}
               <AddFacilPopup />
            </MapContainer>
        </div>
    )
};

export default Map;
