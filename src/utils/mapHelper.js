"use-strict";
import React, { useEffect, useState } from "react";
import { useMapEvents, Popup } from 'react-leaflet';
import AddFacilForm from "../components/AddFacilForm";
import '../css/form.css';
import TEST_DATA from '../dev-test.json';

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
        <Popup className="popup" position={position}>
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
                        <AddFacilForm coords={position} user={TEST_DATA.test_user} />
                        <button
                        onClick={() => {
                            setShowForm(false);
                            console.log("form canceled");
                        }}
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
