function TextArea(props) {
   
    return (
        <div>
            {props.newChar.map((c, index) => c.letter=== '↩'? 
                <br key={index}/> :
                <span key={index} style={{color:c.color, fontFamily: c.font, fontSize: c.size,  fontWeight: c.fontWeight, fontStyle: c.fontStyle, textDecoration: c.textDecoration}}>
                    {c.letter === '—' ? ' ' : c.letter}
                </span>)}
        </div>
    )
}

export default TextArea