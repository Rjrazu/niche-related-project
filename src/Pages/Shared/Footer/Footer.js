import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { useHistory } from 'react-router';

const
    Footer = () => {

        const history = useHistory();

        const handleClick = () => {
            history.push(`/home`);
        }
        return (

            <Container fluid className="  footer text-white">
                <Container>
                    <Row>

                        <Col lg={5}>
                            <p>
                                We have developed a hub for drones to enable fully automated missions, conduct on-demand tasks, and fly intelligently to collect aerial data, improve security and visual data using autonomous drones in complex industrial environments.
                            </p> <br />
                            <button onClick={handleClick} className="btn btn-danger"> Home</button>
                        </Col>

                        <Col lg={3}>
                            <h3>We Provides You</h3> <br />
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Trusted Service</h6>
                            <h6 className="mb-2"> <span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Special Treat With Customer</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span> Comfort Environment</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span><span className="text-danger"></span> Talented Staff</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span><span className="text-danger"></span> Original Products</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-angle-double-right"></i></span><span className="text-danger"></span> Available Replacement Service</h6>
                        </Col>

                        <Col lg={4}>
                            <h3>Contact Us</h3> <br />
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-map-marker-alt"></i></span> Main Branch <br /> Char Shoul Mari, Rowmari, Kurigram</h6>
                            <h6 className="mb-2"> <span className="text-danger"><i className="fas fa-mobile-alt"></i></span> Call us Anytime at: <br /> +880 1303 394250</h6>
                            <h6 className="mb-2"><span className="text-danger"><i className="fas fa-user-injured"></i></span> For Inquiry: <br />info@dronehub.com</h6>
                            <h6 className="mb-2"><span className="text-danger"></span><span className="text-danger"><i className="fas fa-stopwatch"></i></span> Our Timings: <br />Sat-Thurs: 9:00am-7:00pm</h6>
                        </Col>

                    </Row>
                </Container>
            </Container>
        );
    };

export default Footer;