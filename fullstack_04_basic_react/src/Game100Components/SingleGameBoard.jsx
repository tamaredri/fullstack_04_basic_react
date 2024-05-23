import React from 'react';

const SingleGameBoard = (props) => {


    // const [currentNumber, setCurrentNumber] = useState(randomNumber);
    // const [currentSteps, setCurrentSteps] = useState(steps);

    // const handleAddOne = () => {
    //     setCurrentNumber(currentNumber + 1);
    //     setCurrentSteps(currentSteps + 1);
    // };

    // const handleSubtractOne = () => {
    //     setCurrentNumber(currentNumber - 1);
    //     setCurrentSteps(currentSteps + 1);
    // };

    // const handleMultiplyByTwo = () => {
    //     setCurrentNumber(currentNumber * 2);
    //     setCurrentSteps(currentSteps + 1);
    // };

    // const handleDivideByTwo = () => {
    //     setCurrentNumber(currentNumber / 2);
    //     setCurrentSteps(currentSteps + 1);
    // };

   


    return (
        <div style={{ border: '3px solid black', padding: '15px', width: '400px', textAlign: 'center' }}>
        <p>Username: {props.username}</p>
        <p>Current Number: {props.randomNumber}</p>
        <p>Steps: {props.steps}</p>
        {/* <button onClick={handleAddOne}>Add 1</button>
        <button onClick={handleSubtractOne}>Subtract 1</button>
        <button onClick={handleMultiplyByTwo}>Multiply by 2</button>
        <button onClick={handleDivideByTwo}>Divide by 2</button> */}
        </div>
       
    );
}

export default SingleGameBoard;
