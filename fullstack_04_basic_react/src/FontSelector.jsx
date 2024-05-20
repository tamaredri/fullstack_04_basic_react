import React from 'react';

function FontSelector(props) {

    function handleChange(event){
        props.onSelectedFontChange(f => event.target.value)
    }
   
    return (
        <div>
            {/* <input type="number" value={props.selectedFont} onChange={handleChange} min="1"/> */}
        </div>
    )
}

export default FontSelector