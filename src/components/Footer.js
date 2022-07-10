import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaMailBulk,
} from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#001310" fill-opacity="1" d="M0,224L24,192C48,160,96,96,144,101.3C192,107,240,181,288,213.3C336,245,384,235,432,197.3C480,160,528,96,576,106.7C624,117,672,203,720,218.7C768,235,816,181,864,165.3C912,149,960,171,1008,186.7C1056,203,1104,213,1152,234.7C1200,256,1248,288,1296,261.3C1344,235,1392,149,1416,106.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>

                <div className="row justify-content-center footer-content">
                    <div className="col-md-6">
                        <div className="div">
                            <p>Designed and Developed By</p>
                            <hr />

                            <div className="d-flex justify-content-between px-2">
                                <a href="mailto:mohammedalkindy@gmail.com"> <FaMailBulk className="footer-icons" /></a>
                                <a href="https://www.linkedin.com/in/muhammad-alkindy-b36a18134/"><FaLinkedinIn className="footer-icons" /></a>
                                <a href="https://github.com/buiano007"> <FaGithub className="footer-icons" /></a>


                            </div>

                            <hr />

                            <br />

                            <p>Muhammad Alkindy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
