import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/packages`);
    }

    return (
        <Container fluid >
            <Row className="d-flex banner align-items-center justify-content-center">
                <Col sm={12} md={6} lg={6}>
                </Col>
                <Col sm={12} md={6} lg={6} className="shadow rounded-3">
                    <h1 className="title">
                        SkyTravel <br /> BD's No.1 Travel Agency!
                    </h1>
                    <p className="text-white mt-3">
                        We are proud to partner with over 370 tour operators and destination management companies around the world.
                    </p>
                    <button onClick={handleClick} className="mt-3 contact-btn">Recent Packages</button>
                </Col>
            </Row>
        </Container>


    );
};

export default Banner;