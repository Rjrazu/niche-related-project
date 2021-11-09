import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, logOut } = useAuth()
    return (
        <div>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <button onClick={logOut}>Sign Out</button>
        </div>
    );
};

export default Login;