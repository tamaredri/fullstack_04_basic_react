import React from 'react';
import { useState } from 'react';
import SingleGameBoard from './SingleGameBoard';

const FullGameBoard = (props) => {
    const [playingUsers, setPlayingUsers] = useState(loadPlayers());

    function newUser(user){
        return ({
            username: user.username,
            number: Math.floor(Math.random() * 100),
            steps: 0,
            fullSteps: user.steps
        });
    }

    function loadPlayers() {
        let users = JSON.parse(localStorage.getItem('Game100')) || [];
        return props.registeredUsers.map(username => {
            let user = users.find(storedUser => storedUser.username === username);
            return newUser(user);
        });
    }
    // add an isActive prop to mark the player with the active board - using an index

    function handleStep(user) {
        setPlayingUsers(lastUsers => {
            let userIndex = lastUsers.findIndex(u => u.username === user.username);
            const updatedUsers = [...lastUsers];
            updatedUsers[userIndex] = user;
            return updatedUsers;
        });
    }

    function handleWinning(username, step) {
        const users = JSON.parse(localStorage.getItem('Game100')) || [];
        const winningUserIndex = users.findIndex(storedUser => storedUser.username === username);

        const updatedUsers = [...users];
        updatedUsers[winningUserIndex] = {
            username: username, 
            steps: [...users[winningUserIndex].steps, step]
        };

        localStorage.setItem('Game100', JSON.stringify(updatedUsers));

    }

    function handleQuit(username) {
        setPlayingUsers(lastUsers => lastUsers.filter(u => u.username !== username));
    }

    function handleGameRestart(username) {
        console.log('in game restart');
        setPlayingUsers(u => {
            return u.map(oldUser => {
                if( oldUser.username !== username){
                    return oldUser;
                }

                console.log(oldUser.username, 'reseting game')
                
                const users = JSON.parse(localStorage.getItem('Game100')) || [];
                let storedUser = users.find(storedUser => storedUser.username === username);
                return newUser(storedUser);
            })
        });
    }


    return (
        <div>
            {playingUsers.map((c, index) => (
                <SingleGameBoard
                    key={index}
                    user={c}
                    onQuit={handleQuit}
                    onStep={handleStep}
                    onWinning={handleWinning}
                    onGameRestart={handleGameRestart}
                />
            ))}
        </div>
    );
}


export default FullGameBoard;
