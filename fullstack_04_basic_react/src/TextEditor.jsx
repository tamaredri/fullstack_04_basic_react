import {useState} from 'react';
import KeyBoard from './KeyBoard';
import TextArea from './TextArea';

function TextEditor(){
    const [idx, setIdx] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState('עברית');
  
    const languages = ['english', 'עברית', '.?123'];
  
    function handleClick(){
      setIdx(currentId => (currentId + 1 ) % 3);
      setSelectedLanguage(languages[idx])
    }

    const [text, setText] = useState([]);

    function keyPressedHandler(event){
        let val = event.target.textContent;
        ['↩', '—', '←']
        if(val === '↩'){
            setText(t => [...t, '\n']);
        } else if(val === '—'){
            setText(t => [...t, ' ']);
        } else if(val === '←'){
            setText(t => t.slice(0, -1));
        } else{
            setText(t => [...t, val]);
        }
    }
  
  
    return (
      <>
        <TextArea newChar={text}/>
        <button onClick={handleClick}>{selectedLanguage}</button>
        <KeyBoard lang={selectedLanguage} onKeyPressed={keyPressedHandler}/>
      </>
    )
}

export default TextEditor;