import { useState } from 'react';


const AddFacilForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <div className='form-group'>
            <form>
                <label>
                    Description:
                    <input type="text" name="name" />
                </label>
                <label>Condition:
                    <select>
                        <option value="Exellent">Exellent</option>
                        <option value="Good">Good</option>
                        <option value="Passable">Passable</option>
                        <option selected value="Poor">Poor</option>
                    </select>
                </label>
                <label>Type:
                    <select>
                        <option value={1}>Portable Toilet</option>
                        <option value={2}>Public Restroom</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default AddFacilForm;

