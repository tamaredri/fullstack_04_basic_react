import React from 'react'
import classes from './Designer.module.css';

function FontSelector(props) {

    function handleFontChange(event) {
        props.onSelectedFontChange(event.target.value);
    }
   
   
    return (
          <div className={classes.Selector}>
            <select className={classes.FontSelector}
            value={props.selectedFont} 
            onChange={handleFontChange}>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
            </select>
        </div>
     
    )
}

export default FontSelector