import React from 'react';
import './Home.css';
import profileImage from './sajal.jpg'; // Import your profile image
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="profile-image">
          <img src={profileImage} alt="Sajal" />
        </div>
        <div className="intro">
          <h1>Hello, I'm Sajal Garg</h1>
          <p>Web Developer | Designer | Aspiring Innovator</p>
          <p>
            Welcome to my portfolio. I create web applications with a passion for clean, elegant, and user-friendly design.
          </p>
          <p>
            Explore my work, and feel free to get in touch.
          </p>
        </div>
      </div>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
