import React from "react";
import Header from "../components/Header";
import Courosel from "../components/Courosel";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./introbg.svg')` }}
      >
        <div>
          <h1 data-aos='fade-up'>Muhammad Alkindy</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>
              Software <br /> Developer
            </p>
            <button className="primary-button font-bold"><a href="#courosel">Get Started</a></button>
          </div>
        </div>
      </div>
      <Courosel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#001310" fill-opacity="1" d="M0,256L24,245.3C48,235,96,213,144,202.7C192,192,240,192,288,192C336,192,384,192,432,192C480,192,528,192,576,165.3C624,139,672,85,720,96C768,107,816,181,864,192C912,203,960,149,1008,112C1056,75,1104,53,1152,58.7C1200,64,1248,96,1296,96C1344,96,1392,64,1416,48L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <button className="primary-button font-bold"><a download="" href="./CV.pdf" className="button button-light">Download CV </a></button>

          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img src="./jsbuff.svg" alt="" height="300" className="w-100" data-aos='fade-up' />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold" data-aos='fade-left'>
              <h1>About Me</h1>
              <p>
                Hello, I am a Software Developer, I have bachelor of Engineering in Computer Science and Technology.  I am passionate about creating and
                solving digital world-wide problems.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="devstack container my-5 n-box2 py-5">
        <div className="text-center">
          <h3 className="font-bold text-center">My Developement Stack</h3>

          <hr />

          <img
            src="./developer.jpeg"
            alt=""
            height="200"
            width="200"
            className="text-center"
          />
        </div>
        <br />

        <div className="row">
          <div className="col-md-4">
            <div className='font-bold text-start'>
              <h3 className="font-bold">Front End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>

              <p>BootStrap</p>
              <p>TypeScript</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className='font-bold text-center'>
              <h3 className="font-bold">Backend/DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>PostgreSQL</p>

              <p>SQL</p>
              <p>Mongo DB</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className='font-bold text-end'>
              <h3 className="font-bold">Extra</h3>
              <hr />
              <p>Git&GitHub</p>
              <p>NPM & YARN</p>
              <p>AWS</p>
              <p>CI & CD</p>
              <p>Docker</p>
             
            </div>
          </div>


        </div>
      </div>

    </div>




  )
}

export default Home;