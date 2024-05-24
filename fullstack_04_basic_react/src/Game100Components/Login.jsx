import React from 'react';
import { useState } from 'react';
import Game100 from './Game100';
// let users = JSON.parse(localStorage.getItem('users')) || [];

const Login = () => {

    const [nameUser, setNameUser] = useState('');
    const [message, setMessage] = useState('');
    const [successfulUsers, setSuccessfulUsers] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);


    //to check
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const ourUsers = [{ username: 'User1', steps: [2, 5, 7] },
    { username: 'User2', steps: [9, 7, 9] }]
    localStorage.setItem('ourUsers', JSON.stringify(users));
    

    const handleChange = (e) => {
        setNameUser(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        //username=e.target.value;
        //const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const user = users.find(user => user.username === nameUser);

        if (user) {
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
