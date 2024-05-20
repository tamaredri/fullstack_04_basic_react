import {useEffect, useState} from 'react'

function TextArea(props) {
   
    return (
        <p>{props.newChar.map((c, index) => c.letter=== '↩'? <br/> :
         (<span key={index} style={{color:c.color, fontFamily: c.font, size: c.size}}>{c.letter === '—' ? ' ' : c.letter}</span>)
         )}</p>
    )
}

export default TextArea