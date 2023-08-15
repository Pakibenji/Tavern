import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Username"></input>
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password"></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
};

export default LoginForm;