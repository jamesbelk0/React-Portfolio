import React from 'react';
import { FaGithub, FaMailBulk, FaLinkedin } from 'react-icons/fa'
import { Image, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';


 

function NavFooter() {

    return (
        <>
        <Navbar bg="myblack"  fixed="bottom" className="footer-size">
                <Container d-inline-block className="bg-myblack">
                   <Navbar.Brand href="https://www.github.com/jamesbelk0" className="bg-myblack">
                   <FaGithub className="icons" />
                    </Navbar.Brand> 
                    <Navbar.Brand href="mailto:jamesbelk0@gmail.com" className="bg-myblack">
                    <FaMailBulk className="icons" />
                    </Navbar.Brand> 
                    <Navbar.Brand href="https://www.github.com/jamesbelk0" className="bg-myblack">
                    <FaLinkedin className="icons" />
                    </Navbar.Brand> 
                </Container>
            </Navbar>
        </>
    );
}

export default NavFooter;