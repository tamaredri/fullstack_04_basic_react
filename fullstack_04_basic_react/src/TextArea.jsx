function TextArea(props) {
   
    return (
        <div>
            {props.newChar.map((c, index) => c.letter=== '↩'? 
                <br/> :
                <span key={index} style={{color:c.color, fontFamily: c.font, fontSize: c.size}}>
                    {c.letter === '—' ? ' ' : c.letter}
                </span>)}
        </div>
    )
}

export default TextArea