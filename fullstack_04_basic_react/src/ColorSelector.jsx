import React from 'react'

function ColorSelector(props) {

    function handleColorChange(event) {
        props.onSelectedColorChange(event.target.value);
    }
   
   
    return (
        <div>
            <input
                type="color"
                value={props.selectedColor}
                onChange={handleColorChange}/>
        </div>
        
    )
}

export default ColorSelector