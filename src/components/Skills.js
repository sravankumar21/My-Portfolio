import React from 'react';
import backgroundImage from '../images/2.png'; // Import the background image

const Skills = () => {
  return (
    <section className="skills" id="skills" style={{ padding: '6rem 0', backgroundColor: '#ffffff', textAlign: 'center' }}>
      <div className="wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="heading" style={{ marginBottom: '2rem' }}>SKILLS</h1>
        <div className="box" style={{ 
          background: `url(${backgroundImage}) no-repeat center center/cover`,
          padding: '4rem',
          borderRadius: '10px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
        }}>
          <div className="content" style={{ color: '#fff', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6',color : 'black' }}>C</li>
              <li style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6',color : 'black' }}>R</li>
              <li style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6',color : 'black' }}>JAVA - FUNDAMENTALS, CORE, OOPS, DSA</li>
              <li style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6',color : 'black' }}>MERN STACK</li>
              <li style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6',color : 'black' }}>PYTHON - MACHINE LEARNING, DATA SCIENCE AND NATURAL LANGUAGE PROCESSING</li>
              <li style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6',color : 'black' }}>MYSQL</li>
             
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Skills;
