import React, { useRef } from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About UNIVERSITY</h3>
        <h2>Nuruturing Tomorrow's Leaders Today</h2>
        <p>
          Embrank on a transformation educational journey with our university's
          comperhensive eduction programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of eduction.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, couselor, or
          educational leaders, our diverse range of programs offers the perfect
          pathway to achieve your goals and ulock your full potential in shaping
          in shaping the future of eduction.
        </p>
      </div>
    </div>
  );
};

export default About;
