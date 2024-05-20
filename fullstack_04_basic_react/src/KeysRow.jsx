import React from 'react';
import Character from './Charachter';

function KeysRow(props){


    return (
        <li>
            <div>
                {props.keys.map((k, index) => <Character key={index} char={k} onCharacterClick={props.onKeyPressed}/>)}
            </div>
        </li>
    )
}

export default KeysRow;