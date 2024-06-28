import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Stats />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
