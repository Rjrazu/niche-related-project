import React from 'react';
import { Col, Container, Nav, NavLink, Row, Tab } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders'
import AddReview from '../AddReview/AddReview';

const GeneralUser = () => {
    const { logOut } = useAuth();
    return (

        <div className="mt-5 mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">My Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Pay Now</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Add a Review</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink onClick={logOut}> Log Out</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <MyOrders></MyOrders>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Payment></Payment>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <AddReview></AddReview>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Container>
            </Tab.Container>
        </div>
    );
};

export default GeneralUser;