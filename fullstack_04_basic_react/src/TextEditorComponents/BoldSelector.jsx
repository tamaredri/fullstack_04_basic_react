import React from 'react';
import classes from './modules_css/Designer.module.css';

function BoldSelector(props) {
    
    function handleBoldChange() {
        props.onBoldChange(f => !f);
    }

    return (
        <div className={classes.Selector}>
            <button 
            onClick={handleBoldChange} 
            style={props.isBold? {fontWeight: 'bold'} : {}}>
                B
            </button>
        </div>
    );
}

export default BoldSelector;