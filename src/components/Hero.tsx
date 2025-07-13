import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeContext';
import profileImage from '../assets/profile.jpg.jpeg';
import profilePic from '../assets/profile.jpg';
import VideoResume from './VideoResume';

const Hero: React.FC = () => {
  const { darkMode } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const texts = [
    'Building the Core, AI, and Innovation',
    'Full-Stack Developer & AI Enthusiast',
    'DevOps & GenAI Specialist',
    'Creating the Future with Technology'
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background with consistent color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 dark:from-slate-950 dark:via-purple-950 dark:to-pink-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Gradient Overlay with consistent colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
      </div>

      {/* Enhanced Floating particles with consistent color scheme */}
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
            <div className={`w-2 h-2 ${i % 4 === 0 ? 'bg-purple-400/50' : i % 4 === 1 ? 'bg-pink-400/50' : i % 4 === 2 ? 'bg-blue-400/50' : 'bg-indigo-400/50'} rounded-full blur-sm animate-pulse`}></div>
          </div>
        ))}
      </div>

      {/* 3D Geometric Shapes with consistent colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              zIndex: Math.floor(Math.random() * 5)
            }}
          >
            <div className={`w-8 h-8 ${i % 3 === 0 ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30' : i % 3 === 1 ? 'bg-gradient-to-br from-pink-500/30 to-blue-500/30' : 'bg-gradient-to-br from-blue-500/30 to-indigo-500/30'} rounded-lg rotate-45 blur-sm animate-pulse`}></div>
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">Mahakpreet Kour</span>
            </h1>
            
            {/* Fixed height container for stable typing animation */}
            <div className="h-24 flex items-center justify-center lg:justify-start mb-8">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
                <span className="inline-block min-w-[500px] text-left">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              3rd-year student at Vivekananda Global University, passionate about AI, full-stack development, 
              and creating innovative solutions that bridge technology and human needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2 animate-bounce-subtle"
              >
                <span>View My Projects</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-2 border border-white/20">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 mt-12">
              <a href="https://github.com/Mahakpreet-kour" target="_blank" rel="noopener noreferrer" 
                 className="group p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-pink-600/40 hover:scale-110 border border-purple-400/30 hover:border-purple-400/60 hover:rotate-12 shadow-lg hover:shadow-purple-500/25">
                <Github className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
              </a>
              <a href="mailto:mahakmakkar621@gmail.com" 
                 className="group p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20 hover:rotate-12">
                <Mail className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
              </a>
              <button className="group p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110 border border-white/20 hover:rotate-12">
                <MessageSquare className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Side - Profile Picture with Curl Effect */}
          <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative group">
              {/* Curl Effect Container */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Main Image Container with Curl */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Curl Shadow */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-xl animate-pulse"></div>
                  
                  {/* Curl Paper Effect */}
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-12 opacity-80"></div>
                  
                  {/* Main Image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                    <img
                      src={profileImage}
                      alt="Mahakpreet Kour"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Elements on Image */}
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full animate-bounce-subtle">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  {/* Video Icon Button below profile image */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-pink-700 transition-all duration-300 border-4 border-white dark:border-slate-800 z-10"
                    title="Watch Video Resume"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <polygon points="10,8 16,12 10,16" fill="currentColor" />
                    </svg>
                  </button>
                </div>
                
                {/* Static Tech Icons with consistent colors */}
                <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div className="absolute -bottom-4 -right-4 p-3 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full shadow-xl">
                  <span className="text-white font-bold text-sm">DevOps</span>
                </div>
                <div className="absolute top-1/2 -right-8 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-xl">
                  <span className="text-white font-bold text-sm">Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>

      {/* Modal for Video Resume */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative animate-fadeInUp">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>
            <VideoResume />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;