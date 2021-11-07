import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const MainPage: React.FC = props => {
    return (
        <Container fluid className="hero_shot">
            <Row>
                <Col>
                    <br />
                    <h1><img src="public/img/favicon.png"></img> Hi, I'm Calvin McMurray,</h1>
                    <br />
                    <br />
                    <Container>
                        <Row>
                            <Col sm={{ span: 4 }}><h2>Husband</h2></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={{ offset: 2, span: 4 }}><h2>Father</h2></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={{ offset: 4, span: 4 }}><h2>Developer</h2></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}