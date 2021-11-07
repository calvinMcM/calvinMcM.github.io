import React from "react";

import { Card, Col, Container, Row } from 'react-bootstrap';

export const CodePage: React.FC = props => {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={6}>
                    <AboutThisSite />
                </Col>
                <Col sm={12} md={6}>
                    <WorkCard />
                </Col>
                <Col sm={12} md={6}>
                    <Opinions />
                </Col>
            </Row>
        </Container>
    )
}

export const AboutThisSite: React.FC = props => {
    return (
        <Card bg="dark" text="light" className="content-card">
            <Card.Header>
                <b>About This Site</b>
            </Card.Header>
            <Card.Body>
                <p>
                    This page is built in React, uses Bootstrap for the CSS, and has Vite on the backend.
                </p>
                <p>
                    Why? Because I like those tools.
                    I've used plenty of other stuff - Webpack, Material Design, jQuery, Redux etc.
                    But these tools seemed appropriate for what's here - and maybe even overkill for this project.
                </p>
            </Card.Body>
        </Card>
    )
}

export const WorkCard: React.FC = props => {
    return (
        <Card bg="dark" text="light" className="content-card">
            <Card.Header>
                <b>Work</b>
            </Card.Header>
            <Card.Body>
                <p>
                    I'm a full-stack engineer by trade.
                </p>
                <p>
                    I've built a lot of stuff - some for public-facing things like&nbsp;
                    <a href="https://fhtl.byu.edu" target="_blank">family history</a> or <a href="https://lucid.co" target="_blank"> previous jobs</a>.
                    I also do some internal tools stuff for my current job.
                </p>
                <p>
                    I graduated with an emphasis in animation, which was mostly in game design at BYU, and mostly dealing with proceduralism in asset creation.
                    I haven't done it professionally, but like to build little games and stuff in my spare time. Mostly don't go anywhere, like most side projects.
                </p>
                <p>Frameworks/Tools of Choice</p>
                <ul>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>NodeJS</li>
                    <li>Redux</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </Card.Body>
            <Card.Footer>
                <a href="/public/Calvin_McMurray_Resume_2021.pdf" download className="btn btn-small btn-danger">Resume</a>
            </Card.Footer>
        </Card>
    )
}

export const Opinions: React.FC = props => {
    return (
        <Card bg="dark" text="light" className="content-card">
            <Card.Header>
                <b>Opinions</b>
            </Card.Header>
            <Card.Body>
                <p>
                    Here's an unsolicited rant about the things I like/don't like/think about/wish I knew more about.
                </p>
                <Section label="TypeScript">
                    <p>
                        TypeScript is better than JavaScript.
                    </p>
                    <p>
                        TypeScript is the coolest front-end (web) language I've seen. The typing is phenomenal,
                        the support is abundant, and the language fixes some things about JS that I haven't always loved.
                        Transpiling is annoying to a lot of people - I've been annoyed with it myself at times. But I think
                        it's a good way to ensure compatibility with the JS community. Honestly, I'd like to see more WASM
                        transpiling, but since I haven't really done anything with WASM myself, I can't complain too loudly.
                    </p>
                </Section>
                <Section label="AR/VR">
                    <p>
                        I've not got a lot of experience here either, but I think AR will win the final victory for the sector,
                        with VR trailing along behind it for specialty products and gaming.
                    </p>
                    <p>
                        I'd love to see an AR headset that replaces the traditional monitor. If I have to spend $200-300 on a screen,
                        I'd rather pick up a set of glasses that shows 2-3 screens in AR wherever I am. I'm a fidget-er, so I change
                        posture and positions a lot. A set of glasses that replace all monitors would be super handy. It's only AR
                        in that it involves image projection - I don't need immersion or fancy curved spaces - just give me the screens.
                    </p>
                    <p>
                        Metaverse is a new topic lately. I think the Metaverse can happen, but I don't think Facebook will make it.
                        The Metaverse as facebook describes brings users into their space - their content, their controls, their power.
                        I think the Metaverse is going to be more successful going the other way - provide interest and value, and let
                        the users engage with each other. Get out of the way.
                    </p>
                </Section>
                <Section label="Open Source">
                    <p>
                        I am a proud supporter of open source software and, like many, have never committed any. But if I do eventually
                        get a game published or put out into the wild web, I'd like to make both the source code and the images open
                        source/creative commons. I think that there is great value in a community of sharing and borrowing and not
                        getting too caught up in the "hey, that's mine!" game where it makes sense.

                        My page and games are even using some of that type of thing. I've been playing around with modifying tiles/tilesets
                        from <a href="https://opengameart.org/art-search?keys=LPC">OGA's LCP collection</a>, and have been falling in love
                        with <a href="http://kenney.nl">Kenney's stuff.</a> <a href="https://www.mapeditor.org/">Tiled</a> is another
                        phenomenal project I've used and would shout out here about for indie game devs. I've built some fun toys with that
                        in both professional and family projects.

                        <a href="public/sheets-credits.csv" download>Download LCP Image Credits</a>
                    </p>
                </Section>
            </Card.Body>
        </Card>
    )
}
export const Section: React.FC<{ label: string }> = props => {
    return (
        <>
            <h4>{props.label}</h4>
            <>
            {props.children}
            </>
        </>
    )
}