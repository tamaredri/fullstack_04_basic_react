import {useState} from 'react';
import KeyBoard from './KeyBoard';
import TextArea from './TextArea';
import Designer from './Designer';

function TextEditor(){
    const [languageId, setLanguageId] = useState(0);   
    const languages = ['english', 'עברית', '.?123'];
    const [selectedColor, setSelectedColor] = useState('blue'); 
    const [selectedFont, setSelectedFont] = useState('Ariel'); 
    const [selectedSize, setSelectedSize] = useState('16px'); 
  
    function handleClick(){
      setLanguageId(currentId => (currentId + 1 ) % 3);
    }

    const [text, setText] = useState([]);

    function keyPressedHandler(event){
        let val ={letter: event.target.textContent,
                  color: selectedColor , 
                  font: selectedFont, 
                  size:selectedSize};
       
       
        if(val.letter === '←'){
            setText(t => t.slice(0, -1));
        } else{
            setText(t => [...t, val]);
        }
    }
  

  
    return (
      <>
        <TextArea newChar={text}/>
        <button onClick={handleClick}>{languages[(languageId+1)%3]}</button>
        <KeyBoard lang={languages[languageId]} onKeyPressed={keyPressedHandler}/>
        <Designer selectedColor={selectedColor} onSelectedColorChange={setSelectedColor}
                  selectedFont={selectedFont} onSelectedFontChange ={setSelectedFont}
         onSelectedSizeChange={setSelectedSize} />

      </>
    )
}

export default TextEditor;