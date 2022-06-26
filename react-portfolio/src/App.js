import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NavFooter from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div style={{ backgroundColor:"#A8A4A6" }}className="App">
      <Navigation></Navigation>
      <div className="vh-100">
            <div className="hero">
                <img src={profile} alt='profile' className="heroPic" />
                <div>
                    <h1 className='heroHeader'>
                        Hello there! My name is James Belk and this is my portfolio!
                    </h1>
                    <p className="myRed">
                        I am a full stack developer with a wide variety of work experience and points of view that lead to a passion for an efficenet user experience. Please click on my "About Me" for a more in-depth history of who I am.
                        <br />
                        For my professional works pelase click on my Projects tab, and for a copy of my resume please click on the resume tab. If there are any questions at all please reach out to me via the contact tab!
                    </p>
                </div>
            </div>
        </div>
      <Routes>
        <Route path='' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <NavFooter />
    </div>
      </Router>
  );
}

export default App;
