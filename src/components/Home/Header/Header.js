import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import logo1 from '../../Assets/logo1.png'
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo1} height="90px" alt="" /></Navbar.Brand>
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

                            {
                                user ?
                                    <button className='btn btn-primary text-decoration-none ' onClick={handleSignOut}>SIGN OUT</button>
                                    :
                                    <NavLink
                                        className="link"
                                        to="/login"

                                    >
                                        LOGIN
                                    </NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;