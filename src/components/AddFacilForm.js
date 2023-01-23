import { useState } from 'react';
import '../css/form.css';


const AddFacilForm = (set) => {
    const [show, setShow] = useState(true);
    function handleSubmit(e){
        e.preventDefault();
        setShow(false);
        console.log("Submit!");
    }

    return (
        show &&
        <div className='form-group'>
            <form onSubmit={handleSubmit}>
                <label>
                    Description:
                    <input type="text" name="name" />
                </label>
                <label>Condition:
                    <select defaultValue={"Select One"}>
                        <option value="Exellent">Exellent</option>
                        <option value="Good">Good</option>
                        <option value="Passable">Passable</option>
                        <option selected value="Poor">Poor</option>
                    </select>
                </label>
                <label>Type:
                    <select defaultValue={"Select One"}>
                        <option value={1}>Portable Toilet</option>
                        <option value={2}>Public Restroom</option>
                    </select>
                </label>
                <input type="submit" value="Submit" className='buttonSubmit' />
            </form>
        </div>
    )
};

export default AddFacilForm;

