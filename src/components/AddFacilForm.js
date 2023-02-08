import { useState } from 'react';
import '../css/form.css';


const AddFacilForm = ({ coords }) => {
    const [show, setShow] = useState(true);
    function handleSubmit(e){
        //e.preventDefault();
        setShow(false);
        console.log("Submit!");
    }

    return (
        show &&
        <div className='form-group'>
            <p>{`${coords.lat}, ${coords.lng}`}</p>
            <form className='facilityForm' onSubmit={handleSubmit}>
                <label className='formHeaders'>
                    Description:
                    <input className='textBox' type="text" name="name" />
                </label>
                <label className='formHeaders'>Condition:
                    <select className='select' defaultValue={"Select One"}>
                        <option value="Exellent">Exellent</option>
                        <option value="Good">Good</option>
                        <option value="Passable">Passable</option>
                        <option selected value="Poor">Poor</option>
                    </select>
                </label >
                <label className='formHeaders'>Type:
                    <select className='select' defaultValue={"Select One"}>
                        <option value={1}>Portable Toilet</option>
                        <option value={2}>Public Restroom</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit" className='buttonSubmit' />
            </form>
        </div>
    )
};

export default AddFacilForm;

