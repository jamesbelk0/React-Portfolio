import React from 'react';
import { FaGithub, FaMailBulk, FaLinkedin } from 'react-icons/fa'
import { Image, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';


 

function NavFooter() {

    return (
        <>
        <Navbar bg="myblack"  fixed='bottom' style={{paddingTop: 10, marginTop: 10}}>
                <Container d-inline-block>
                   <Navbar.Brand href="https://www.github.com/jamesbelk0">
                   <FaGithub className="icons" />
                    </Navbar.Brand> 
                    <Navbar.Brand href="mailto:jamesbelk0@gmail.com">
                    <FaMailBulk className="icons" />
                    </Navbar.Brand> 
                    <Navbar.Brand href="https://www.github.com/jamesbelk0">
                    <FaLinkedin className="icons" />
                    </Navbar.Brand> 
                </Container>
            </Navbar>
        </>
    );
}

export default NavFooter;