import React from "react";
import Header from "../components/Header";
import { FaLaptopCode } from 'react-icons/fa'
import projectsdata from "./projectsdata";


function Projects() {
    return (
        <div>
            <Header />
            <div className="container projects-intro">
                <div className="row flex-with-center mt-5">
                    <div className="col-md-6 n-box2 px-3 py-5" data-aos='fade-down'>
                        <div>
                            <h1 className="font-bold">Projects</h1>
                            <p className="font-bold">
                                Good ideas are not adopted automatically. They must be driven
                                into practice with courageous patience
                            </p>
                            <button className="primary-button projects-btn"><a href="#projects-list" className='white'>Get Started</a></button>
                        </div>
                    </div>

                    <div className="col-md-6 position-relative">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#001310" d="M40.8,-64.3C54.2,-54.8,67.5,-45.8,77.1,-32.9C86.6,-19.9,92.3,-2.9,90.2,13.1C88.1,29.1,78.2,44.1,66.4,57.3C54.6,70.5,41,81.8,25,87.8C8.9,93.7,-9.5,94.3,-23.6,87.1C-37.8,79.9,-47.7,64.9,-58.1,51.3C-68.5,37.6,-79.4,25.3,-82.6,11.1C-85.7,-3,-81.2,-19,-74.2,-33.7C-67.2,-48.3,-57.7,-61.7,-44.9,-71.5C-32.1,-81.3,-16.1,-87.6,-1.2,-85.7C13.6,-83.8,27.3,-73.8,40.8,-64.3Z" transform="translate(100 100)" />
                        </svg>

                        <FaLaptopCode
                            color='white'
                            size='180'
                            className='position-absolute top-50 start-50 translate-middle' />
                    </div>
                </div>
            </div>


            <div className="container projects-list" id='projects-list'>

                <h3 className="font-bold">Take a look of my projects</h3>
                <hr />

                <div className="row">

                    {projectsdata.map(project => {
                        return <div className="col-md-4">
                            <div className="position-relative project">
                                <img src={project.image} alt="" />
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <hr />
                                    <p>{project.description}</p>
                                   
                                    <button className="primary-button linkb"><a href={project.link}>View</a></button> 
                                </div>
                            </div>
                        </div>
                    })}

                </div>

            </div>
        </div>
    );
}

export default Projects;
