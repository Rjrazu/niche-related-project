import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WelcomeNote = () => {
    return (
        <div className="mt-5 shadow mb-5 p-1">
            <Container >
                <Row>
                    <Col lg={7}>
                        <h4 className="text-danger">Welcome To Your</h4>
                        <h2>Sky Travel</h2>
                        <p>
                            SkyTravel was founded in 2021 by Raju Ahmed, our current CEO. Initial program versions were designed to handle group quotes across multiple pax ranges. Peter sensed the potential to support growth in tourism at a time when cheap computing was set to transform the industry. Since then Peter has travelled the world, learning the industry, developing relationships with clients, and building the organisation of five offices and 80 people that make up today’s Tourplan team of experts. <br /><br /> We are proud to partner with over 370 tour operators and destination management companies around the world. We have adapted and grown with our client base as opportunities have emerged, through changes in the tourism and travel industry and alongside technology advances.
                        </p> <br />
                        <h5 className="text-danger">Raju Ahmed</h5>
                        <h4>CEO, at SkyTravel</h4>
                    </Col>
                    <Col lg={5}>
                        <img className="img-fluid w-100 rounded-3" src="https://www.cancunadventure.net/img/tours/chichen-cenote-private.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WelcomeNote;