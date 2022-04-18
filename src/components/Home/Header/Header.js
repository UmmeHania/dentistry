import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo2 from '../../Assets/logo2.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo2} height="90px" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink
                                className="link"
                                to="/"

                            >
                                HOME
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/blogs"

                            >
                                BLOGS
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/about"

                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/checkout"

                            >
                                CHECKOUT
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/register"

                            >
                                REGISTER
                            </NavLink>
                            <NavLink
                                className="link"
                                to="/login"

                            >
                                LOGIN
                            </NavLink>
                            {/* {
                                user.displayName && <h5 className="text-white">{user?.displayName}</h5>
                            }

                            {
                                user?.email ? <NavLink
                                    className="link"
                                    to="/login"
                                 
                                >
                                    <Button onClick={LogOut}>LOGOUT</Button>
                                </NavLink> :
                                    <NavLink
                                        className="link"
                                        to="/login"
                                       
                                    >
                                        LOGIN
                                    </NavLink>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;