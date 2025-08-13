import React, { useState } from 'react';
import { Trophy, Award, Star, Target, Calendar, ExternalLink, Sparkles, Rocket, Medal, Crown } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Achievements: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeAchievement, setActiveAchievement] = useState<string | null>(null);
  const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(null);

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Trophy className="w-8 h-8 text-yellow-500" />;
      case 'certification':
        return <Award className="w-8 h-8 text-blue-500" />;
      case 'volunteer':
        return <Star className="w-8 h-8 text-green-500" />;
      default:
        return <Medal className="w-8 h-8 text-purple-500" />;
    }
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'from-yellow-500 to-orange-500';
      case 'certification':
        return 'from-blue-500 to-cyan-500';
      case 'volunteer':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Achievement Icons */}
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
              <Trophy className="w-6 h-6 text-yellow-400/40 hover:text-yellow-300/60 transition-colors duration-300" />
            ) : i % 4 === 1 ? (
              <Award className="w-6 h-6 text-blue-400/40 hover:text-blue-300/60 transition-colors duration-300" />
            ) : i % 4 === 2 ? (
              <Star className="w-6 h-6 text-green-400/40 hover:text-green-300/60 transition-colors duration-300" />
            ) : (
              <Crown className="w-6 h-6 text-purple-400/40 hover:text-purple-300/60 transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
            Achievements & Recognition
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Celebrating milestones and accomplishments in my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group relative p-8 rounded-3xl bg-gray-800/95 border border-gray-600/50 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-700 hover:-translate-y-4 hover:scale-105 transform-gpu cursor-pointer ${
                activeAchievement === achievement.id ? 'ring-4 ring-purple-500/50' : ''
              }`}
              onMouseEnter={() => setHoveredAchievement(achievement.id)}
              onMouseLeave={() => setHoveredAchievement(null)}
              onClick={() => {
                setActiveAchievement(achievement.id);
                setTimeout(() => setActiveAchievement(null), 2000);
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
              }}
            >
              {/* Enhanced glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getAchievementColor(achievement.type)} opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Achievement Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 bg-gradient-to-r ${getAchievementColor(achievement.type)} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
                    {getAchievementIcon(achievement.type)}
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getAchievementColor(achievement.type)} text-white capitalize`}>
                      {achievement.type}
                    </span>
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <Calendar className="w-4 h-4" />
                    <span>{achievement.date}</span>
                  </div>

                  {/* Certificate Link if available */}
                  {achievement.certificateLink && (
                    <a
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 group/link"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>

                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
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
            Ready for the Next Challenge
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Always pushing boundaries and seeking new opportunities to grow and innovate
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;