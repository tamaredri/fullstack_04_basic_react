import React from "react";


function ItalicSelector(props) {
    

    function plusClickHandle(){
        props.onSelectedSizeChange(f => f + 2);
    }
    function minusClickHandle(){
        props.onSelectedSizeChange(f => f === 10 ? f : f - 2);
    }

    return (
        <div>
            <button onClick={plusClickHandle}>+</button>
            <input type="number" 
            value={props.selectedSize} 
            readOnly min="10"/>
            <button onClick={minusClickHandle}>-</button>
        </div>
    )
}

export default ItalicSelector