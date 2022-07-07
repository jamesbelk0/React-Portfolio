import React from 'react';
import resume from '../../assets/images/ResumeJuly';
import { DiMongodb, DiMysql, DiReact, DiHtml5, DiCss3, DiJsBadge, DiNodejs } from 'react-icons/di';
import { GrGraphQl } from "react-icons/gr";
function Resume() {

    return (
        <div className="vh-100">
            <h1 className="heroHeader text-center">Resume</h1>

            <a className="myResume text-center" href={resume} download="james-belk-resume">
                <h2> Click to download my resume!</h2>
            </a>

            <div className="resumeImage" >
                <img src={resume} alt='profile pic' className="resumePic" />
            </div>

            <div className="hero">
                <h2 className="heroHeader text-center">Skilled In:</h2>
            </div>

            <div className="myResumeIcon" size={70}>
                <div>
                    <DiHtml5 size={70} />
                </div>
                <div>
                    <DiCss3 size={70} />
                </div>
                <div>
                    <DiJsBadge size={70} />
                </div>
                <div>
                    <DiNodejs size={70} />
                </div>
                <div>
                    <DiMysql size={70} />
                </div>
                <div>
                    <DiMongodb size={70} />
                </div>
                <div>
                    <GrGraphQl size={70} />
                </div>
                <div>
                    <DiReact size={70} />
                </div>
            </div>
        </div>
    );
}

export default Resume;