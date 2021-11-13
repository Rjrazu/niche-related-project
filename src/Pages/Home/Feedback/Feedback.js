import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://warm-crag-33369.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row>
                    <Col sm={12} lg={12}>
                        <div className="text-center mb-5">
                            <h4 className="text-danger">Read What Says Our</h4>
                            <h2>HAPPY Clients</h2>



                            <Carousel>
                                {
                                    reviews.map(review => <Carousel.Item interval={2000}>
                                        <img
                                            className="img-fluid rounded-3"
                                            src="https://i.ibb.co/FJHms9N/feedback.jpg"
                                            alt=""
                                        />
                                        <Carousel.Caption>
                                            <h3 className="">{review.name}</h3>
                                            <h5 className="">Rating -- {review.rate} <i className="fas fa-star text-warning"></i></h5>
                                            <h6>{review.description}</h6>
                                        </Carousel.Caption>

                                    </Carousel.Item>)
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Feedback;