import React from 'react';
import classes from './modules_css/Registration.module.css';

const Login = (props) => {

    return (
        <div className={classes.flexConteiner}>
            <form onSubmit={props.onSubmit}>
                <div className={classes.inputDiv}>
                    <label>User name:</label>
                    <input type="text" name="username" />
                </div>

                <div className={classes.signinDiv}>
                    <button type="submit">Login</button>
                    <button type="submit">Signup</button>
                </div>
            </form>
            {props.message && <p>{props.message}</p>}
        </div>
    );
}

export default Login;
