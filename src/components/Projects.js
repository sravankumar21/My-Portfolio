import React from 'react';
import projectImage1 from '../images/Website1.png'; // Import project images
import projectImage2 from '../images/Screenshot 2024-06-27 at 10.01.36 PM.png';
import projectImage3 from '../images/project3.png';

const projects = [
  {
    name: 'Debate Box',
    techStack: 'React, Node.js, Express, MongoDB,Bootstrap',
    description: 'A revolutionary software solution designed to empower users to engage in dynamic debates, fostering insightful discussions and diverse perspectives. It provides an intuitive platform for seamless interaction, enhancing the quality and depth of debate experiences.',
    imgSrc: projectImage1,
    deploymentLink: 'https://debatebox.rka.li/',
    explanationLink: 'https://www.loom.com/share/984742732083432087360d6901e15b8a?sid=ed3adcd4-fae1-4a22-bbeb-813d68c16885',
    githubLink: 'https://github.com/sravankumar21/debatebox',
  },
  {
    name: 'CBIT - Placement Cell',
    techStack: 'React, Node.js, Express, MongoDB,Bootstrap',
    description: 'Traditional methods of job and internship applications are ineffective due to email forwarding, causing students to miss opportunities. The CBIT-Placement Cell website centralizes job, internship, and course opportunities, allowing students to apply instantly and eliminating manual email forwarding.',
    imgSrc: projectImage2,
    deploymentLink: 'http://project-two.com',
    explanationLink: '#',
    githubLink: 'https://github.com/sravankumar21/jobportal',
  },
  {
    name: 'PlayStatix-Unleashing Gaming Insights',
    techStack: 'R, React',
    description: 'PlayStatix: Unleashing Gaming Insights through advanced analytics and real-time data, providing comprehensive knowledge on the gaming industry positive and negative impacts. Dive deeper into your gameplay with actionable insights and detailed reports.',
    imgSrc: projectImage3,
    deploymentLink: 'https://playstatix.vercel.app/',
    explanationLink: '#',
    githubLink: 'https://github.com/sravankumar21/playstatix',
  },
];

const Projects = () => {
  return (
    <div className="container mt-5" id="projects">
      <h1 className="heading" style={{ marginBottom: '3rem', textAlign: 'center' }}>PROJECTS</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <div className={`row mb-4 align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
            <div className="col-md-4 col-12 mb-3 text-center">
              <img src={project.imgSrc} alt={project.name} className="img-fluid project-image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="col-md-8 col-12 mb-3 d-flex flex-column justify-content-center align-items-start">
              <h3>{project.name}</h3>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              <p>{project.description}</p>
              <div className="d-flex justify-content-start">
                <a href={project.deploymentLink} className="btn btn-primary btn-sm mr-2 mb-2" style={{ marginRight: '5px' }} target="_blank" rel="noopener noreferrer">View Deployment</a>
                <a href={project.explanationLink} className="btn btn-secondary btn-sm mr-2 mb-2" style={{ marginRight: '5px' }} target="_blank" rel="noopener noreferrer">Explanation</a>
                <a href={project.githubLink} className="btn btn-dark btn-sm mb-2" style={{ marginRight: '5px' }} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          {index < projects.length - 1 && <hr />}
        </div>
      ))}
      <div className="text-center mt-4 mb-5">
        <p>For more projects, visit my GitHub:</p>
        <a href="https://github.com/sravankumar21" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">My GitHub</a>
      </div>
    </div>
  );
};

export default Projects;
