import React from "react";
import profile from '../../assets/images/profile.jpg';
import 'bootstrap/dist/css/bootstrap.css';

function About() {

    return (
        <div className="justify-center">
            <h1 className="text-center myRedHeader">About Me</h1>
            <img src={profile} alt='profile pic' className="profilePic" />
                <p className="myRed">
                    Front-end web developer leveraging a background in research and small business management with a passion to utilize this for a more intuitive user experience. My strengths are in my research skills as a former librarian, communication from leading a team of coaches in my own business, and ability to handle stress while still achieving the desired outcome. I recently earned a certificate in full stack development from the University of North Carolina - Charlotte focusing on developing skills in JavaScript, CSS, Node.Js and other responsive web design. For each project the goal is to engage my users for a pleasurable experience. I recently designed a user created blog with a team of 3 to allow users to create guides on whatever they see fit. I am excited to develop my skills and continue to build better experiences on the web.
                </p>
        </div>
    );
}

export default About;