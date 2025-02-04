import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

function Projects() {
  const projectList = [
    {
      name: 'Get Out',
      description: 'A social mobile application featuring an interactive map that showcases events that groups and individuals post to attract attention or customers. Built using React Native and Firebase.',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Responsive Design', 'Real-time Database', 'Authentication'],
    },
    {
      name: 'Portfolio Website',
      description: 'Personal website built to showcase my resume, skills, and projects. It includes an interactive UI/UX using React and styled-components.',
      technologies: ['React', 'CSS', 'styled-components', 'Responsive Design' ],
      link: 'https://dev.d2t33yfquzq2gf.amplifyapp.com'
    },
    {
      name: 'Game Wishlist Website',
      description: 'A web application that allows users to create and manage a wishlist of video games. Built with React, Node.js, and MongoDB.',
      technologies: ['JavaScript', 'CSS', 'APIs', 'Local Storage', 'Responsive Design', ],
      link: 'https://343f24.github.io/343f24-final-project-steamers/pages/games.html'
    },
    {
      name: 'AUTO WRLD',
      description: 'A social media application for car enthusiasts to share photos and videos of their cars. Built with React, Node.js, and Firebase.',
      technologies: ['React.js', 'CSS', 'AWS Services'],

    },
    {
      name: 'Arduino Ultrasonic Sensor Project',
      description: 'A project that uses an Arduino board and an ultrasonic sensor to measure and display the distance between the sensor and an object.',
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensor', 'Electronics'],
      link: 'https://github.com/mkGerber/ArduinoUltrasonicSensor'
    }
    // Add more projects here
  ];

  return (
    <>
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <Link to={`/project/${index}`} key={index} className="project-link">
              <div className="project-card">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;