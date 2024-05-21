import React from 'react';
import Character from './Charachter';
import classes from './modules_css/KeyBoard.module.css';

function KeysRow(props){


    return (
        <li className={classes.KeyRow}>
            {props.keys.map((k, index) => 
            <Character key={index} 
                        char={k} 
                        onCharacterClick={props.onKeyPressed}/>)}
        </li>
    )
}

export default KeysRow;