import React from 'react';

function UnderlineSelector(props) {

    function handleUnderlineChange() {
        props.onSelectedUnderlineChange(f => !f);
    }

    return (
        <div>
            <button 
            onClick={handleUnderlineChange} 
            style={props.isUnderline? {textDecoration: 'underline' } : {}}>
            U
            </button>
        </div>
    );
}

export default UnderlineSelector;