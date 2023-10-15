import React from 'react';
import './Projects.css';


const projectData = [
  {
    title: 'Portfolio',
    description: 'Portfolio',
    imageUrl: 'images/portfolio.png', // Import your project image
    projectLink: 'https://project1link.com', // Add your project link
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg', // Import your project image
    projectLink: 'https://project2link.com', // Add your project link
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg', // Import your project image
    projectLink: 'https://project1link.com', // Add your project link
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg', // Import your project image
    projectLink: 'https://project2link.com', // Add your project link
  },
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg', // Import your project image
    projectLink: 'https://project1link.com', // Add your project link
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'project2.jpg', // Import your project image
    projectLink: 'https://project2link.com', // Add your project link
  },
  
  // Add more project items as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-carousel">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
