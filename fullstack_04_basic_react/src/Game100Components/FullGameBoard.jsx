import React from 'react';
import { useState } from 'react';
import SingleGameBoard from './SingleGameBoard';

const FullGameBoard = (props) => {
    const [playingUsers, setPlayingUsers] = useState(loadPlayers());
    const [activePlayer, setActivePlayer] = useState(0);

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

    function handleStep(user) {
        setPlayingUsers(lastUsers => {
            let userIndex = lastUsers.findIndex(u => u.username === user.username);
            const updatedUsers = [...lastUsers];
            updatedUsers[userIndex] = user;
            return updatedUsers;
        });

    }

    function handleWinning(username, newNumberOfSteps) {
        const users = JSON.parse(localStorage.getItem('Game100')) || [];
        const winningUserIndex = users.findIndex(storedUser => storedUser.username === username);

        const updatedUsers = [...users];
        updatedUsers[winningUserIndex] = {
            username: username, 
            steps: [...users[winningUserIndex].steps, newNumberOfSteps]
        };

        localStorage.setItem('Game100', JSON.stringify(updatedUsers));
    }

    function handleQuit(username) {
        setPlayingUsers(lastUsers => lastUsers.filter(u => u.username !== username));
        setActivePlayer(a => (a) % (playingUsers.length - 1));
    }

    function handleGameRestart(username) {
        setPlayingUsers(u => {
            return u.map(oldUser => {
                if(oldUser.username !== username){
                    return oldUser;
                }

                const users = JSON.parse(localStorage.getItem('Game100')) || [];
                let storedUser = users.find(storedUser => storedUser.username === username);
                return newUser(storedUser);
            })
        });
        setActivePlayer(a => (a + 1) % (playingUsers.length));
    }


    return (
        <div>
            {playingUsers.map((c, index) => {
                return (
                <SingleGameBoard
                    key={index}
                    user={c}
                    isActive={index === activePlayer}
                    onQuit={handleQuit}
                    onStep={handleStep}
                    onFinishedPlaying={() =>         
                        setActivePlayer(a => (a + 1) % (playingUsers.length))
                    }
                    onWinning={handleWinning}
                    onGameRestart={handleGameRestart}
                />
            )})}
        </div>
    );
}


export default FullGameBoard;
