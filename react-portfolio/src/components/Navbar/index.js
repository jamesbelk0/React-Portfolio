import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/black-grey-logo.png';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';


function Navigation() {

    return (
        <div>
            <Navbar bg="myblack" sticky='top' expand="lg" className="gap-3 px-3">
                <Navbar.Brand href="https://jamesbelk0.github.io/React-Portfolio/">
                    <img src={logo}  height={100} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="flex-grow-1 justify-content-evenly bg-myblack">
                    {/* About Me */}
                    <Nav.Item>
                        <Link to='/about' className="links">
                            About Me
                        </Link>
                    </Nav.Item>
                    {/* Projects */}
                    <Nav.Item>
                        <Link to='/projects' className="links">
                            Portfolio
                        </Link>
                    </Nav.Item>
                    {/* Resume */}
                    <Nav.Item>
                        <Link to='/resume' className="links">
                            Resume
                        </Link>
                    </Nav.Item>
                    {/* Contact */}
                    <Nav.Item>
                        <Link to='/contact' className="links">
                            Contact
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;