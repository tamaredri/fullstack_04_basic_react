import React from 'react'
import classes from './KeyBoard.module.css';

function Character(props){
    return (
        <>
            <button className={classes.Character} onClick={props.onCharacterClick}>
                {props.char}
            </button>
        </>
    )
}

export default Character;