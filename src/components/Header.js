import React, { useState } from 'react';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-light bg-body-tertiary navbar-expand-lg" style={{ height: '70px', backgroundColor: '#e3f2fd', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <User style={{ marginRight: '20px', marginLeft: '45px' }} />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleToggleNav} 
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          style={{ border: 'none', outline: 'none' }} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto" style={{ marginRight: '20px' }}>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                aria-current="page" 
                href="#home" 
                onClick={handleToggleNav}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#education" 
                onClick={handleToggleNav}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#skills" 
                onClick={handleToggleNav}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#projects" 
                onClick={handleToggleNav}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#certifications" 
                onClick={handleToggleNav}
              >
                Certifications
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact" 
                onClick={handleToggleNav}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
