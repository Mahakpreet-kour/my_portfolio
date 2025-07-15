import React from 'react';
import { Award, Trophy, AlignCenterVertical as Certificate, Users, Calendar, Star, Zap, Crown } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Achievements: React.FC = () => {
  const { darkMode } = useTheme();
  const [highlightCert, setHighlightCert] = React.useState(false);

  // Filter only certification achievements
  const certifications = achievements.filter(achievement => achievement.type === 'certification');
  // Only show the 4 main achievements in the timeline (already filtered in data)
  const mainAchievements = achievements;
  // Filter other achievements (hackathon, volunteer)
  const otherAchievements = achievements.filter(achievement => achievement.type !== 'certification');

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return <Certificate className="w-7 h-7 text-blue-400" />;
      default:
        return <Award className="w-7 h-7 text-purple-400" />;
    }
  };

  const getTypeColor = (type: string) => {
        return 'from-blue-500 via-cyan-500 to-teal-500';
  };

  const getGlowColor = (type: string) => {
        return 'shadow-blue-500/30';
  };

  // Instant scroll and highlight certificates section
  const handleViewCertificates = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const certSection = document.getElementById('certificates-section');
    if (certSection) {
      certSection.scrollIntoView({ behavior: 'auto', block: 'start' });
      setHighlightCert(true);
      setTimeout(() => setHighlightCert(false), 3000);
    }
  };

  return (
    <section id="achievements" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-gradient"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Floating Certificate/Star/Award Icons */}
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-achievement pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              zIndex: 1
            }}
          >
            {i % 3 === 0 ? (
              <Certificate className="w-6 h-6 text-blue-400/40" />
            ) : i % 3 === 1 ? (
              <Star className="w-6 h-6 text-yellow-400/40" />
            ) : (
              <Award className="w-6 h-6 text-purple-400/40" />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Professional Achievements
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-12 shadow-lg"></div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Major projects, volunteering, and hackathon milestones
          </p>
          <a
            href="#certificates-section"
            onClick={handleViewCertificates}
            className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Certificates
          </a>
        </div>

        {/* Achievement Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>

          <div className="space-y-16">
            {mainAchievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-12 animate-fade-in-up achievement-3d-card`}
                style={{
                  animationDelay: `${index * 120}ms`
                }}
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
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} flex items-center justify-center shadow-2xl ${getGlowColor(achievement.type)} hover:scale-125 transition-all duration-500 group animated-dot-glow`}>
                    {getIcon(achievement.type)}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                    {/* Pulsing ring */}
                    <div className={`absolute -inset-4 rounded-full border-2 border-gradient-to-r ${getTypeColor(achievement.type)} opacity-30 animate-ping`}></div>
                  </div>
                </div>
                {/* Achievement Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}> 
                  <div className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-110 hover:rotate-2 transform-gpu achievement-glass-card animate-3d-pop">
                    {/* Glowing border effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getTypeColor(achievement.type)} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl animated-border-glow`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(achievement.type)} shadow-lg group-hover:scale-125 transition-transform duration-300 animated-icon-glow animate-3d-pop-inner`}>
                          {getIcon(achievement.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${getTypeColor(achievement.type)} transition-all duration-300 mb-2 animated-title-gradient`}>
                            {achievement.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-sm font-semibold text-gray-400">
                              {achievement.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-6 animated-card-fade animate-3d-pop-inner">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {achievement.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-gray-300 border border-white/20 capitalize animated-badge-glow animate-3d-pop-inner">
                          <Zap className="w-4 h-4" />
                          {achievement.type}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animated-star-glow animate-3d-pop-inner" />
                          ))}
                        </div>
                        {achievement.certificateLink && (
                          <a
                            href={achievement.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold text-xs shadow-lg hover:scale-105 transition-transform duration-300"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Section: Other Achievements */}
        {/* Certificates Section */}
        {certifications.length > 0 && (
          <div
            id="certificates-section"
            className={`mt-32 relative z-10 transition-shadow duration-500 ${highlightCert ? 'ring-4 ring-blue-400/70 shadow-2xl' : ''}`}
          >
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full mb-6 shadow-2xl">
                <Certificate className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Below are the certificates
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                All professional certifications earned
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.id + idx}
                  className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 hover:rotate-1 transform-gpu achievement-glass-card animate-3d-pop"
                  style={{ animationDelay: `${idx * 100}ms` }}
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
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 shadow-lg group-hover:scale-125 transition-transform duration-300">
                      <Certificate className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-400">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                    <p className="text-gray-300 leading-relaxed text-base">
                      {cert.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold bg-white/10 text-gray-300 border border-white/20 capitalize">
                      <Certificate className="w-4 h-4" />
                      {cert.type}
                    </span>
                    {cert.certificateLink && (
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold text-xs shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative text-center p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 achievement-3d-card hover:scale-110 hover:rotate-2">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500 animated-dot-glow">
                <Certificate className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">
                8
              </h3>
              <p className="text-lg font-semibold text-gray-300">
                Professional Certifications
              </p>
            </div>
          </div>

          <div className="group relative text-center p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">
                3+
              </h3>
              <p className="text-lg font-semibold text-gray-300">
                Years Experience
              </p>
            </div>
          </div>

          <div className="group relative text-center p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-3">
                10+
              </h3>
              <p className="text-lg font-semibold text-gray-300">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;