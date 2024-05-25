import { useState } from 'react'
import TextEditor from './TextEditorComponents/TextEditor'
import Game100 from './Game100Components/Game100';


function App() {

  const [currentComponent, setCurrentComponent] = useState('Select');
  //  {currentComponent === 'TextEditor' && <TextEditor/>}

  //   {currentComponent === 'Game100' && <Game100 users={users}/>}\
  let show = false;
  return (

    <>

      {currentComponent === 'Select' &&
        <>
          <button onClick={() => setCurrentComponent('TextEditor')}>⌨️</button>
          <button onClick={() => setCurrentComponent('Game100')}>💯</button>
        </>
      }

      {currentComponent === 'TextEditor' &&
        <>
          <button onClick={() => setCurrentComponent('Select')}>🏠</button>
          <TextEditor />
        </>
      }


      {
        currentComponent === 'Game100' &&
        <>
          <button onClick={() => setCurrentComponent('Select')}>🏠</button>
          <Game100 />
        </>
      }


    </>

    // 
    // <div>
    //   <div>
    //     <button onClick={() => setCurrentComponent('TextEditor')}>Text Editor</button>
    //     <button onClick={() => setCurrentComponent('Game100')}>GameBoard</button>
    //   </div>

    // </div>
  )
}

export default App
