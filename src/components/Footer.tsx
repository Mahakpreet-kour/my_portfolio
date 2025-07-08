import React from 'react';
import { Heart, Code, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-900 hover:text-white'
              } shadow-lg hover:shadow-xl`}
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
            
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-600 hover:text-white'
              } shadow-lg hover:shadow-xl`}
            >
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
            
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-sky-500 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-sky-500 hover:text-white'
              } shadow-lg hover:shadow-xl`}
            >
              <Twitter className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
            
            <a
              href={`mailto:${socialLinks.email}`}
              className={`group p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white' 
                  : 'bg-white text-gray-600 hover:bg-purple-600 hover:text-white'
              } shadow-lg hover:shadow-xl`}
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Main Footer Text */}
          <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Designed & Built with{' '}
            <Heart className="inline w-5 h-5 text-red-500 mx-1" />{' '}
            by{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Mahakpreet Kour
            </span>
          </p>

          {/* Tech Stack */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <Code className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Built with React, TypeScript, Tailwind CSS
            </span>
          </div>

          {/* Copyright */}
          <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-8`}>
            <p>© {new Date().getFullYear()} Mahakpreet Kour. All rights reserved.</p>
            <p className="mt-2">
              Building the future through innovation, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;