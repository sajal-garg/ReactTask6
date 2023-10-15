import React from 'react';
import './AboutMe.css'; // Create or import your CSS file for styling
import profileImage from './sajal.jpg';

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-me-content">
          <div className="about-me-image">
            <img src={profileImage} alt="Sajal" />
          </div>
          <div className="about-me-text">
            <p>
              Hello! I'm Sajal Garg, a passionate Web Developer with a strong
              interest in frontend Development. I have no experience in the
              field and a deep love for react.
            </p>
            <p>
            Feel free to explore my portfolio to see some of the projects I've
              worked on. If you'd like to connect or collaborate, please don't
              hesitate to Contact me.
            </p>
            <p>
              I'm constantly seeking new challenges and opportunities to expand my
              knowledge and skills. When I'm not working, you can find me Playing Football or watching television.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
