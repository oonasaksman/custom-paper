import './canvas.css';
import './Edit.css';
import { useState } from 'react';
import EditColor from './EditColor.js';
import EditText from './EditText.js';
import EditSticker from './EditSticker.js';


function Edit({ handleColor, bgColor, handleLineColor, lineColor }) {

    const [editMode, setEditMode] = useState(1);


    let editContent;
    if (editMode == 1) {
        editContent = <EditColor handleColor={handleColor} bgColor={bgColor} handleLineColor={handleLineColor} lineColor={lineColor} />;
    }
    else if (editMode == 2)  {
        editContent = <EditText />;
    }
    else {
        editContent = <EditSticker />;
    }

    function handleClick (number) {
        setEditMode(number)
    }


    return (
        <div className='editContainer'>
        <div className='editBlock'>
            <div className='editOptions'>
                <div className='color' onClick={() => handleClick(1)}>color</div>
                <div className='text' onClick={() => handleClick(2)}>text</div>
                <div className='sticker' onClick={() => handleClick(3)}>sticker</div>
            </div>
            {editContent} 
        </div>
        </div>
    );
}

export default Edit;