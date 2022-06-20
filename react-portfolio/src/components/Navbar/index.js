import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/white-black.png';


function Nav() {

    return (
        <nav>
            <im src={ logo } alt='logo' />
            <ul>
                {/* Home */}
                <li>
                    <Link to='/'
                    className={({ isActive }) => (isActive ? "tab-active": "tab")}>
                        Home
                    </Link>
                </li>
                {/* About Me */}
                <Link to='/aboutme'
                className={({ isActive }) => (isActive ? "tab-active" : "tab")}>
                    About Me
                </Link>
                {/* Projects */}
                <li>
                    <Link to='projects'
                    className={({ isActive}) => (isActive ? "tab-active" : "tab")}>
                        Portfolio
                    </Link>
                </li>
                {/* Resume */}
                <li>
                    <Link to='resume'
                    className={({ isActive}) => (isActive ? "tab-active" : "tab")}>
                        Resume
                    </Link>
                </li>
                {/* Contact */}
                <li>
                    <Link to='contact'
                    className={({ isActive}) => (isActive ? "tab-active" : "tab")}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;