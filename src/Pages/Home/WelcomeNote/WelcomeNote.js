import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WelcomeNote = () => {
    return (
        <div className="mt-5 shadow mb-5 p-1">
            <Container >
                <Row>
                    <Col lg={7}>
                        <h4 className="text-danger">Welcome To</h4>
                        <h2>Drone Hub!</h2>
                        <p>
                            We have developed a hub for drones to enable fully automated missions, conduct on-demand tasks, and fly intelligently to collect aerial data, improve security and visual data using autonomous drones in complex industrial environments.
                            <br /><br />
                            Dronehub helps companies with large infrastructure to reduce monitoring costs, get real-time aerial data, and exclude the human factor.
                        </p> <br />
                        <h5 className="text-danger">Raju Ahmed</h5>
                        <h4>CEO, at DroneHub!</h4>
                    </Col>
                    <Col lg={5}>
                        <img className="img-fluid w-100 rounded-3" src="https://i.ibb.co/rM0pDhZ/maxresdefault.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WelcomeNote;