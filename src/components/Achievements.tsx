import React from 'react';
import { Award, Trophy, AlignCenterVertical as Certificate, Users, Calendar, Star, Zap, Crown } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Achievements: React.FC = () => {
  const { darkMode } = useTheme();

  const getIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Trophy className="w-7 h-7 text-yellow-400" />;
      case 'certification':
        return <Certificate className="w-7 h-7 text-blue-400" />;
      case 'volunteer':
        return <Users className="w-7 h-7 text-green-400" />;
      default:
        return <Award className="w-7 h-7 text-purple-400" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'from-yellow-500 via-orange-500 to-red-500';
      case 'certification':
        return 'from-blue-500 via-cyan-500 to-teal-500';
      case 'volunteer':
        return 'from-green-500 via-emerald-500 to-lime-500';
      default:
        return 'from-purple-500 via-pink-500 to-red-500';
    }
  };

  const getGlowColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'shadow-yellow-500/30';
      case 'certification':
        return 'shadow-blue-500/30';
      case 'volunteer':
        return 'shadow-green-500/30';
      default:
        return 'shadow-purple-500/30';
    }
  };

  return (
    <section id="achievements" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white via-purple-50 to-pink-50'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-yellow-900/20' : 'bg-yellow-200/30'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-200/30'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${darkMode ? 'bg-green-900/20' : 'bg-green-200/30'} blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Achievement Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          >
            <Star className={`w-4 h-4 ${darkMode ? 'text-yellow-400/20' : 'text-yellow-500/30'}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block p-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-6xl md:text-7xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600`}>
            Achievements & Recognition
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 mx-auto rounded-full mb-12 shadow-lg"></div>
          <p className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Recognition for technical excellence, innovation, and community contributions
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 rounded-full shadow-lg`}></div>

          <div className="space-y-16">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-12`}
              >
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} flex items-center justify-center shadow-2xl ${getGlowColor(achievement.type)} hover:scale-125 transition-all duration-500 group`}>
                    {getIcon(achievement.type)}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Pulsing ring */}
                    <div className={`absolute -inset-4 rounded-full border-2 border-gradient-to-r ${getTypeColor(achievement.type)} opacity-30 animate-ping`}></div>
                  </div>
                </div>

                {/* Enhanced Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className={`group relative p-8 rounded-3xl ${
                    darkMode ? 'bg-gray-900/80' : 'bg-white/90'
                  } backdrop-blur-xl shadow-2xl border ${
                    darkMode ? 'border-gray-700/50' : 'border-white/50'
                  } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}
                  style={{
                    background: darkMode 
                      ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)'
                  }}>
                    {/* Glowing border effect */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getTypeColor(achievement.type)} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(achievement.type)} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {getIcon(achievement.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${getTypeColor(achievement.type)} transition-all duration-300 mb-2`}>
                            {achievement.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-purple-600" />
                            <span className={`text-sm font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                              {achievement.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gradient-to-r from-gray-50 to-purple-50'} border ${darkMode ? 'border-gray-700/30' : 'border-purple-200/50'} mb-6`}>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-lg`}>
                          {achievement.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                          darkMode 
                            ? 'bg-gray-700/70 text-gray-300 border border-gray-600/50' 
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        } capitalize hover:bg-gradient-to-r hover:${getTypeColor(achievement.type)} hover:text-white hover:border-transparent transition-all duration-300`}>
                          <Zap className="w-4 h-4" />
                          {achievement.type}
                        </span>
                        
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-900/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300`}>
                1
              </h3>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Hackathon Achievement
              </p>
            </div>
          </div>

          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-900/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Certificate className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300`}>
                5
              </h3>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Professional Certifications
              </p>
            </div>
          </div>

          <div className={`group relative text-center p-10 rounded-3xl ${
            darkMode ? 'bg-gray-900/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-8 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300`}>
                2
              </h3>
              <p className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Volunteer Contributions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;