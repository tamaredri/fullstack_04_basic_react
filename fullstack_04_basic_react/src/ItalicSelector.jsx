import React from "react";


function ItalicSelector(props) {
    

    function handleItalicChange() {
        props.onSelectedItalicChange(f => !f);
    }

    return (
        <div>
            <button 
            onClick={handleItalicChange} 
            style={props.isItalic? {fontStyle: 'italic'} : {}}>
                I
            </button>
        </div>
    );
}

export default ItalicSelector