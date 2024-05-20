import {useState} from 'react'

function TextArea(props) {
    // add use state for the event of new char
    const paragraph = [];



    return (
        <div>{props.newChar.map((c, index) => <span key={index}>{c}</span>)}</div>
    )
}

export default TextArea