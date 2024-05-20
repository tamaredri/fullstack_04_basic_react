import React from 'react'

function Character(props){
    return (
        <>
            <button onClick={props.onCharacterClick}>{props.char}</button>
        </>
    )
}

export default Character;