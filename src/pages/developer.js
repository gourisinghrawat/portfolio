import React, { useState, useEffect } from "react";
import "../App.css";

const AboutSection = ({ isLoaded }) => (
  <div className={`box about ${isLoaded ? "visible" : ""}`}>
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        I am a pre-final year engineering student and creative direction
        at Fooddle.
      </p>
    </div>
  </div>
);

const ProfileImage = () => (
  <div className="abc">
    <img
      src={`${process.env.PUBLIC_URL}/devprofile.png`}
      alt="Profile"
      className="profile-pic"
    />
  </div>
);

const TaglineSection = ({ isLoaded }) => (
  <div className={`box tagline ${isLoaded ? "visible" : ""}`}>
    <h3 className="taglinetext">
      Turning real-world problems into impactful, scalable software
      solutions.
    </h3>
  </div>
);

const SkillsSection = ({ isLoaded }) => (
  <div className={`box skills ${isLoaded ? "visible" : ""}`}>
    <div className="skills-text">
      <h2>Technical Skills</h2>
      <p>UI/UX Wireframing, Prototyping, Figma, Adobe Express</p>
    </div>
    <a href="#resume" className="resume-link">
      Resume ↗
    </a>
  </div>
);

const ProjectsSection = ({ isLoaded }) => (
  <div className={`box projects ${isLoaded ? "visible" : ""}`}>
    <div className="headingprojects">
      <h2>Projects</h2>
      <a href="#view-all" className="view-all-link">
        View All ↗
      </a>
    </div>
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
);

function DeveloperPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main">
      <div className="b0">
        <div className="b1">
          <AboutSection isLoaded={isLoaded} />
          <ProfileImage />
        </div>
        <div className="b2">
          <TaglineSection isLoaded={isLoaded} />
          <SkillsSection isLoaded={isLoaded} />
        </div>
      </div>
      <div className="b3">
        <ProjectsSection isLoaded={isLoaded} />
      </div>
    </div>
  );
}

export default DeveloperPage;
