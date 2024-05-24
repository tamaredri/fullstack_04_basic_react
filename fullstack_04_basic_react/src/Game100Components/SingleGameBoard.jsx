import React from 'react';
import { useState } from 'react';

const SingleGameBoard = (props) => {
    const isWinning = props.user.number === 100;
    
    function setStep() {
        props.user.steps += 1;
        props.onStep(props.user);
        if(props.user.number === 100){
            console.log(props.user.username, props.user.steps);
            props.onWinning(props.user.username, props.user.steps);
        }
    }

    function plus(){
        props.user.number += 1;
        setStep();
    }
    function minus(){
        props.user.number -= 1;
        setStep();
    }
    function multiply(){
        props.user.number *= 2;
        setStep();
    }
    function divide(){
        props.user.number = Math.floor(props.user.number / 2);
        setStep();
    }

    return (
        <div style={{ border: '3px solid black', padding: '15px', width: '400px', textAlign: 'center' }}>
            <p>Username: {props.user.username}</p>
            <p>{props.user.number}</p>
            {isWinning ?
                <>
                    <p>steps: {props.user.steps}</p>
                    <button onClick={() => {props.onGameRestart(props.user.username)}}>Start again</button>  
                    <button onClick={() => {props.onQuit(props.user.username)}}>Quit</button>  
                </>
                :
                <>
                    <button onClick={plus}>+1</button>
                    <button onClick={minus}>-1</button>
                    <button onClick={multiply}>x2</button>
                    <button onClick={divide}>/2</button>
                    <p>steps: {props.user.steps}</p>
                    <p>{props.user.username}'s scores: {props.user.fullSteps.join(', ')}</p>
                </>} 
                
        </div>

    );
}

export default SingleGameBoard;


