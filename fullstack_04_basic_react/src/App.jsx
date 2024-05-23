import { useState } from 'react'
import TextEditor from './TextEditorComponents/TextEditor'
import Game100 from './Game100Components/Game100';


function App() {
 
    const [currentComponent, setCurrentComponent] = useState('TextEditor');
    //  {currentComponent === 'TextEditor' && <TextEditor/>}

    //   {currentComponent === 'Game100' && <Game100 users={users}/>}

  return (


    <Game100 />

    // <TextEditor />
    // <div>
    //   <div>
    //     <button onClick={() => setCurrentComponent('TextEditor')}>Text Editor</button>
    //     <button onClick={() => setCurrentComponent('Game100')}>GameBoard</button>
    //   </div>
    
  // </div>
  )
}

export default App
