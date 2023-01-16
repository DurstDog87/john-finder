"use-strict";
import { useEffect, useState } from "react";
import { useMapEvents, Popup } from 'react-leaflet';
import AddFacilForm from "../AddFacilForm";

//Display popup when a location on the map is clicked
function AddFacilPopup() {
    const [position, setPosition] = useState(null)
    const [showForm, setShowForm] = useState(false)
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        }
    })

    return position === null ? null : (
        //<Marker position={position} >
        <Popup closeOnEscapeKey closeOnClick position={position}>
            <div>
                <h3>point coordinates:</h3>
                <h3>lat: {position.lat}</h3>
                <h3>long: {position.lng}</h3>
                <button onClick={() => setShowForm(true)}>add a facility</button>
                {!showForm ? null : <AddFacilForm />}
            </div >
        </Popup>
        //</Marker>
    )
};


export { AddFacilPopup };
