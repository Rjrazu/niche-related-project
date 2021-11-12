import React from 'react';
import { Col, Container, Nav, NavLink, Row, Tab, } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProducts from '../AddProducts/AddProducts';
import AllOrders from '../AllOrders/AllOrders';

const Admin = () => {
    const { logOut } = useAuth();
    return (

        <div className="mt-5 mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Add a New Package</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Manage All Packages</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Add a Admin</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink onClick={logOut}> Log Out</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <AddProducts></AddProducts>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AllOrders></AllOrders>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <AddAdmin></AddAdmin>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Container>
            </Tab.Container>
        </div>
    );
};

export default Admin;