import React from 'react';
import HomeImage from '../images/sravanhome.png'; // Assuming correct path to image
import ResumePDF from '../styles/B Sravan Kumar-Resume.pdf'; // Replace with actual path to your PDF file

const Home = () => (
  <section className="home" id="home" style={{ padding: '6rem 9%', backgroundColor: '#f0f0f0' }}>
    <div className="wrapper" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <div className="box" style={{ 
        background: `url(${HomeImage}) no-repeat`,
        backgroundSize: 'cover',
        padding: '10rem 2rem',
        borderRadius: '10px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        margin: '2rem 0'
      }}>
        <div className="content" style={{
          padding: '0rem',
          borderRadius: '10px',
          color: '#fff',
          textAlign: 'center' // Center align text on all screens
        }}>
          <h3 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'black' }}>SRAVAN KUMAR BATTU</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'black' }}>AN UNDERGRADUATE</p>
          <a 
            href={ResumePDF} 
            className="btn" 
            style={{
              backgroundColor: '#000000',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease-in-out'
            }}
            target="_blank"  
            rel="noopener noreferrer" 
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
