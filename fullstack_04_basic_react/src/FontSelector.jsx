import React from 'react'

function FontSelector(props) {

    function handleFontChange(event) {
        props.onSelectedFontChange(event.target.value);
    }
   
   
    return (
          <div>
            <select
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