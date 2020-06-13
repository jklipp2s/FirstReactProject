import React from 'react';

import './Form.css'





function LoginForm() {
    return (
        <div className="formLayout">
            <span className="header">Login</span>
            <div className="gridLayout">
                <span className="username">Username</span>
                <input type="textfield" placeholder="enter your username" />
                <span className="password">Password</span>
                <input type ="password" placeholder="enter your password"/>
                <input className="submitButton" type="submit"/>
            </div>

        </div>
    );
}







export default LoginForm;