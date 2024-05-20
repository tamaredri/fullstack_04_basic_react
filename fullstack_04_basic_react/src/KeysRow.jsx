import React from 'react';
import Character from './Charachter';

function KeysRow(props){


    return (
        <li>
            {props.keys.map((k, index) => 
            <Character key={index} 
                        char={k} 
                        onCharacterClick={props.onKeyPressed}/>)}
        </li>
    )
}

export default KeysRow;