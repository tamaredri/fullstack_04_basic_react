import React from 'react';

function BoldSelector(props) {
    function handleBoldChange() {
        props.onBoldChange(f => !f);
    }

    return (
        <div>
            <button 
            onClick={handleBoldChange} 
            style={props.isBold? {fontWeight: 'bold'} : {}}>
                B
            </button>
        </div>
    );
}

export default BoldSelector;