import React from 'react';
import KeysRow from './KeysRow';

function KeyBoard(props){
    const hebrew = [['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'], 
                    ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'], 
                    ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', ',', '.']];

    const english = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
                    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.']];

    const special = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
                    ['@', '#', '$', '&', '*', '(', ')', '\'', '\"'],
                    ['%', '_', '+', '=', '/', ';', ':', '!', '?', ',', '.']];

    const emoji = [[],[],[]];

    const actions = [['↩', '—', '←']];

    return (
        <>
            <ul>
                {props.lang === 'english' ? english.map((l, index) => <KeysRow key={index} keys={l} onKeyPressed={props.onKeyPressed}/>):
                (props.lang === 'עברית'? hebrew.map((l, index) => <KeysRow key={index} keys={l} onKeyPressed={props.onKeyPressed}/>) :
                special.map((l, index) => <KeysRow key={index} keys={l} onKeyPressed={props.onKeyPressed}/>))}
                {actions.map((l, index) => <KeysRow key={index} keys={l} onKeyPressed={props.onKeyPressed}/>)}
            </ul>
        </>
    )
}

export default KeyBoard;