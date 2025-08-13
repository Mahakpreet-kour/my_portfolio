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
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Code Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              zIndex: Math.floor(Math.random() * 10)
            }}
          >
            {i % 4 === 0 ? (
              <Code className="w-6 h-6 text-purple-400/40 hover:text-purple-300/60 transition-colors duration-300" />
            ) : i % 4 === 1 ? (
              <Brain className="w-6 h-6 text-pink-400/40 hover:text-pink-300/60 transition-colors duration-300" />
            ) : i % 4 === 2 ? (
              <Cloud className="w-6 h-6 text-blue-400/40 hover:text-blue-300/60 transition-colors duration-300" />
            ) : (
              <Layers className="w-6 h-6 text-indigo-400/40 hover:text-indigo-300/60 transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Skills & Expertise
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Core competencies and technical skills across multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-3xl bg-gray-800/95 border border-gray-600/50 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-700 hover:-translate-y-4 hover:scale-105 transform-gpu text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
              }}
            >
              {/* Enhanced glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryGradient(skill.category)} opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Skill Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryGradient(skill.category)} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
                  {getCategoryIcon(skill.category)}
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-3">
                  {skill.name}
                </h3>

                {/* Skill Level Indicator */}
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < Math.floor(skill.level / 20)
                          ? `bg-gradient-to-r ${getCategoryGradient(skill.category)}`
                          : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="mt-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryGradient(skill.category)} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    {getCategoryName(skill.category)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuously expanding my skill set to stay ahead in the ever-evolving tech landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;