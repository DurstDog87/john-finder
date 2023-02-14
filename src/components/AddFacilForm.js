'use-strict';
import React, { useState } from 'react';
import '../css/form.css';

const AddFacilForm = ({ coords, user }) => {
    const [show, setShow] = useState(true);
    const [conditionState, setConditionState] = useState("exellent");
    const [facilTypeState, setFacilTypeState] = useState(0);
    const [descriptionState, setDescriptionState] = useState("no description")

    const condOpts = [
        {label:"exellent", value:"exellent"},
        {label:"good", value:"good"},
        {label:"passable", value:"passable"},
        {label:"poor", value:"poor"}
    ]
    const facilTypes = [
        {label:"Portable Toilet", value:1},
        {label:"Public Restroom", value:0}
    ]


    function handleSelectCondition(e) {
        setConditionState(e.target.value);
    }

    function handleSelectFacilType(e){
        setFacilTypeState(e.target.value);
    }

    function handleDescriptionChange(e){
        setDescriptionState(e.target.value);
    }

    function handleSubmit(e){
        //e.preventDefault();
        fetch("http://localhost:5000/facilities", {
            method:'POST',
            body: JSON.stringify({
                //submitter, description, condition, type, geom
                submitter: user,
                description:descriptionState,
                condition: conditionState,
                type: facilTypeState,
                geom:coords
            }),
            headers: {
                'content-type':'application/json'
            }
        })
            .then((response) => response.status)
            .then((data) => console.log(data, conditionState, facilTypeState));
    };

    return (
        show &&
        <div className='form-group'>
            <p>{`${coords.lat}, ${coords.lng}`}</p>
            <form className='facilityForm' onSubmit={handleSubmit}>
                <label className='formHeaders'>
                    Description:
                    <input className='textBox' type="text" name="name" onChange={handleDescriptionChange} />
                </label>
                <label className='formHeaders'>Condition:
                    <select 
                    className='select' 
                    onChange={handleSelectCondition}>
                        {condOpts.map((option)=> (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </label >
                <label className='formHeaders'>Type:
                    <select 
                    className='select' 
                    onChange={handleSelectFacilType}>
                            {facilTypes.map((option) =>(
                                <option value={option.value}>{option.label}</option>
                            ))}
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit" className='buttonSubmit' />
            </form>
        </div>
    )
};

export default AddFacilForm;

