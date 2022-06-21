import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { AiOutlineGithub } from 'react-icons/ai';
import ShowMeHow from '../../assets/images/puppy1.jpg';
import BudgetTrackerPWA from '../../assets/images/puppy2.jpg';
import Aperitif from '../../assets/images/puppy3.jpg';
import EmployeeTracker from '../../assets/images/puppy4.jpg';


function Projects() {

    return (
        <div>
            <h1>
                Working Projects
            </h1>
            {/* Show Me How */}
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={ShowMeHow} />
                <Card.Body>
                    <Card.Title>Show Me How!</Card.Title>
                    <Card.Text>
                        User created blog with login validation, comment section and custom inputs via the user.
                    </Card.Text>
                    <Card.Link href='https://boiling-fjord-93274.herokuapp.com/'></Card.Link>
                    <Card.Link href='https://github.com/jamesbelk0/Show-Me-How'></Card.Link>
                    <Card.Text>
                        Technolgies Used: Sequelize, Node.js, Handlebars
                    </Card.Text>
                </Card.Body>
                {/* <div className='project-mock'>
                        <a href=''>
                            <img alt="Show-Me-How" src={ShowMeHow} />
                        </a>
                    </div>
                    <div className='project-icon'> */}
                {/* <a href='https://github.com/jamesbelk0/Show-Me-How'>
                            <img src={AiOutlineGithub} alt='Github' />
                        </a>
                        <p>Technolgies Used: Sequelize, Node.js, Handlebars</p>
                    </div> */}
            </Card>
            {/* Budget-Tracker */}
            {/* <div className='portfolio'>
                <div className='project-mock'>
                    <a href='https://obscure-coast-43625.herokuapp.com/'>
                        <img alt="Budget-Tracker" src={BudgetTrackerPWA} />
                    </a>
                </div>
                <div className='project-icon'>
                    <h2> Budget Tracker PWA </h2>
                    <a href='http://github/jamesbelk0/Budget-Tracker-PWA'>
                        <img src={AiOutlineGithub} alt='Github' />
                    </a>
                    <p>Technolgies Used: MongoDb, Node.js, Heroku</p>
                </div>
            </div> */}
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={BudgetTrackerPWA} />
                <Card.Body>
                    <Card.Title>Budget Tracker PWA</Card.Title>
                    <Card.Text>
                        A budget tracker for the user on the road. Allows the user to use the app even while offline.
                    </Card.Text>
                    <Button variant='outline-primary' href='https://obscure-coast-43625.herokuapp.com/'>Deployed App</Button>{' '}
                    <br />
                    <Button variant='outline-primary' href='http://github/jamesbelk0/Budget-Tracker-PWA'></Button>{' '}
                    <Card.Text>
                        Technolgies Used: MongoDb, Node.js, Heroku
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* Employee-Tracker */}
            <div className='portfolio'>
                <div className='project-mock'>
                    <a href='https://obscure-coast-43625.herokuapp.com/'>
                        <img alt="Employee-Tracker" src={EmployeeTracker} />
                    </a>
                </div>
                <div className='project-icon'>
                    <h2> Employee Tracker </h2>
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