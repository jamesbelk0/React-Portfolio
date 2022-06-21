import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../../assets/images/profile.jpg';


function Hero() {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    <Image src={profile} alt='profile' fluid />
                </Col>
            </Row>
            <Row>
                <Col xs lg="2" className>
                    Hello there! My name is James Belk and this is my portfolio!
                </Col>
                <Col md="auto">
                    I am a full stack developer with a wide variety of work experience and points of view that lead to a passion for an efficenet user experience. Please click on my "About Me" for a more in-depth history of who I am. For my professional works pelase click on my Projects tab, and for a copy of my resume please click on the resume tab. If there are any questions at all please reach out to me via the contact tab!
                </Col>
            </Row>
            {/* <div className='justify-content-center'>
                
            </div>
            <div>
                <h1>Hello there! My name is James Belk and this is my portfolio!</h1>
                <p>I am a full stack developer with a wide variety of work experience and points of view that lead to a passion for an efficenet user experience. Please click on my "About Me" for a more in-depth history of who I am. For my professional works pelase click on my Projects tab, and for a copy of my resume please click on the resume tab. If there are any questions at all please reach out to me via the contact tab!</p>
            </div> */}
        </Container>
    );
}

export default Hero;