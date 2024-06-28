import React from 'react';
import { Carousel } from 'react-bootstrap';
import certificateImage1 from '../images/certificate1.png'; // Import certificate images
import certificateImage2 from '../images/certificate2.png'; // Import certificate images
import certificateImage3 from '../images/certificate3.png'; 
import certificateImage4 from '../images/certificate4.png'// Import certificate images
import '../styles/Certifications.css'; // Import custom CSS for additional styling

const CertificatesCarousel = () => {
  return (
    <div className="certificates-carousel-container" id="certifications">
      <h1 className="text-center mb-5" style={{ color: 'black' }}>CERTIFICATIONS</h1>

      <div className="carousel-wrapper">
        <Carousel id="certificatesCarousel">
          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                className="certificate-image"
                src={certificateImage1}
                alt="Certificate 1"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                className="certificate-image"
                src={certificateImage2}
                alt="Certificate 2"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                className="certificate-image"
                src={certificateImage3}
                alt="Certificate 3"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-content">
              <img
                className="certificate-image"
                src={certificateImage4}
                alt="Certificate 4"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
