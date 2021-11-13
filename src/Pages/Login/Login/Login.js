import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="container border mt-4 mb-5">
            <div className="bg-light m-5">
                <h2 className="text-dark  p-2 text-center mb-3">Login Now</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        onBlur={handleOnBlur}
                        type="email"
                        className="form-control w-75 m-2"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    <input
                        onBlur={handleOnBlur}
                        type="password"
                        className="form-control w-75 m-2"
                        placeholder="Password"
                        name="password"
                        required
                    />
                    <input
                        type="submit"
                        className="btn btn-primary m-2"
                        value="Login Now"
                    ></input>
                </form>
                {isLoading && <h6>Loading...</h6>}
                {user?.email && <h6>Login successfully!</h6>}
                {authError && <p>{authError}</p>}
                <div className="mt-4"> <h5 className="d-inline"> Don't Have An Account? Please </h5> <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="success">Register</Button>
                </NavLink></div>
            </div>
        </div >
    );
};

export default Login;