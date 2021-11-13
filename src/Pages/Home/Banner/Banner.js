import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/products`);
    }

    return (
        <Container fluid >
            <Row className="d-flex banner align-items-center justify-content-center">
                <Col sm={12} md={6} lg={6}>
                </Col>
                <Col sm={12} md={6} lg={6} className="shadow rounded-3">
                    <h1 className="title">
                        DroneHub! <br /> Find Your Favorite Drone!
                    </h1>
                    <p className="text-white mt-3">
                        Dronehub helps companies with large infrastructure to reduce monitoring costs, get real-time aerial data, and exclude the human factor.
                    </p>
                    <button onClick={handleClick} className="mt-3 contact-btn">Products</button>
                </Col>
            </Row>
        </Container>


    );
};

export default Banner;