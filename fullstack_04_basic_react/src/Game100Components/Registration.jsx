import React, { act } from 'react';
import { useState } from 'react';
import classes from './modules_css/Registration.module.css';
import PlayersList from './PlayersList';
import Login from './Login.jsx';



const Registration = (props) => {
    let usernameInput = '';
    const [message, setMessage] = useState('');

    function isExistingUser() {
        let users = JSON.parse(localStorage.getItem('Game100')) || [];
        return users.findIndex(u => u.username === usernameInput) !== -1;
    }

    function storeUser() {
        let users = JSON.parse(localStorage.getItem('Game100')) || [];
        users = [...users, { username: usernameInput, steps: [] }]
        localStorage.setItem('Game100', JSON.stringify(users));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        usernameInput = formData.get('username');
        if (usernameInput === '') {
            setMessage('Enter a username');
        } else {
            const action = e.nativeEvent.submitter.textContent;

            if (action === 'Login') {
                loginUser();
            }
            else {
                signupUser();
            }
        }

    };

    function loginUser() {
        if (props.activeUsers.includes(usernameInput)) {
            setMessage('Already playing');
        } else if (isExistingUser()) {
            props.onActiveUsersChange([...props.activeUsers, usernameInput]);
            setMessage('Loged in successfully');
        } else {
            setMessage('Registration is required');
        }
    }

    function signupUser() {
        if (!isExistingUser()) {
            storeUser();
            props.onActiveUsersChange([...props.activeUsers, usernameInput]);
            setMessage('Signed up successfully. Added to playing users');
        }
        else {
            setMessage('User already exists. Press Login');
        }
    }

    const handleStartGame = () => {
        if (props.activeUsers.length > 0) {
            /** maybe check if the user inside the  */
            props.onRegistrationDone(true);
        }
        else {
            setMessage('No users have registered');
        }
    };

    return (
        <>
            <Login onSubmit={handleSubmit} message={message}/>

            <PlayersList users={props.activeUsers} onStartGame={handleStartGame}/>
        </>
    );
}


export default Registration;
