import {useState} from 'react';
import KeyBoard from './KeyBoard';
import TextArea from './TextArea';
import Designer from './Designer';

function TextEditor(){
    const [languageId, setLanguageId] = useState(0);   
    const languages = ['english', 'עברית', '.?123', '😀'];
    
    const [selectedColor, setSelectedColor] = useState('#000000'); 
    const [selectedFont, setSelectedFont] = useState('Ariel'); 
    const [selectedSize, setSelectedSize] = useState(16); 
    const [isBoldSelected, setIsBoldSelected] = useState(false);
    const [isSelectedItalic, setSelectedItalic] = useState(false);
    const [ isUnderlineSelected,  setSelectedUnderline] = useState(false);
    const [history, setHistory] = useState([]);

    const [text, setText] = useState([]);
    function keyPressedHandler(event){
        let val ={
          letter: event.target.textContent, 
          color: selectedColor, 
          font: selectedFont, 
          size:`${selectedSize}px`,
          fontWeight: isBoldSelected ? 'bold' : 'normal',
          fontStyle: isSelectedItalic ? 'italic' : 'normal',
          textDecoration: isUnderlineSelected ? 'underline' : 'none'
        };

       
        if(val.letter === '←'){
          setHistory([...history, text]);
            setText(t => t.slice(0, -1));
        } else if(val.letter === '🗑'){
          setHistory([...history, text]);
          setText([]);
        } 
        else if(val.letter === '🧹'){
          setHistory([...history, text]);
          setText(t => t.map(char => ({ letter: char.letter, color: selectedColor, font: selectedFont, 
            size:`${selectedSize}px`,
            fontWeight: isBoldSelected ? 'bold' : 'normal',
            fontStyle: isSelectedItalic ? 'italic' : 'normal',
            textDecoration: isUnderlineSelected ? 'underline' : 'none'})));
        }
       else if(val.letter === '⬆'){
        setHistory([...history, text]);
        setText(t => t.map(char => ({ ...char, letter: char.letter.toUpperCase() })));
      } 
      else if(val.letter === '⬇'){
        setHistory([...history, text]);
        setText(t => t.map(char => ({ ...char, letter: char.letter.toLowerCase() })));
      } 
        else{
            setHistory([...history, text]);
            setText(t => [...t, val]);
        }
    }
  
    function handleLangClick(){
      setLanguageId(currentId => (currentId + 1 ) % 4);
    }  

    function undoLastChange() {
      if (history.length > 0) {
          setText(history[history.length - 1]); // Restore the last state from history
          setHistory(history.slice(0, -1)); // Remove the last state from history
      }
    }


    return (
      <>
        <TextArea newChar={text}/>

        <button onClick={handleLangClick}>{languages[(languageId+1) % 4]}</button>
        <button onClick={undoLastChange}>🔙</button>
       
        <KeyBoard lang={languages[languageId]} onKeyPressed={keyPressedHandler}/>

        <Designer selectedColor={selectedColor} onSelectedColorChange={setSelectedColor}
                  selectedFont={selectedFont} onSelectedFontChange ={setSelectedFont}
                  onSelectedSizeChange={setSelectedSize} selectedSize={selectedSize} 
                  isBold={isBoldSelected} onBoldChange={setIsBoldSelected}
                  isSelectedItalic={isSelectedItalic} onSelectedItalicChange={setSelectedItalic} 
                  isUnderlineSelected ={isUnderlineSelected} onSelectedUnderlineChange={setSelectedUnderline}  />
      </>
      
    )
}

export default TextEditor;