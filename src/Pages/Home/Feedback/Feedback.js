import React from 'react';
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div className="mt-5 mb-5">
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <div className="text-center mb-5">
                            <h4 className="text-danger">Read What Says Our</h4>
                            <h2>HAPPY PATIENTS</h2>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/XsdQFDT/ce586f5f6c34e99c4b1f695a6811dffcd584f949.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=" bg-primary rounded-3">Alamgir Kabir</h3>
                                        <h6>Desirous of doing a Jain pilgrimage tour of Cox's Bazar which has many important Jain temples, I wrote to four tour operators. But only Tour My India replied positively. It was a first for them too, but they took up the challenge and worked out a plan for me.</h6>
                                    </Carousel.Caption>

                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/Tk4QCnt/1200x627-1569603776449.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=" bg-primary rounded-3">Zakir Hossain</h3>
                                        <h6>Thank you very much for all your assistance for my safe trip to Kedarnath. Your driver Mahesh was excellent. Will contact you again for my future trips.!!</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <img
                                        className="d-block w-100"
                                        src="https://i.ibb.co/XWxvqC5/8.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className=" bg-primary rounded-3">Shuvo Ahmed</h3>
                                        <h6>We have just got back from our long holiday around Bangladesh.
                                            Just wanted to say how much we enjoyed our trip' how we felt so looked after and how well our driver Uday took us around.
                                            Many thanks!</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </Col>

                    <Col sm={12} lg={6}>
                        <div className="">
                            <div className="text-center"> <h4 className="text-danger">Feel Free For</h4>
                                <h2>ANY FAQ’S</h2></div>

                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> <h6>I can book all my travel plans online, why use a professional travel planner?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        That may be true if you are looking for a flight to Chicago or a three day Ensenada cruise, but if you really want a great vacation you should get help especially when it does not cost you any more, and in some cases less. There is a difference between a “travel agent” and a “professional travel planner”  You can be a travel agent with no experience and no great knowledge of the travel industry, you just have to work for a company that can book tours, hotels and cruises. A professional travel planner has years of experience and knowledge of different places in the world, hotels, tour companies and cruises that are not necessarily the most common but may be far superior or offer things a little different. The internet is basically nothing but ads for travel.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <h6>Do I have to be rich to travel the world?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        The beauty of travel is that it’s accessible to everyone, in some form. You don't have to go far to experience a new culture. Plus there are several ways to make most flights affordable, whether by being flexible, searching on new websites like Skypicker and Fareness, or just by planning ahead. Know the best time to book a flight: 57 days in advance for domestic flights, 117 for international. Then again, you could just make traveling the world your 9-to-5..
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <h6>Where are the best places to travel alone?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        Well, we certainly don't recommend , where there's an all-but-constant reminder at every juncture that you are alone, a sad friendless figure lurking amid the glowing honeymooners. There are a few places, though, where visiting solo is a bonus, not a burden: notably cruises, yoga retreats, and treks across Bangladesh.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> <h6> Is Bangladesh a good travel destination?</h6> </Accordion.Header>
                                    <Accordion.Body>
                                        One of the best in the world, with a vast variety of destinations clustered together in a single country, from the Cox's Bazar to the Brakkhmaputra. the parched landscapes and Tuscany-like city states in Rangpur or the quiet backwaters of Rajshahi. Here’s some inspiration for planning the perfect first-timer’s trip, or you can pore over the site for our Bd-based magazine.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Feedback;