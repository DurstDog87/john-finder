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
        <Popup position={position}>
            <>
                {
                !showForm ? 
                <div>
                    <button 
                    className="buttonBlue"
                    onClick={() => setShowForm(true)}>add a facility here</button> 
                </div>  
                    : 
                    <>
                        <AddFacilForm coords={position} />
                        <button
                        onClick={() => setShowForm(false)}
                        className='buttonCancel'
                        >Cancel</button>
                    </>
                    }
            </>
        </Popup>
        //</Marker>
    )
};

export { AddFacilPopup };
