import React from 'react';
import KeysRow from './KeysRow';
import classes from './modules_css/KeyBoard.module.css';

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

    const emoji = [['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊'],
                    ['😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂'],
                    ['🤗', '🤩', '🤔', '🤨', '😐', '😥', '😪', '😴', '🤐', '😏', '😮']];

    const actions = [['↩', '—', '←'],[ '🗑', '🧹', '⬆', '⬇']];

    function createRow(index, l) {
        return <KeysRow key={index} keys={l} onKeyPressed={props.onKeyPressed} />;
    }

    return (
        <>
            <ul className={classes.KeyBoard}>
                {props.lang === 'english' ? english.map((l, index) => createRow(index, l)):
                (props.lang === 'עברית'? hebrew.map((l, index) => createRow(index, l)) :
                (props.lang === '😀'? emoji.map((l, index) => createRow(index, l)) :
                special.map((l, index) => createRow(index, l))))}
                
                {actions.map((l, index) => createRow(index, l))}
            </ul>
        </>
    )


}

export default KeyBoard;