import React from "react";
import "./Menu.css";
import { HiHome } from "react-icons/hi";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import {
  BsFillEyeFill,
  BsLaptop,
  BsTerminalFill,
  BsFillEasel2Fill,
  BsPersonPlusFill,
} from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
                alt="profile picture"
              />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" spy={true} offset={-100} duration={100}>
                    <HiHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="about" spy={true} offset={-100} duration={100}>
                    <BsFillEyeFill />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="education" spy={true} offset={-100} duration={100}>
                    <BsLaptop />
                    Education
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link to="tech-stack" spy={true} offset={-100} duration={100}>
                    <BsTerminalFill />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="project" spy={true} offset={-100} duration={100}>
                    <BsFillEasel2Fill />
                    Projects
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="work-exprince"
                    spy={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlinePaperClip />
                    Work Exprince
                  </Link>
                </div>
              </div>

              {/* <div className="nav-item">
              <div className="nav-link">
                <Link to="testimonial" spy={true} offset={-100} duration={100}>
                  <BsFillPersonVcardFill />
                  Testimonial
                </Link>
              </div>
            </div> */}
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="contact" spy={true} offset={-100} duration={100}>
                    <BsPersonPlusFill />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} offset={-100} duration={100}>
                  <HiHome />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="about" spy={true} offset={-100} duration={100}>
                  <BsFillEyeFill />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="education" spy={true} offset={-100} duration={100}>
                  <BsLaptop />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="tech-stack" spy={true} offset={-100} duration={100}>
                  <BsTerminalFill />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="project" spy={true} offset={-100} duration={100}>
                  <BsFillEasel2Fill />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="work-exprince"
                  spy={true}
                  offset={-100}
                  duration={100}
                >
                  <AiOutlinePaperClip />
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="contact" spy={true} offset={-100} duration={100}>
                  <BsPersonPlusFill />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
