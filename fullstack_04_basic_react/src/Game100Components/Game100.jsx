import React from 'react';
import SingleGameBoard from './SingleGameBoard';

const Game100 = (props ) => {

    return (
        <div>
        {props.users.map((c, index) => (
            <SingleGameBoard
                key={index}
                username={c.username}
                randomNumber={c.randomNumber}
                steps={c.steps}
            />
        ))}
        </div>

    );
}

export default Game100;
