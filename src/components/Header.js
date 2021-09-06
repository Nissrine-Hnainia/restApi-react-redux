import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Link to="/" className="link">Home</Link>
            <Link to="/users" className="link">Users</Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
