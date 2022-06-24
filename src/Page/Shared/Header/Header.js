import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className='color-bg' variant="light">
                <Container >
                    <Navbar.Brand className='text-white' as={Link} to="/">Dr. Azaz Ahmed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                            {user ?
                                <button onClick={handleSignOut} className='btn bg-white color'>Sign Out</button>
                                :
                                <Nav.Link className='text-white' as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;