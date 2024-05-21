import classes from './TextEditor.module.css';

function TextArea(props) {
   
    return (
        <div className={classes.TextArea}>
            {props.newChar.map((c, index) => c.letter=== '↩'? 
                <br/> :
                <span key={index} style={{color:c.color, fontFamily: c.font, fontSize: c.size,  fontWeight: c.fontWeight, fontStyle: c.fontStyle}}>
                    {c.letter === '—' ? ' ' : c.letter}
                </span>)}
        </div>
    )
}

export default TextArea