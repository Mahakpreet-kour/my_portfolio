import React, { useState } from 'react';
import { MapPin, GraduationCap, Heart, Lightbulb, Code, Rocket, Sparkles, Brain, Target, ExternalLink, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const About: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [floatingCard, setFloatingCard] = useState<string | null>(null);

  const techCategories = [
    { 
      name: 'AI & Machine Learning', 
      techs: ['Python', 'GenAI', 'LangChain', 'Gemini API', 'Agentic AI'],
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-purple-600 via-pink-600 to-red-500'
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

  // Enhanced card classes with better contrast and hover effects
  const personalCardClass = `group relative p-8 rounded-3xl bg-gray-800/95 border-gray-600/50 backdrop-blur-xl shadow-2xl border hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu hover:bg-gray-800/98`;
  const funFactsCardClass = `group relative p-8 rounded-3xl bg-gray-800/95 border-gray-600/50 backdrop-blur-xl shadow-2xl border hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu hover:bg-gray-800/98`;
  const techCardClass = `group relative p-8 rounded-3xl bg-gray-800/95 border-gray-600/50 backdrop-blur-xl shadow-2xl border hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu hover:bg-gray-800/98`;

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Enhanced Animated Background Elements */}
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
        
        {/* Enhanced Floating Particles */}
        {[...Array(20)].map((_, i) => (
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
            {i % 3 === 0 ? (
              <Code className="w-6 h-6 text-purple-400/40 hover:text-purple-300/60 transition-colors duration-300" />
            ) : i % 3 === 1 ? (
              <Terminal className="w-6 h-6 text-blue-400/40 hover:text-blue-300/60 transition-colors duration-300" />
            ) : (
              <Cpu className="w-6 h-6 text-pink-400/40 hover:text-pink-300/60 transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            About Me
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-12 shadow-xl"></div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into reality through cutting-edge technology and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            <div className={personalCardClass}
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
              }}
              tabIndex={0}
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 8;
                const rotateY = ((x - centerX) / centerX) * 8;
                card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
              }}
              onClick={() => {
                setActiveCard('personal');
                setTimeout(() => setActiveCard(null), 2000);
              }}
            >
              {/* Enhanced glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl about-card-glow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {personalInfo.name}
                    </h3>
                    <p className="text-lg text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                      {personalInfo.year} • {personalInfo.university}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/90 border-gray-600/50 border hover:bg-gray-700/90 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <MapPin className="w-6 h-6 text-purple-600 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="text-lg text-white font-medium group-hover:text-gray-200 transition-colors duration-300">
                      {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/90 border-gray-600/50 border hover:bg-gray-700/90 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                    <Heart className="w-6 h-6 text-pink-600 group-hover:text-pink-400 transition-colors duration-300" />
                    <span className="text-lg text-white font-medium group-hover:text-gray-200 transition-colors duration-300">
                      Passionate about Innovation & AI
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-gray-800/90 border-gray-600/50 border hover:bg-gray-700/90 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <p className="text-lg leading-relaxed text-white group-hover:text-gray-200 transition-colors duration-300">
                    {personalInfo.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className={funFactsCardClass}
              tabIndex={0}
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 8;
                const rotateY = ((x - centerX) / centerX) * 8;
                let floatTransform = floatingCard === 'funfacts' ? 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' : '';
                card.style.transform = `${floatTransform} rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                setFloatingCard(null);
              }}
              onClick={() => {
                setActiveCard('funfacts');
                setTimeout(() => setActiveCard(null), 2000);
              }}
              onTouchStart={() => setFloatingCard('funfacts')}
              onTouchEnd={() => setFloatingCard(null)}
              onMouseDown={() => setFloatingCard('funfacts')}
              onMouseUp={() => setFloatingCard(null)}
              onMouseEnter={() => setFloatingCard('funfacts')}
              onFocus={() => setFloatingCard('funfacts')}
              onBlur={() => setFloatingCard(null)}
              style={floatingCard === 'funfacts' ? { transform: 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' } : {}}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl about-card-glow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                    Fun Facts & Achievements
                  </h3>
                </div>
                <div className="grid gap-4">
                  {personalInfo.funFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/90 border-gray-600/50 border hover:scale-105 hover:bg-gray-700/90 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-white group-hover:text-gray-200 transition-colors duration-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Technologies */}
          <div className="space-y-8">
            <div className={techCardClass}
              tabIndex={0}
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 8;
                const rotateY = ((x - centerX) / centerX) * 8;
                let floatTransform = floatingCard === 'tech' ? 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' : '';
                card.style.transform = `${floatTransform} rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
              }}
              onClick={() => {
                setActiveCard('tech');
                setTimeout(() => setActiveCard(null), 2000);
              }}
              onTouchStart={() => setFloatingCard('tech')}
              onTouchEnd={() => setFloatingCard(null)}
              onMouseDown={() => setFloatingCard('tech')}
              onMouseUp={() => setFloatingCard(null)}
              onMouseEnter={() => setFloatingCard('tech')}
              onFocus={() => setFloatingCard('tech')}
              onBlur={() => setFloatingCard(null)}
              style={floatingCard === 'tech' ? { transform: 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' } : {}}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl about-card-glow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    Technologies I am Familiar with
                  </h3>
                </div>

                <div className="grid gap-8">
                  {techCategories.map((category, index) => {
                    const techCategoryCardClass = `group/tech about-tech-3d animate-fade-in-up ${activeCard === 'tech' + index ? 'certificate-float certificate-z' : ''} transition-transform duration-700 group-hover/tech:-translate-y-8 group-hover/tech:scale-110 group-hover/tech:rotate-x-6 group-hover/tech:rotate-y-2 group-focus/tech:-translate-y-8 group-focus/tech:scale-110 group-focus/tech:rotate-x-6 group-focus/tech:rotate-y-2 hover:shadow-3xl hover:certificate-hover-glow bg-gray-800/90 border-gray-600/50 border rounded-2xl p-6 hover:bg-gray-700/90 hover:border-purple-500/50`;
                    return (
                      <div key={index} className={techCategoryCardClass}
                        tabIndex={0}
                        onMouseMove={e => {
                          const card = e.currentTarget;
                          const rect = card.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;
                          const rotateX = ((y - centerY) / centerY) * 8;
                          const rotateY = ((x - centerX) / centerX) * 8;
                          let floatTransform = floatingCard === 'tech' + index ? 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' : '';
                          card.style.transform = `${floatTransform} rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                        }}
                        onClick={() => {
                          setActiveCard('tech' + index);
                          setTimeout(() => setActiveCard(null), 2000);
                        }}
                        onTouchStart={() => setFloatingCard('tech' + index)}
                        onTouchEnd={() => setFloatingCard(null)}
                        onMouseDown={() => setFloatingCard('tech' + index)}
                        onMouseUp={() => setFloatingCard(null)}
                        onMouseEnter={() => setFloatingCard('tech' + index)}
                        onFocus={() => setFloatingCard('tech' + index)}
                        onBlur={() => setFloatingCard(null)}
                        style={floatingCard === 'tech' + index ? { transform: 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' } : {}}
                      >
                        <div className={`flex items-center gap-4 mb-4 group/tech about-tech-3d animate-fade-in-up
                          ${activeCard === 'tech' + index ? 'certificate-float certificate-z' : ''}
                          hover:shadow-3xl hover:-translate-y-10 hover:scale-115 hover:rotate-2 hover:certificate-hover-glow`
                        }>
                          <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover/tech:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
                            {category.icon}
                          </div>
                          <h4 className={`text-xl font-bold text-white group-hover/tech:text-transparent group-hover/tech:bg-clip-text group-hover/tech:bg-gradient-to-r group-hover/tech:${category.gradient} transition-all duration-300 cursor-pointer hover:scale-105 hover:rotate-1 transform-gpu`}>
                            {category.name}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {category.techs.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-3 rounded-full text-sm font-semibold bg-gray-700/80 text-gray-200 border border-gray-500/60 hover:bg-gray-600/80 hover:border-purple-500/50 hover:text-white hover:scale-105 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
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