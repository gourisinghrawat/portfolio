import React from "react";
import "../App.css";

function DesignerPage() {
  return (
    <div className="main">
      
        <div className="b0">
        <div className="b1">
        <div className="box about">
        <div className="about-text">
        <h2>About Me</h2>
          <p>
          I am a pre-final year engineering student and creative direction at Fooddle.          </p></div>
        </div>
        
        
        <div className="abc">
        <img
        src={`${process.env.PUBLIC_URL}/uiuxprofile.png`}
        alt="Profile"
        className="profile-pic"
        />
        </div>
        
        </div>
        <div className="b2">
        <div className="box tagline">
          <h3 className="taglinetext">
            Transforming ideas into experiences with a touch of creativity and
            technology
          </h3>
        </div>

        <div className="box skills">
        <div className="skills-text">
          <h2>Technical Skills</h2>
          <p>UI/UX Wireframing, Prototyping, Figma, Adobe Express</p>
          </div>
          <a href="#resume" className="resume-link">
            Resume ↗
          </a>
        </div>
        </div>
        </div>
        <div className="b3">
        <div className="box projects">
          <div className="headingprojects"><h2>Prototypes</h2>
          <a href="#view-all" className="view-all-link">
            View All ↗
          </a></div>
          <p>Digipost: Postal Office Sustainability Tracker</p>
          <img
            src={`${process.env.PUBLIC_URL}/projectprew.png`}
            alt="Projects Preview"
            className="project-preview"
          />
          <p>
            <strong>Experience</strong>
          </p>
          <p>Revamp Capstone portal 2024</p>
          <p>Fooddle application and website design</p>
          
        </div>
        
        
        </div>
      </div>
  );
}

export default DesignerPage;
