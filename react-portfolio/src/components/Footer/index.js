import React from 'react';
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'

function Footer() {

    return (
        <footer>
            <ul>
                <li>
                    <a href='https://github.com/jamesbelk0'>
                        <img src={ AiOutlineGithub } alt='Github' />
                    </a>
                </li>
                <li>
                    <a href='mailto: jamesbelk0@gmail.com'>
                        <img src={ AiOutlineMail } alt='Email' />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/jamesbelk0'>
                        <img src={ AiOutlineLinkedin } alt='LinkedIn' />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;