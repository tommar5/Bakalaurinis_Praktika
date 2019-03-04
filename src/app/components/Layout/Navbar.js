import React from 'react'

import language from "../../../translations/translation"

import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationBar = () => (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home"><b>Go</b>Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home"><FontAwesomeIcon icon="home" /> {language.nav.button.home}</Nav.Link>
                <Nav.Link href="#features"><FontAwesomeIcon icon="map-marked-alt" /> {language.nav.button.exploreMap}</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="primary" size="sm" style={{marginRight: 5}}>{language.nav.button.login}</Button>
                <Button variant="outline-light" size="sm">{language.nav.button.register}</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar;