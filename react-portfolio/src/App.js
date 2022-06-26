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
      <Routes>
        <Route path='/' element={<Hero />} />
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