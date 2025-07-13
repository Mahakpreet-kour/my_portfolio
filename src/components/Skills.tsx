import React, { useState, useEffect } from 'react';
import { Code, Cpu, Cloud, Layers, Target, Zap, Sparkles, Brain, Rocket } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Skills: React.FC = () => {
  const { darkMode } = useTheme();
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'core':
        return <Code className="w-7 h-7 text-white" />;
      case 'ai':
        return <Brain className="w-7 h-7 text-white" />;
      case 'devops':
        return <Cloud className="w-7 h-7 text-white" />;
      case 'fullstack':
        return <Layers className="w-7 h-7 text-white" />;
      default:
        return <Target className="w-7 h-7 text-white" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'core':
        return 'from-purple-600 via-pink-600 to-red-500';
      case 'ai':
        return 'from-purple-600 via-pink-600 to-blue-600';
      case 'devops':
        return 'from-pink-600 via-blue-600 to-indigo-600';
      case 'fullstack':
        return 'from-blue-600 via-purple-600 to-pink-600';
      default:
        return 'from-purple-600 via-pink-600 to-blue-600';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'core':
        return 'Core Technologies';
      case 'ai':
        return 'AI & Machine Learning';
      case 'devops':
        return 'DevOps & Cloud';
      case 'fullstack':
        return 'Full-Stack Development';
      default:
        return 'Other Skills';
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });

  return (
    <section id="skills" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-100'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-purple-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-pink-600/20' : 'bg-pink-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-600/15' : 'bg-blue-300/40'} blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Code Elements */}
        {[...Array(20)].map((_, i) => (
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
            <Sparkles className={`w-3 h-3 ${darkMode ? 'text-purple-400/50' : 'text-purple-600/40'}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-6xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`}>
            Technical Expertise
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-12 shadow-xl"></div>
          <p className={`text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
            Mastering cutting-edge technologies with hands-on experience and proven expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className={`group relative p-8 rounded-3xl ${
                darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-purple-200/50'
              } backdrop-blur-xl shadow-2xl border ${
                darkMode ? 'border-gray-600/50' : 'border-purple-200/50'
              } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)'
              }}
            >
              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryGradient(category)} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${getCategoryGradient(category)} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${getCategoryGradient(category)} transition-all duration-300`}>
                    {getCategoryName(category)}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:${getCategoryGradient(category)} transition-all duration-300`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold text-purple-600 dark:text-purple-400`}>
                            {animatedSkills[skill.name] || 0}%
                          </span>
                          <Zap className="w-4 h-4 text-yellow-500" />
                        </div>
                      </div>
                      <div className={`relative w-full ${darkMode ? 'bg-gray-700/50' : 'bg-gray-200'} rounded-full h-3 overflow-hidden shadow-inner`}>
                        <div 
                          className={`h-full bg-gradient-to-r ${getCategoryGradient(category)} rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                          style={{ 
                            width: `${animatedSkills[skill.name] || 0}%`,
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-purple-200/50'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-600/50' : 'border-purple-200/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
                AI & ML Expertise
              </h3>
              <p className={`text-lg text-gray-700 dark:text-gray-300`}>
                Advanced proficiency in machine learning, deep learning, and AI technologies
              </p>
            </div>
          </div>

          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-pink-200/50'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-600/50' : 'border-pink-200/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
                Full-Stack Development
              </h3>
              <p className={`text-lg text-gray-700 dark:text-gray-300`}>
                End-to-end development with modern frameworks and technologies
              </p>
            </div>
          </div>

          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-blue-200/50'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-600/50' : 'border-blue-200/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
                DevOps & Cloud
              </h3>
              <p className={`text-lg text-gray-700 dark:text-gray-300`}>
                Infrastructure automation and cloud-native development expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;