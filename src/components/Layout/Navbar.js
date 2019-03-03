import React from 'react'

import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationBar = () => (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home"><b>Go</b>Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home"><FontAwesomeIcon icon="home" /> Home</Nav.Link>
                <Nav.Link href="#features"><FontAwesomeIcon icon="map-marked-alt" /> Explore Map</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="primary" size="sm" style={{marginRight: 5}}>Login</Button>
                <Button variant="outline-light" size="sm">Register</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar;