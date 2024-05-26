import React from 'react';


const TopThree = (props) => {
 
    return (

        <div >
            <h2>Top 3 Players</h2>
            <ol>
                {props.topPlayers.map((user, index) => (
                    <li key={index}> <strong>{user.username}</strong> - {user.avrSteps}</li>
                ))}
            </ol>
        </div>

    );
}

export default TopThree;
