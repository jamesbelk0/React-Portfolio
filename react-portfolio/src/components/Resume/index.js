import React from 'react';

function Resume() {

    return(
        <div>
            <h1 className="myRedHeader">Resume</h1>
            <a href="https://docs.google.com/document/d/1M7IILNV1eWQxrLvA0u-pG2RqxvkTVPOMkmxAHwP6H3c/edit?usp=sharing" download="james-belk-resume">
                <h2 className="myResume"> Click to download my resume!</h2>
            </a>
            <h2>Skilled In:</h2>
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
    );
}

export default Resume;