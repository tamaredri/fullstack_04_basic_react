import React from 'react';
import classes from './modules_css/GameBoard.module.css';

const SingleGameBoard = (props) => {
    const isWinning = props.user.number === 100;

    function setStep() {
        props.user.steps += 1;
        props.onStep(props.user);
        if (props.user.number === 100) {
            props.onWinning(props.user.username, props.user.steps);
        }
        else {
            props.onFinishedPlaying();
        }
    }

    function plus() {
        props.user.number += 1;
        setStep();
    }
    function minus() {
        props.user.number -= 1;
        setStep();
    }
    function multiply() {
        props.user.number *= 2;
        setStep();
    }
    function divide() {
        props.user.number = Math.floor(props.user.number / 2);
        setStep();
    }


    return (
        <div className={[classes.flexConteiner, classes.userBoard].join(' ')}>
            <div className={props.isActive ? '' : classes.inactive}></div>
            <p>~ {props.user.username} ~</p>

            {isWinning ?
                <>
                    <div className={classes.winnerDiv}>
                        <strong>👟: {props.user.steps}</strong>

                        <button className={classes.winnerOptions} onClick={() => { props.onGameRestart(props.user.username) }}>Start again</button>
                        <button className={classes.winnerOptions} onClick={() => { props.onQuit(props.user.username) }}>Quit</button>
                    </div>
                </>
                :
                <div>
                    <div className={classes.gameActions}>
                        <strong className={classes.centered}>{props.user.number}</strong>
                        <button className={[classes.button, classes.left].join(' ')} disabled={!props.isActive} onClick={plus}>+1</button>
                        <button className={[classes.button, classes.right].join(' ')} disabled={!props.isActive} onClick={minus}>-1</button>
                        <button className={[classes.button, classes.top].join(' ')} disabled={!props.isActive} onClick={multiply}>x2</button>
                        <button className={[classes.button, classes.bottom].join(' ')} disabled={!props.isActive} onClick={divide}>/2</button>
                    </div>
                    <div>
                        <p>👟: {props.user.steps}</p>
                        <p>🧮: {props.user.fullSteps.join(', ')}</p>
                    </div>
                </div>
            }


        </div>

    );
}

export default SingleGameBoard;


