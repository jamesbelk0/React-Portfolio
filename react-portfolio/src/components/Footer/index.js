import React from 'react';
import { FaGithub, FaMailBulk, FaLinkedin } from 'react-icons/fa'
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
 

function NavFooter() {

    return (
        <>
        <Navbar bg="myblack"  sticky='bottom'>
                <Container d-inline-block>
                   <Navbar.Brand href="https://www.github.com/jamesbelk0">
                    <img src={ FaGithub} width={30} height={30}  alt="Github" />
                    </Navbar.Brand> 
                    <Navbar.Brand href="mailto:jamesbelk0@gmail.com">
                    <img src={ FaMailBulk} width={30} height={30}  alt="Email" />
                    </Navbar.Brand> 
                    <Navbar.Brand href="https://www.github.com/jamesbelk0">
                    <img src={ FaLinkedin} width={30} height={30}  alt="Linkedin" />
                    </Navbar.Brand> 
                </Container>
            </Navbar>
        </>
    );
}

export default NavFooter;