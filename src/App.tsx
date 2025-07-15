import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AISection from './components/AISection';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Certificates from './components/Certificates';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <AISection />
        <About />
        <Projects />
        <Blog />
        <Achievements />
        <Certificates />
        <Skills />
        <Contact />
        <Footer />
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;