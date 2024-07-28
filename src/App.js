import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;