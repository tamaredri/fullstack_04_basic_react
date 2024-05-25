import React from 'react';
import classes from './modules_css/Registration.module.css';

const PlayersList = (props) => {
    return (
        <div className={classes.flexConteiner}>
            
            <p>Playing users:</p>
            <div className={classes.playersList}>
                {props.users.map((u, index) => <p key={index}>{u}</p>)}
            </div>
            <button onClick={props.onStartGame}>Start</button>
        </div>
    );
}

export default PlayersList;
