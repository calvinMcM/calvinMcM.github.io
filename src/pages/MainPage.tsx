import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Me from "../img/favicon.png"
import Tactics from "../img/SampleShot.png"

export const MainPage: React.FC = props => {
    return (
        <Container fluid>
            <div className="hero_shot">
                <Image src={Tactics}></Image>
            </div>
            <Row>
                <Col>
                    <br />
                    <h1><img src={Me}></img> Hi, I'm Calvin McMurray,</h1>
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