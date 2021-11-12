import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { admin, user, logOut } = useAuth();
    const history = useHistory();

    const handleLoginButton = () => {
        history.push('/login')
    }

    const logo = 'https://i.ibb.co/3m61xyh/logo.jpg';
    const logoStyle = {
        width: '160px',
        borderRadius: '10px'
    }
    const navStyle = {
        color: 'cyan',
        fontWeight: '500',
        fontSize: '18px',
        textDecoration: 'none',
        marginRight: '15px'
    }
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home"><img style={logoStyle} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className="bg-white" aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto d-flex justify-content-center align-items-center my-3 my-lg-0"
                            style={{ maxHeight: '250px' }}
                            navbarScroll
                        >
                            <NavLink
                                to="/home"
                                style={navStyle}
                                activeStyle={activeStyle}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/products"
                                style={navStyle}
                                activeStyle={activeStyle}
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/feedback"
                                style={navStyle}
                                activeStyle={activeStyle}
                            >
                                Feedback
                            </NavLink>
                            <NavLink
                                to="/contact"
                                style={navStyle}
                                activeStyle={activeStyle}
                            >
                                Contact
                            </NavLink>

                            {user?.uid ? <NavLink
                                to="/my_orders"
                                style={navStyle}
                                activeStyle={activeStyle}
                            >
                                My Orders
                            </NavLink>
                                : <></>}

                            {admin && <NavLink
                                to="/admin"
                                style={navStyle}
                                activeStyle={activeStyle}
                            >
                                Admin Panel
                            </NavLink>}

                            {user?.uid ? <div className="d-flex justify-content-center align-items-center">
                                <h6 className="d-inline me-2"><i className="bg-danger fas fa-address-card"></i> <span className="text-white"> {user?.displayName}</span> </h6>
                                <Button onClick={logOut} variant="danger">Logout</Button>
                            </div>
                                :
                                <Button onClick={handleLoginButton} variant="success">Login</Button>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;