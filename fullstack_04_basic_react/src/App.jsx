import { useState } from 'react'
import TextEditor from './TextEditorComponents/TextEditor'
import Game100 from './Game100Components/Game100';
import classes from './App.module.css';


function App() {
  const [currentComponent, setCurrentComponent] = useState('Select');

  return (

    <>

      {currentComponent === 'Select' &&
        <div className={classes.container}>
          <button className={classes.navigationBtn} onClick={() => setCurrentComponent('TextEditor')}>⌨️</button>
          <button className={classes.navigationBtn} onClick={() => setCurrentComponent('Game100')}>💯</button>
        </div>
      }

      {currentComponent === 'TextEditor' &&
        <div className={classes.container}>
          <button  className={[classes.navigationBtn, classes.homeBtn].join(' ')} onClick={() => setCurrentComponent('Select')}>🏠</button>
          <TextEditor />
        </div>
      }

      {
        currentComponent === 'Game100' &&
        <div className={classes.container}>
          <button  className={[classes.navigationBtn, classes.homeBtn].join(' ')} onClick={() => setCurrentComponent('Select')}>🏠</button>
          <Game100 />
        </div>
      }

    </>

  )
}

export default App
