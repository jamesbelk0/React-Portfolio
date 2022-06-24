import React from 'react';
import resume from '../../assets/images/resume.PNG';

function Resume() {

    return (
        <div>
            <h1 className="heroHeader text-center">Resume</h1>
            <div className="hero">
                <img src={resume} alt='profile pic' className="resumePic" />
                <a href="https://docs.google.com/document/d/1M7IILNV1eWQxrLvA0u-pG2RqxvkTVPOMkmxAHwP6H3c/edit?usp=sharing" download="james-belk-resume">
                    <h2 className="myResume"> Click to download my resume!</h2>
                </a>
            </div>
            <div className="hero">
                <h2 className="heroHeader text-center">Skilled In:</h2>
                <div>
                    <div className="flex d-block">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>NoSQL/MySQL</li>
                            <li>MongoDB/GraphQL</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;