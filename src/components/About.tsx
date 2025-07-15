import React, { useState } from 'react';
import { MapPin, GraduationCap, Heart, Lightbulb, Code, Rocket, Sparkles, Brain, Target } from 'lucide-react';
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
      name: 'Full-Stack Development', 
      techs: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Flask', 'APIs', 'Databases'],
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

  // Card class helpers for hover/click float/glow
  const personalCardClass = `group relative p-10 rounded-3xl about-card-glass animate-fade-in-up ${activeCard === 'personal' ? 'certificate-float certificate-z' : ''} transition-transform duration-700 group-hover:-translate-y-8 group-hover:scale-110 group-hover:rotate-x-6 group-hover:rotate-y-2 group-focus:-translate-y-8 group-focus:scale-110 group-focus:rotate-x-6 group-focus:rotate-y-2 group-focus-visible:-translate-y-8 group-focus-visible:scale-110 group-focus-visible:rotate-x-6 group-focus-visible:rotate-y-2 group-active:-translate-y-8 group-active:scale-110 group-active:rotate-x-6 group-active:rotate-y-2 hover:shadow-3xl hover:certificate-hover-glow`;
  const funFactsCardClass = `group relative p-10 rounded-3xl about-card-glass animate-fade-in-up ${activeCard === 'funfacts' ? 'certificate-float certificate-z' : ''} transition-transform duration-700 group-hover:-translate-y-8 group-hover:scale-110 group-hover:rotate-x-6 group-hover:rotate-y-2 group-focus:-translate-y-8 group-focus:scale-110 group-focus:rotate-x-6 group-focus:rotate-y-2 hover:shadow-3xl hover:certificate-hover-glow`;
  const techCardClass = `group relative p-10 rounded-3xl about-card-glass animate-fade-in-up ${activeCard === 'tech' ? 'certificate-float certificate-z' : ''} transition-transform duration-700 group-hover:-translate-y-8 group-hover:scale-110 group-hover:rotate-x-6 group-hover:rotate-y-2 group-focus:-translate-y-8 group-focus:scale-110 group-focus:rotate-x-6 group-focus:rotate-y-2 hover:shadow-3xl hover:certificate-hover-glow`;

  return (
    <section id="about" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-100'}`}>
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
        <div className="text-center mb-24">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-6xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`}>
            About Me
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-12 shadow-xl"></div>
          <p className={`text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
            Transforming ideas into reality through cutting-edge technology and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            <div className={personalCardClass}
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)'
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
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl about-card-glow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-2`}>
                      {personalInfo.name}
                    </h3>
                    <p className={`text-lg text-purple-600 dark:text-purple-400 font-semibold`}>
                      {personalInfo.year} • {personalInfo.university}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30' : 'bg-gradient-to-r from-purple-100/80 to-pink-100/80 border border-purple-300/50'}`}>
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <span className={`text-lg text-gray-700 dark:text-gray-300 font-medium`}>
                      {personalInfo.location}
                    </span>
                  </div>
                  <div className={`flex items-center gap-4 p-4 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/30' : 'bg-gradient-to-r from-pink-100/80 to-red-100/80 border border-pink-300/50'}`}>
                    <Heart className="w-6 h-6 text-pink-600" />
                    <span className={`text-lg text-gray-700 dark:text-gray-300 font-medium`}>
                      Passionate about Innovation & AI
                    </span>
                  </div>
                </div>

                <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-gray-700/50 border-gray-500/40' : 'bg-gradient-to-r from-blue-50/90 to-purple-50/90 border-blue-300/60'} border`}>
                  <p className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300`}>
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
              onMouseLeave={() => setFloatingCard(null)}
              onFocus={() => setFloatingCard('funfacts')}
              onBlur={() => setFloatingCard(null)}
              style={floatingCard === 'funfacts' ? { transform: 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' } : {}}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl about-card-glow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 dark:text-white`}>
                    Fun Facts & Achievements
                  </h3>
                </div>
                <div className="grid gap-4">
                  {personalInfo.funFacts.map((fact, index) => (
                    <div key={index} className={`flex items-start gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-700/60 border-gray-500/40' : 'bg-gradient-to-r from-yellow-50/90 to-orange-50/90 border-yellow-300/60'} border hover:scale-105 transition-transform duration-300`}>
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <span className={`text-gray-700 dark:text-gray-300 font-medium`}>{fact}</span>
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
              onMouseLeave={() => setFloatingCard(null)}
              onFocus={() => setFloatingCard('tech')}
              onBlur={() => setFloatingCard(null)}
              style={floatingCard === 'tech' ? { transform: 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' } : {}}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl about-card-glow"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-3xl font-bold text-gray-900 dark:text-white`}>
                    Technologies I Master
                  </h3>
                </div>

                <div className="grid gap-8">
                  {techCategories.map((category, index) => {
                    const techCategoryCardClass = `group/tech about-tech-3d animate-fade-in-up ${activeCard === 'tech' + index ? 'certificate-float certificate-z' : ''} transition-transform duration-700 group-hover/tech:-translate-y-8 group-hover/tech:scale-110 group-hover/tech:rotate-x-6 group-hover/tech:rotate-y-2 group-focus/tech:-translate-y-8 group-focus/tech:scale-110 group-focus/tech:rotate-x-6 group-focus/tech:rotate-y-2 hover:shadow-3xl hover:certificate-hover-glow`;
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
                        onMouseLeave={() => setFloatingCard(null)}
                        onFocus={() => setFloatingCard('tech' + index)}
                        onBlur={() => setFloatingCard(null)}
                        style={floatingCard === 'tech' + index ? { transform: 'translateY(-2rem) scale(1.10) rotateX(-6deg) rotateY(2deg)' } : {}}
                      >
                        <div className={`flex items-center gap-4 mb-4 group/tech about-tech-3d animate-fade-in-up
                          ${activeCard === 'tech' + index ? 'certificate-float certificate-z' : ''}
                          hover:shadow-3xl hover:-translate-y-10 hover:scale-115 hover:rotate-2 hover:certificate-hover-glow`
                        }>
                          <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl shadow-lg group-hover/tech:scale-110 transition-transform duration-300`}>
                            {category.icon}
                          </div>
                          <h4 className={`text-xl font-bold text-gray-900 dark:text-white group-hover/tech:text-transparent group-hover/tech:bg-clip-text group-hover/tech:bg-gradient-to-r group-hover/tech:${category.gradient} transition-all duration-300`}>
                            {category.name}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {category.techs.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-4 py-3 rounded-full text-sm font-semibold bg-gray-100/90 text-gray-800 border border-gray-300/70 dark:bg-gray-700/80 dark:text-gray-200 dark:border-gray-500/60`}
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