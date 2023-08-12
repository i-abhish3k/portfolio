import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a passionate developer, skilled in JavaScript, with
                expertise in React, Node.js, and MongoDB. My proficiency in
                Google Cloud Platform enables me to create efficient and
                scalable solutions. Collaborating closely with clients, I craft
                user-friendly, impactful solutions to real-world problems. Eager
                to learn, I stay up-to-date with the latest technologies to make
                a positive impact. As a versatile sorcerer of innovation, I
                bring creativity and technical prowess to every project. Let's
                join forces on this magical journey, turning your ideas into
                reality and creating amazing digital experiences. Together,
                we'll make dreams come true!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
