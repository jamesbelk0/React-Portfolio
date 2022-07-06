import React from 'react';
import Github from '../../assets/images/social-platforms/github-icon.png'

function Project () {

    return (
        <div name='project'>
            <h1>Working Portfolio</h1>
            {/* Aperitif */}
            <div className='portfolio'>
                <div>
                    <a href='https://jamesbelk0.github.io/Aperitif/'>
                        <img src='' alt='Aperitif'/>
                    </a>
                </div>
                <div>
                    <h2>Aperitif</h2>
                    <a href='http://github/jamesbelk0/Aperitif'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Technology Used: HTML, CSS, REST API, JavaScript</p>
                </div>
            </div>
            {/* Show Me How */}
            <div className='portfolio'>
                <div>
                    <a href='https://boiling-fjord-93274.herokuapp.com/'>
                    <img src='' alt='Show-Me-How'/>
                    </a>
                </div>
                <div>
                    <h2>Show Me How</h2>
                    <a href='https://github.com/jamesbelk0/Show-Me-How'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Technology Used: Node.js, Express.js, Sequelize, Handlebars</p>
                </div>
            </div>
            {/* Budget Tracker PWA */}
            <div className='portfolio'>
                <div>
                    <a href='https://obscure-coast-43625.herokuapp.com/'>
                    <img src='' alt='Budget-Tracker-PWA'/>
                    </a>
                </div>
                <div>
                    <h2>Budget Tracker PWA</h2>
                    <a href='http://github/jamesbelk0/Budget-Tracker-PWA'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Technology Used: Node.js, MongoDB, Heroku, PWA</p>
                </div>
            </div>
            {/* Employee-Tracker */}
            <div className='portfolio'>
                <div>
                    <a href='https://www.youtube.com/watch?v=8ChKWiqj8OI'>
                    <img src='' alt='Employee-Tracker'/>
                    </a>
                </div>
                <div>
                    <h2>MySql Employee-Tracker</h2>
                    <a href='http://github/jamesbelk0/Employee-Tracker'>
                        <img src={Github} alt='Github'></img>
                    </a>
                    <p>Technology Used: Node.js, Inquirer, MySQL</p>
                </div>
            </div>
        </div>
    )
}

export default Project;