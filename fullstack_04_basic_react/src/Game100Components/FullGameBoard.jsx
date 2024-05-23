import React from 'react';
import { useState } from 'react';
import SingleGameBoard from './SingleGameBoard';

const FullGameBoard = (props) => {
    const [users, setUsers] = useState(props.registeredUsers.map(u => ({
        username: 'User1', number: Math.floor(Math.random() * 100), steps: 0, fullSteps: u.steps
    })));

    // add an isActive prop to mark the player with the active board - using an index



    function handleStep(user){
        setUsers(lastUsers => {
            let userIndex = lastUsers.findIndex(u => u.username === user.username);
            const updatedUsers = [...lastUsers];
            updatedUsers[userIndex] = user;
            return updatedUsers;
        });
    }

    function handleWinning(username){
        /**
         * store the user data - steps list - to the local storage
         */

    }

    function handleQuit(username){
        setUsers(lastUsers => lastUsers.filter(u => u.username !== username));
    }

    function handleRestart(User){
        /**
         * 1. access local storage and add the current step to local storage
         * 2. setUsers of the current user to a clean json object
         */
    }


    return (
        <div>
            {users.map((c, index) => (
                <SingleGameBoard
                    key={index}
                    user={c}
                    onQuit={handleQuit}
                    onStep={handleStep}
                    onWinning={handleWinning}
                />
            ))}
        </div>
    );
}


export default FullGameBoard;
