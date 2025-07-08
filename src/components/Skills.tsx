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
        return 'from-blue-600 via-indigo-600 to-purple-600';
      case 'ai':
        return 'from-purple-600 via-pink-600 to-red-600';
      case 'devops':
        return 'from-green-600 via-emerald-600 to-teal-600';
      case 'fullstack':
        return 'from-orange-600 via-yellow-600 to-amber-600';
      default:
        return 'from-gray-600 via-slate-600 to-zinc-600';
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
    <section id="skills" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-200/30'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-900/20' : 'bg-purple-200/30'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${darkMode ? 'bg-green-900/20' : 'bg-green-200/30'} blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
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
            <Sparkles className={`w-3 h-3 ${darkMode ? 'text-blue-400/20' : 'text-blue-600/30'}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Rocket className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600`}>
            Technical Expertise
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8 shadow-lg"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Mastering cutting-edge technologies with hands-on experience and proven expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className={`group relative p-8 rounded-3xl ${
                darkMode ? 'bg-gray-800/80' : 'bg-white/90'
              } backdrop-blur-xl shadow-2xl border ${
                darkMode ? 'border-gray-700/50' : 'border-white/50'
              } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.9) 0%, rgba(55, 65, 81, 0.8) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)'
              }}
            >
              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryGradient(category)} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${getCategoryGradient(category)} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${getCategoryGradient(category)} transition-all duration-300`}>
                    {getCategoryName(category)}
                  </h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} group-hover/skill:text-transparent group-hover/skill:bg-clip-text group-hover/skill:bg-gradient-to-r group-hover/skill:${getCategoryGradient(category)} transition-all duration-300`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
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
            darkMode ? 'bg-gray-800/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300`}>
                14+
              </h3>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Technical Skills
              </p>
            </div>
          </div>

          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300`}>
                3+
              </h3>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Years Experience
              </p>
            </div>
          </div>

          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-800/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300`}>
                8+
              </h3>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Major Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;