import React from 'react';

const RegisterForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Username"></input>
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password"></input>
                <label htmlFor="confirmPassword">Password Confirmation</label>
                <input type="password" placeholder="Password Confirmation"></input>
                <input type="submit" value="Login"></input>
            </form>
            
        </div>
    );
};

export default RegisterForm;