import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <div className="container border mt-4 mb-5">
            <div className="bg-light m-5">
                <h2 className="text-dark  p-2 text-center mb-3">Register Now</h2>
                <form onSubmit={handleLoginSubmit}>
                    <input
                        onBlur={handleOnBlur}
                        type="text"
                        className="form-control w-75 m-2"
                        placeholder="Name"
                        name="name"
                        required
                    />
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
                        onBlur={handleOnBlur}
                        type="password"
                        className="form-control w-75 m-2"
                        placeholder="Re-Type Password"
                        name="password2"
                        required
                    />
                    <input
                        type="submit"
                        className="btn btn-primary m-2"
                        value="Register"
                    ></input>
                </form>
                {isLoading && <h6>Loading...</h6>}
                {user?.email && <h6>User Created successfully!</h6>}
                {authError && <p>{authError}</p>}
                <div> <h5 className="d-inline"> Already Have An Account? Please </h5> <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="success">Login</Button>
                </NavLink></div>

            </div>
        </div>
    );
};

export default Register;