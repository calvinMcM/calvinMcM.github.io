import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Nav, Navbar, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import { faUser, faCode, faPlaceOfWorship, faHome } from '@fortawesome/free-solid-svg-icons'
import { MainPage } from './pages/MainPage';
import { CodePage } from './pages/CodePage';
import { AboutPage } from './pages/AboutPage';

function App() {
    const [state, setState] = useState({ tab: "home-page" })

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Personal Website</Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <small>Copyright Calvin McMurray, {(new Date()).getFullYear()}</small>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col xs={"auto"} className="sidebar">
                        <div className="sidebar-icon" onClick={() => setState({ tab: "home-page" })}>
                            <FontAwesomeIcon icon={faHome} size={"lg"}></FontAwesomeIcon>
                        </div>
                        <div className="sidebar-icon" onClick={() => setState({ tab: "about-page" })}>
                            <FontAwesomeIcon icon={faUser} size={"lg"}></FontAwesomeIcon>
                        </div>
                        <div className="sidebar-icon" onClick={() => setState({ tab: "code-page" })}>
                            <FontAwesomeIcon icon={faCode} size={"lg"}></FontAwesomeIcon>
                        </div>
                    </Col>
                    <Col className="main-content">
                        <TabContainer activeKey={state.tab}>
                            <TabContent>
                                <TabPane eventKey="home-page">
                                    <MainPage />
                                </TabPane>
                                <TabPane eventKey="about-page">
                                    <AboutPage />
                                </TabPane>
                                <TabPane eventKey="code-page">
                                    <CodePage />
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App
