"use-strict";
import { useEffect, useState } from "react";
import { useMapEvents, Popup } from 'react-leaflet';
import AddFacilForm from "../components/AddFacilForm";
import '../css/form.css'

//Display popup when a location on the map is clicked
function AddFacilPopup() {
    const [position, setPosition] = useState(null)
    const [showForm, setShowForm] = useState(false)
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        }
    })

    return position === null ? () => setShowForm(false) : (
        //<Marker position={position} >
        <Popup closeOnEscapeKey closeOnClick position={position}>
            <div>
                {
                !showForm ? 
                <div>
                    <h3>point coordinates:</h3>
                    <h3>lat: {position.lat}</h3>
                    <h3>long: {position.lng}</h3>  
                    <button 
                    className="buttonBlue"
                    onClick={() => setShowForm(true)}>add a facility</button> 
                </div>  
                    : 
                    <>
                        <AddFacilForm />
                        <button
                        onClick={() => setShowForm(false)}
                        className='buttonCancel'
                        >Cancel</button>
                    </>
                    }
            </div >
        </Popup>
        //</Marker>
    )
};

export { AddFacilPopup };
