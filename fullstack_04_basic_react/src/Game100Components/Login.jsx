import React from 'react';
import { useState } from 'react';
import Game100 from './Game100';

const Login = () => {

    const [nameUser, setNameUser] = useState('');
    const [message, setMessage] = useState('');
    const [successfulUsers, setSuccessfulUsers] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);


    //to check
    const users = ['user1', 'user2', 'user3'];
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    const handleChange = (e) => {
        setNameUser(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        if (registeredUsers.includes(nameUser)) {
            setMessage('Signed up successfully');
            setSuccessfulUsers([...successfulUsers, nameUser]);
        } else {
            setMessage('Registration is required');
        }
    };

    const handleStartGame = () => {
        if (nameUser !== '' && successfulUsers.length > 0) {
            setGameStarted(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User name:
                    <input type="text" value={nameUser} onChange={handleChange} />
                </label>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}

            <textarea
                rows="4"
                cols="50"
                readOnly
                value={successfulUsers.join('\n')}
                placeholder="Successfully registered users will appear here..."
            />
            <button onClick={handleStartGame}>Start Game</button>

            {gameStarted && <Game100 users={users} />}
        </div>
    );
}

export default Login;
