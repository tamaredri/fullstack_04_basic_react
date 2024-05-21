import React from 'react'
import classes from './modules_css/Designer.module.css';

function ColorSelector(props) {

    function handleColorChange(event) {
        props.onSelectedColorChange(event.target.value);
    }
   
   
    return (
        <div className={classes.Selector}>
            <input
                type="color"
                value={props.selectedColor}
                onChange={handleColorChange}/>
        </div>
        
    )
}

export default ColorSelector