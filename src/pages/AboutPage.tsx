import React from "react";

import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export const AboutPage: React.FC = props => {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} md={6}>
                    <AboutThisSite />
                </Col>
                <Col sm={12} md={6}>
                    <ChurchCard />
                </Col>
                <Col sm={12} md={6}>
                    <InterestCard />
                </Col>
            </Row>
        </Container>
    )
}

export const AboutThisSite: React.FC = props => {
    return (
        <Card bg="dark" text="light" className="content-card">
            <Card.Header>
                <b>Family</b>
            </Card.Header>
            <Card.Img src="img/Wedding.jpg" aria-placeholder="Wedding Photo"></Card.Img>
            <Card.Body>
                My wife Emmalee and I were sealed for time and all eternity in the Las Vegas Temple in April of 2016. She is the love of my life, my trusted confidant, and my
                daily dose of inspiration.
            </Card.Body>
            <Card.Img src="img/Fam.jpg" aria-placeholder="Family Photo"></Card.Img>
            <Card.Body>
                In 2020, we welcomed our son, Lincoln to the family. He's a handful, but boy is he cute. Favorite words currently include "w<i>O</i>w!" and "Eeew!"
            </Card.Body>
        </Card>
    )
}

export const ChurchCard: React.FC = props => {
    return (
        <Card bg="dark" text="light" className="content-card">
            <Card.Header>
                <b>Faith</b>
            </Card.Header>
            <Card.Body>
                <p>
                    I am a member of the Church of Jesus Christ of Latter-day Saints
                </p>
                <p>
                    As a Christian, I love and revere Jesus Christ. I strive to be more like him every day of my life. I often fall short of that lofty goal, but I
                    fundamentally believe in the Savior's gospel of repentance and keep trying.
                </p>
                <p>
                    I believe in a world that is free through Christ. I believe strongly in keeping the Savior's commandments as a means of establishing global peace
                    and prosperity. In this polarized world of politics, I believe in a Savior who accepts you as you are, but expects that we should not be complacent
                    with that. Where others perceive or even use "faith" as a source of hatred, I believe that loving our neighbor is second only to loving the God
                    who created our neighbors as well as us.
                </p>
                <p>
                    Of particular note, I believe that the power of God has been given to people on the earth. My wife and I were Sealed by the Savior's power in a
                    holy temple. In addition to being a civil or legal marriage, we believe that our marriage and our family is also "sealed" or recognized in heaven
                    because of that sacred and wonderful authorithy from God through his modern prophets. 
                </p>
                <p>I could write a million pages of things that our church practices and that are dear to my heart. Instead, I'll simply say that if you'd like to
                    know more about the church or my beliefs, it's all on the <a href="https://www.churchofjesuschrist.org/comeuntochrist">Church Website</a>, and 
                    I'm happy to talk as well.
                </p>
            </Card.Body>
            <Card.Footer>
                <a href="/Calvin_McMurray_Resume_2021.pdf" download className="btn btn-small btn-danger">Resume</a>
            </Card.Footer>
        </Card>
    )
}

export const InterestCard: React.FC = props => {
    return (
        <Card bg="dark" text="light" className="content-card">
            <Card.Header>
                <b>Interests</b>
            </Card.Header>
            <Card.Body>
                <p>
                    I'm really into a lot of things. I love Legos, and have since I was a kid. I'm also a pretty big Nintendo guy, so I'm down for some
                    Smash Brothers or roaming through Hyrule.
                </p>
                <p>
                    I'm also into game design. I'm obscurely published - a Steam game called <a href="https://store.steampowered.com/app/954070/Beat_Boxers/">BeatBoxers</a>
                    and a <a href="https://recordquest.familytech.byu.edu/" target="_blank">family- history-themed adventure/RPG</a>. but I like to fool around.
                    I liked Final Fantasy Tactics and Tactics Ogre as a kid, so I'm kind of in love with the isometric RPG aesthetic, so I've been playing
                    around more formally with some of that stuff. Nothing significant yet, but getting my design and experience goals finalized.
                </p>
                <p>
                    I've also got an interest in 3D printing. I've had mixed success, and mostly print mid-sized things. Mostly stuff off of Thingaverse that I think
                    are cool, but some of my own designs as well. I've got some experience with Maya from my undergrad, did procedural modelling in Houdini for that
                    BeatBoxers project, and mostly do Blender for my stuff on the side.
                </p>
            </Card.Body>
        </Card>
    )
}