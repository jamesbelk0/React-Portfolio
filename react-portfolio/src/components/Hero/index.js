import React from 'react';
import profile from '../../assets/images/profile.jpg';


function Hero() {

    return (
        <div className="vh-100">
            <div className="hero">
                <img src={profile} alt='profile' className="heroPic" />
                <div>
                    <h1 className='heroHeader'>
                        Hello there! My name is James Belk and this is my portfolio!
                    </h1>
                    <p className="myRed">
                        I am a full stack developer with a wide variety of work experience and points of view that lead to a passion for an efficenet user experience. Please click on my "About Me" for a more in-depth history of who I am.
                        <br />
                        For my professional works pelase click on my Projects tab, and for a copy of my resume please click on the resume tab. If there are any questions at all please reach out to me via the contact tab!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;