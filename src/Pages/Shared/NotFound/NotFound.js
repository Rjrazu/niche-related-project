import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const NotFound = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/home`);
    }

    return (
        <div className="container mb-5 mt-5 text-center">
            <img src="https://lnfnunes.github.io/404-PageNotFound/dist/img/logo.png" alt="" /> <br />
            <Button onClick={handleClick}>Back To Home</Button>
        </div>
    );
};

export default NotFound;