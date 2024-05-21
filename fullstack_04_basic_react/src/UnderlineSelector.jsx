import React from 'react';
import classes from './Designer.module.css';

function UnderlineSelector(props) {

    function handleUnderlineChange() {
        props.onSelectedUnderlineChange(f => !f);
    }

    return (
        <div className={classes.Selector}>
            <button 
            onClick={handleUnderlineChange} 
            style={props.isUnderline? {textDecoration: 'underline' } : {}}>
            U
            </button>
        </div>
    );
}

export default UnderlineSelector;