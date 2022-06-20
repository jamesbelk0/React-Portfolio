import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import ShowMeHow from '../../assets/ShowMeHow.jpg';
import BudgetTrackerPWA from '../../assets/BudgetTrackerPWA.jpg';
import Aperitif from '../../assets/Aperitif.jpg';
import EmployeeTracker from '../../assets/EmployeeTracker.jpg';


    function Projects() {

        return (
            <div>
                <h1>
                    Working Projects
                </h1>
                {/* Show Me How */}
                <div className='portfolio'>
                    <div className='project-mock'>
                        <a href='https://boiling-fjord-93274.herokuapp.com/'>
                            <img alt="Show-Me-How" src={ShowMeHow} />
                        </a>
                    </div>
                    <div className='project-icon'>
                        <h2> Show Me How </h2>
                        <a href='https://github.com/jamesbelk0/Show-Me-How'>
                            <img src={AiOutlineGithub} alt='Github' />
                        </a>
                        <p>Technolgies Used: Sequelize, Node.js, Handlebars</p>
                    </div>
                </div>
                {/* Budget-Tracker */}
                <div className='portfolio'>
                    <div className='project-mock'>
                        <a href='https://obscure-coast-43625.herokuapp.com/'>
                            <img alt="Budget-Tracker" src={BudgetTrackerPWA} />
                        </a>
                    </div>
                    <div className='project-icon'>
                        <h2> Show Me How </h2>
                        <a href='http://github/jamesbelk0/Budget-Tracker-PWA'>
                            <img src={AiOutlineGithub} alt='Github' />
                        </a>
                        <p>Technolgies Used: MongoDb, Node.js, Heroku</p>
                    </div>
                </div>
            {/* Employee-Tracker */}
                <div className='portfolio'>
                    <div className='project-mock'>
                        <a href='https://obscure-coast-43625.herokuapp.com/'>
                            <img alt="Employee-Tracker" src={EmployeeTracker} />
                        </a>
                    </div>
                    <div className='project-icon'>
                        <h2> Show Me How </h2>
                        <a href='http://github/jamesbelk0/Employee-Tracker'>
                            <img src={AiOutlineGithub} alt='Github' />
                        </a>
                        <p>Technolgies Used: Node.js, Express.js, Inquirer</p>
                    </div>
                </div>
            {/* Aperitif */}
                <div className='portfolio'>
                    <div className='project-mock'>
                        <a href='https://jamesbelk0.github.io/Aperitif/'>
                            <img alt="Aperitif" src={Aperitif} />
                        </a>
                    </div>
                    <div className='project-icon'>
                        <h2> Aperitif </h2>
                        <a href='http://github/jamesbelk0/Aperitif'>
                            <img src={AiOutlineGithub} alt='Github' />
                        </a>
                        <p>Technolgies Used: HTML, CSS, JavaScript(API)</p>
                    </div>
                </div>
            </div>
        );
    }

export default Projects;