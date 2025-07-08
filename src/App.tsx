import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import AISection from './components/AISection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <AISection />
        <Contact />
        <Footer />
        <AIAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;