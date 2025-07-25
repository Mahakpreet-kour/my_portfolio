import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Mail, MessageSquare, ExternalLink, Code, Terminal, Cpu } from 'lucide-react';
import { useTheme } from './ThemeContext';
import profileImage from '../assets/profile.jpg.jpeg';

const Hero: React.FC = () => {
  const { darkMode } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    'AI & ML Engineer',
    'Full-Stack Developer',
    'DevOps Specialist',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const typeText = () => {
      const text = texts[currentIndex];
      if (isTyping) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isTyping]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              zIndex: Math.floor(Math.random() * 10)
            }}
          >
            {i % 3 === 0 ? (
              <Code className="w-6 h-6 text-purple-400/40" />
            ) : i % 3 === 1 ? (
              <Terminal className="w-6 h-6 text-blue-400/40" />
            ) : (
              <Cpu className="w-6 h-6 text-pink-400/40" />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-fade-in">
              {/* Floating Typing Name Effect */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                  Mahakpreet Kour
                </span>
              </h1>
              {/* Typing Animation Container for Tagline */}
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
                  <span className="inline-block min-w-[300px] text-left">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h2>
              </div>

              {/* Enhanced Description */}
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Passionate about creating innovative solutions using cutting-edge technologies.
                Specializing in AI/ML, Full-Stack Development, and DevOps.
            </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 hero-cta-confetti"
                  onMouseEnter={() => {
                    const confetti = document.querySelector('.hero-confetti');
                    if (confetti) confetti.classList.add('show-confetti');
                  }}
                  onMouseLeave={() => {
                    const confetti = document.querySelector('.hero-confetti');
                    if (confetti) confetti.classList.remove('show-confetti');
                  }}
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Let's Connect
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </a>
              
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 rounded-full text-purple-400 font-semibold text-lg transition-all duration-300 hover:text-white hover:border-purple-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download CV
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </a>
            </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Enhanced Effects */}
          <div className="flex-1 relative perspective-3d group">
            <div 
              className="relative w-96 h-96 mx-auto transform hero-profile-3d group"
              tabIndex={0}
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 z-20 pointer-events-none hero-glass-overlay"></div>
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              {/* Profile image container */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-shadow duration-500">
                <img
                  src={profileImage}
                  alt="Mahakpreet Kour"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 border-8 border-purple-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-[-10px] border-4 border-pink-500/20 rounded-full animate-reverse-spin"></div>
              <div className="absolute inset-[-20px] border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
              {/* Confetti on CTA hover (placeholder for confetti effect) */}
              <div className="absolute inset-0 pointer-events-none hero-confetti"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <button
          onClick={scrollToProjects}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;