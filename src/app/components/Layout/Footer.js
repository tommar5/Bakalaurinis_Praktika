import React from 'react'

import language from "../../../translations/translation"

import { Navbar, Container, Form, DropdownButton, Dropdown, ButtonToolbar, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../styles/Footer.css'

const FooterBar = () => (
    <Container>
        <Row>
            <Col>
                <Navbar  variant="light" expand="sm" sticky="bottom" style={{borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColore: "#dadce0" }}>
                    <Navbar.Brand href="#home"><b>Go</b>Travel</Navbar.Brand>
                    <Form inline>
                        <ButtonToolbar>
                            <DropdownButton
                                size = "sm"
                                drop="up"
                                variant="light"
                                title={<div style={{float: "left"}}>
                                    <FontAwesomeIcon icon="globe-europe" />
                                    <span> {language.footer.button.language} ·</span>
                                    <span> {language.footer.button.country}</span>
                                    </div>}
                                id={`dropdown-button-drop-up`}
                                key={`up`}
                            >
                                <Dropdown.Header><b>{language.footer.label.changeLanguage}</b></Dropdown.Header>
                                <Dropdown.Item eventKey="1">English</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Lietuvių</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Русский</Dropdown.Item>
                            </DropdownButton>
                        </ButtonToolbar>
                        <ButtonToolbar>
                            <DropdownButton
                                size = "sm"
                                drop="up"
                                variant="light"
                                title={<div style={{float: "left"}}>
                                    <span> {language.footer.button.country} ·</span>
                                    <span> Lithuania</span>
                                    </div>}
                                id={`dropdown-button-drop-up`}
                                key={`up`}
                            >
                                <Dropdown.Header><b>{language.footer.label.changeCountry}</b></Dropdown.Header>
                                <Dropdown.Item eventKey="1">Lithuania</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Latvia</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Estonia</Dropdown.Item>
                            </DropdownButton>
                        </ButtonToolbar>
                        <ButtonToolbar>
                            <DropdownButton
                                size = "sm"
                                drop="up"
                                variant="light"
                                title={<div style={{float: "left"}}>
                                    <span> {language.footer.button.currency} ·</span>
                                    <span> EUR</span>
                                    </div>}
                                id={`dropdown-button-drop-up`}
                                key={`up`}
                            >
                                <Dropdown.Header><b>{language.footer.label.changeCurrency}</b></Dropdown.Header>
                                <Dropdown.Item eventKey="1">Euro Eur</Dropdown.Item>
                                <Dropdown.Item eventKey="2">US Dollar USD</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Polish Zloty PLN</Dropdown.Item>
                            </DropdownButton>
                        </ButtonToolbar>
                    </Form>
                </Navbar>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
            <div style={{float: "left"}}>
                <span>Find the cheapest and best flights, hotels and cruises for you.</span>
            </div>
            </Col>
        </Row>
    </Container>
)

export default FooterBar;