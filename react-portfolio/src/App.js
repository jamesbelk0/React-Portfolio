import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Nav from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/aboutme' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
      </Router>
  );
}

export default App;
