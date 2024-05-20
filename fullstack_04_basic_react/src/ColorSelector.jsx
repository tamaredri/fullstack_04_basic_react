import React from 'react'

function ColorSelector(props) {

    function handleColorChange(event) {
        props.onSelectedColorChange(event.target.value);
    }
   
   
    return (
        <div>
            <label htmlFor="colorPicker" />
            <input
                type="color"
                id="colorPicker"
                value={props.selectedColor}
                onChange={handleColorChange}/>
        </div>
        
    )
}

export default ColorSelector