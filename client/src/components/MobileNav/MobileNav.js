import React, { useState } from "react";
import "./MobileNav.css";
import { LuMenu } from "react-icons/lu";
import {
  BsFillEyeFill,
  BsLaptop,
  BsTerminalFill,
  BsFillEasel2Fill,
  BsPersonPlusFill,
} from "react-icons/bs";
import { Link } from "react-scroll";
import { HiHome } from "react-icons/hi";
// import { IoCloseOutline } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { AiOutlinePaperClip } from "react-icons/ai";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  // handle Open
  const handleOpen = () => {
    setOpen(!open);
  };
  // handel menu Click
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <CgClose
              className="mobile-nav-icon"
              size={30}
              onClick={handleOpen}
            />
          ) : (
            <LuMenu
              className="mobile-nav-icon"
              size={30}
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title"> My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <HiHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <BsFillEyeFill />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <BsLaptop />
                    Education
                  </Link>
                </div>
              </div>

              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="tech-stack"
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <BsTerminalFill />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
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
                    onClick={handleMenuClick}
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
                  <Link
                    to="contact"
                    spy={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <BsPersonPlusFill />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
