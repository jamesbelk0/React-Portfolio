import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AiOutlineGithub } from 'react-icons/ai';


function Projects() {

    const cardInfo = [
        { 
            image: require("../../assets/images/puppy1.jpg"), 
            title: "Show Me How", 
            text: "User created blog with login validation, comment section and custom inputs via the user.", 
            deploy: "https://boiling-fjord-93274.herokuapp.com/",
            github:"https://www.github.com/jamesbelk0/Show-Me-How", 
            tech: "Technolgies Used: Sequelize, Node.js, Handlebars"
        },
        { 
            image: require("../../assets/images/puppy2.jpg"), 
            title: "Budget Tracker", 
            text: "A budget tracker for the user on the road. Allows the user to use the app even while offline.", 
            deploy: "https://obscure-coast-43625.herokuapp.com/", 
            github:"http://www.github.com/jamesbelk0/Budget-Tracker-PWA",  
            tech:"Technolgies Used: MongoDb, Node.js, Heroku"
        },
        { 
            image: require("../../assets/images/puppy3.jpg"), 
            title: "Aperitif", 
            text: "Simple app that allows the user to search for a bar by zip-code with any information needed to find the location. There is also a randomized dad joke generated each time you reload the page.", 
            deploy: "https://jamesbelk0.github.io/Aperitif/", 
            github:"http://github/jamesbelk0/Aperitif", 
            tech:"Technolgies Used: HTML, CSS, JavaScript(API)"
        },
        { 
            image: require("../../assets/images/puppy4.jpg"), 
            title: "Employee Tracker", 
            text:"Using MySQL create an employee tracker that can add, remove or update different variables that relate to a business.",
            github: "http://www.github.com/jamesbelk0/Employee-Tracker", 
            deploy: "https://obscure-coast-43625.herokuapp.com/",
            tech:"Technolgies Used:  Node.js, Express.js, Inquirer"
        },
        { 
            image: require("../../assets/images/puppy4.jpg"), 
            title: "Book Search Engine", 
            text:"Using the full MERN Stack, create an app that allows a user to search for books, save their favorite (or remove them) for an easy to find experience.",
            github: "http://www.github.com/jamesbelk0/Book-Search-Library", 
            deploy: "Link to Deployed Application (TBD)",
            tech:"Technolgies Used: GraphQL, React, MongoDB, Node.js/Express.js, Google Books API"
        }
    ];

    const renderCard = (card, index) => {
        return (
            <>
                <div className="box">
                    <a href={card.deploy}>
                        <img src={card.image} className="image-size" />
                    </a>
                    <h2 className="cardHeader">{card.title}</h2>
                    <p className="myRed">{card.text}</p>
                    <a href={card.github}>
                        <img src={AiOutlineGithub} alt='Github' />
                    </a>
                    <p className="myRed">{card.tech}</p>
                </div>
            </>
        );
    };

return (
    <div className="vh-100">
        <h1 className="heroHeader">
             Working Projects
        </h1>
        <div className="grid">
            {cardInfo.map(renderCard)}
     </div>
    </div>
)
}
    
export default Projects;

