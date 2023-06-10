import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="light">
            <Container className="m-0 w-100">
                <Navbar.Brand href="/">Agent Explanation</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;