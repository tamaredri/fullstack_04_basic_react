import {useState} from 'react';
import KeyBoard from './KeyBoard';
import TextArea from './TextArea';
import Designer from './Designer';

function TextEditor(){
    const [languageId, setLanguageId] = useState(0);   
    const languages = ['english', 'עברית', '.?123'];
    
    const [selectedColor, setSelectedColor] = useState('#000000'); 
    const [selectedFont, setSelectedFont] = useState('Ariel'); 
    const [selectedSize, setSelectedSize] = useState(16); 
    const [isBoldSelected, setIsBoldSelected] = useState(false);
    const [isSelectedItalic, setSelectedItalic] = useState(false);

    const [text, setText] = useState([]);
    function keyPressedHandler(event){
        let val ={
          letter: event.target.textContent, 
          color: selectedColor, 
          font: selectedFont, 
          size:`${selectedSize}px`,
          fontWeight: isBoldSelected ? 'bold' : 'normal',
          fontStyle: isSelectedItalic ? 'italic' : 'normal'
        };

       
        if(val.letter === '←'){
            setText(t => t.slice(0, -1));
        } else if(val.letter === '🚮'){
          setText([]);
        } else{
            setText(t => [...t, val]);
        }
    }
  
    function handleLangClick(){
      setLanguageId(currentId => (currentId + 1 ) % 3);
    }  
    
    return (
      <>
        <TextArea newChar={text}/>

        <button onClick={handleLangClick}>{languages[(languageId+1)%3]}</button>
        <KeyBoard lang={languages[languageId]} onKeyPressed={keyPressedHandler}/>

        <Designer selectedColor={selectedColor} onSelectedColorChange={setSelectedColor}
                  selectedFont={selectedFont} onSelectedFontChange ={setSelectedFont}
                  onSelectedSizeChange={setSelectedSize} selectedSize={selectedSize} 
                  isBold={isBoldSelected} onBoldChange={setIsBoldSelected}
                  isSelectedItalic={isSelectedItalic} onSelectedItalicChange={setSelectedItalic} />
      </>
    )
}

export default TextEditor;