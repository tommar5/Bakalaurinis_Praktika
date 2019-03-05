import React, { Component } from 'react'

import language from '../../../translations/translation'

import { Container, Row, Col } from 'react-bootstrap'

import '../../styles/HomePage.css'

import Header from './Header'
import ItinerarySearch from './ItinerarySearch'
import TopTravels from './TopTravels'
import MapShow from './MapShow'

class Home extends Component {
    render() {
        return (
            <main>
                <Row>
                    <Col xs={1} md={1}></Col>
                    <Col xs={10} md={10}><Header /></Col>
                    <Col xs={1} md={1}></Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            <ItinerarySearch />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TopTravels />
                        </Col>
                        <Col>
                            <MapShow />
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }
}

export default Home