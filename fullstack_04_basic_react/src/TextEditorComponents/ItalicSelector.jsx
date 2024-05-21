import React from "react";
import classes from './modules_css/Designer.module.css';


function ItalicSelector(props) {
    
    function handleItalicChange() {
        props.onSelectedItalicChange(f => !f);
    }

    return (
        <div className={classes.Selector}>
            <button 
            onClick={handleItalicChange} 
            style={props.isItalic? {fontStyle: 'italic'} : {}}>
                I
            </button>
        </div>
    );
}

export default ItalicSelector