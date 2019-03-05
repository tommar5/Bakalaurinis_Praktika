import React from 'react'

import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap'

const ItinerarySearch = () => (
    <div>
        <div>
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Dropdown placeholder='Select Friend' fluid selection options="test" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                    </Col>
                    <Col>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
                    </Col>
                </Row>
                <Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Row>
            </Form>
        </div>
    </div>
)

export default ItinerarySearch;