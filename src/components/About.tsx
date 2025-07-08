import React from 'react';
import { MapPin, GraduationCap, Heart, Lightbulb, Code, Rocket, Sparkles, Brain, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const About: React.FC = () => {
  const { darkMode } = useTheme();

  const techCategories = [
    { 
      name: 'AI & Machine Learning', 
      techs: ['Python', 'GenAI', 'LangChain', 'Gemini API', 'Agentic AI'],
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-purple-600 via-pink-600 to-red-500'
    },
    { 
      name: 'Full-Stack Development', 
      techs: ['React', 'Node.js', 'Streamlit', 'REST APIs', 'Databases'],
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-blue-600 via-cyan-600 to-teal-500'
    },
    { 
      name: 'DevOps & Cloud', 
      techs: ['Docker', 'Kubernetes', 'Jenkins', 'Linux', 'SSH'],
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-green-600 via-emerald-600 to-lime-500'
    },
    { 
      name: 'Emerging Technologies', 
      techs: ['GenAIops', 'Computer Vision', 'NLP', 'Automation'],
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-orange-600 via-yellow-600 to-amber-500'
    }
  ];

  return (
    <section id="about" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-100'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-purple-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-pink-600/20' : 'bg-pink-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-600/15' : 'bg-blue-300/40'} blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className={`w-2 h-2 ${darkMode ? 'bg-purple-400/50' : 'bg-purple-600/40'} rounded-full blur-sm`}></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-500">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`}>
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Transforming ideas into reality through cutting-edge technology and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            <div className={`group relative p-10 rounded-3xl ${
              darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-purple-200/50'
            } backdrop-blur-xl shadow-2xl border ${
              darkMode ? 'border-gray-600/50' : 'border-purple-200/50'
            } hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:rotate-1 transform-gpu`}
            style={{
              background: darkMode 
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)'
            }}>
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {personalInfo.name}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                      {personalInfo.year} • {personalInfo.university}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30' : 'bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-300/50'}`}>
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                      {personalInfo.location}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/30' : 'bg-gradient-to-r from-pink-100/80 to-red-100/80 border border-pink-300/50'}`}>
                    <Heart className="w-6 h-6 text-pink-600" />
                    <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                      Passionate about Innovation & AI
                    </span>
                  </div>
                </div>

                <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-500/40' : 'bg-gradient-to-r from-blue-50/90 to-purple-50/90 border-blue-300/60'} border`}>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {personalInfo.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className={`group relative p-10 rounded-3xl ${
              darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-orange-200/50'
            } backdrop-blur-xl shadow-2xl border ${
              darkMode ? 'border-gray-600/50' : 'border-orange-200/50'
            } hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:rotate-1 transform-gpu`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Fun Facts & Achievements
                  </h3>
                </div>
                <div className="grid gap-4">
                  {personalInfo.funFacts.map((fact, index) => (
                    <div key={index} className={`flex items-start gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700/60 border-gray-500/40' : 'bg-gradient-to-r from-yellow-50/90 to-orange-50/90 border-yellow-300/60'} border hover:scale-105 transition-transform duration-300`}>
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Technologies */}
          <div className="space-y-8">
            <div className={`group relative p-10 rounded-3xl ${
              darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-blue-200/50'
            } backdrop-blur-xl shadow-2xl border ${
              darkMode ? 'border-gray-600/50' : 'border-blue-200/50'
            } hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:rotate-1 transform-gpu`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Technologies I Master
                  </h3>
                </div>

                <div className="grid gap-8">
                  {techCategories.map((category, index) => (
                    <div key={index} className="group/tech">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover/tech:scale-110 transition-transform duration-300`}>
                          {category.icon}
                        </div>
                        <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover/tech:text-transparent group-hover/tech:bg-clip-text group-hover/tech:bg-gradient-to-r group-hover/tech:${category.gradient} transition-all duration-300`}>
                          {category.name}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {category.techs.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-4 py-3 rounded-full text-sm font-semibold ${
                              darkMode 
                                ? 'bg-gray-700/80 text-gray-200 border border-gray-500/60' 
                                : 'bg-gray-100/90 text-gray-800 border border-gray-300/70'
                            } hover:bg-gradient-to-r hover:${category.gradient} hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer transform-gpu`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;