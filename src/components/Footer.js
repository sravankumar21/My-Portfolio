import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling
// import footerImage from '../images/2.png'; // Import the background image for the footer

const Footer = () => {
  return (
    <div>
      
      <section className="footer" id="contact" style={{ backgroundColor: '#f4f4f4', padding: '4rem' }}>
        <div className="container">
        <h1 className="heading" style={{ color: 'black', textAlign: 'center', marginBottom: '3rem' }}>STAY CONNECTED!!!</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="footer-content text-center">
                <div className="footer-text">
                  <p>&copy; Sravan Kumar Personal Portfolio. All rights reserved.</p>
                  <p>Contact: <a href="mailto:battu4262@gmail.com">battu4262@gmail.com</a></p>
                  <p>Phone: +91 9381935889</p>
                  <p>Address: Hyderabad, India</p>
                  <p>Check out these:</p>
                  <div className="social-links">
                    <a href="https://github.com/sravankumar21/sravankumar21.git" className="btn btn-dark" style={{ marginRight: '1.2rem' }} target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/sravan-kumar-battu-919960255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-dark" style={{ marginRight: '1.2rem' }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.twitter.com/Sravankumar2180" className="btn btn-dark" style={{ marginRight: '1.2rem' }} target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/sra1kumar2180?igsh=MXNhenZvM2J1NWJybg==" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
