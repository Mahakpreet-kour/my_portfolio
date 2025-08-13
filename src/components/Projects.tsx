import React, { useState, useRef } from 'react';
import { Code, Cpu, Cloud, Layers, Target, Zap, Sparkles, Brain, Rocket, Github, ExternalLink, Search, Bot, Terminal, Globe, Award, Star, AlignCenterVertical as Certificate } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const categoryIcons: Record<string, JSX.Element> = {
  main: <Bot className="w-6 h-6" />,
  python: <Terminal className="w-6 h-6" />,
  'html-js': <Globe className="w-6 h-6" />,
};

const Projects: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [randomProjectId, setRandomProjectId] = useState<string | null>(null);
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'main', name: 'Main Projects', count: projects.filter(p => p.category === 'main').length },
    { id: 'python', name: 'Python', count: projects.filter(p => p.category === 'python').length },
    { id: 'html-js', name: 'HTML & JS', count: projects.filter(p => p.category === 'html-js').length },
  ];

  const filteredProjects = (activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  ).filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.techStack.some(tech => tech.toLowerCase().includes(search.toLowerCase())) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      main: 'from-purple-600 to-pink-600',
      python: 'from-blue-600 to-cyan-600',
      'html-js': 'from-orange-600 to-red-600'
    };
    return colors[category as keyof typeof colors] || 'from-purple-600 to-pink-600';
  };

  const getPriorityBadge = (priority: string) => {
    const badges = {
      high: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-200 dark:border-red-700/50',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-200 dark:border-yellow-700/50',
      low: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-200 dark:border-green-700/50'
    };
    return badges[priority as keyof typeof badges] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  // Gentle float effect on card click
  const handleCardClick = (id: string, link: string | undefined) => {
    setActiveCard(id);
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
    setTimeout(() => setActiveCard(null), 3000);
  };

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-pink-100 via-blue-100 via-60% to-yellow-100'}`}>
      {/* Ultra-Professional Animated Background */}
      <div className="absolute inset-0">
        {/* Vibrant multi-stop gradient */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 via-60% to-purple-900 opacity-95' : 'bg-gradient-to-br from-pink-100 via-blue-100 via-60% to-yellow-100 opacity-90'}`}></div>
        {/* Subtle radial grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: darkMode ? `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.10) 1px, transparent 0)` : `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        {/* Animated conic gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: darkMode ? 'conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.08) 0deg, rgba(168,85,247,0.10) 120deg, rgba(253,224,71,0.10) 240deg, rgba(16,185,129,0.10) 360deg)' : 'conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.10) 0deg, rgba(59,130,246,0.10) 120deg, rgba(253,224,71,0.10) 240deg, rgba(255,255,255,0.10) 360deg)',
          animation: 'rotate 18s linear infinite'
        }}></div>
        {/* Glowing Orbs - more variety, premium colors */}
        <div className={`absolute top-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-purple-600/30' : 'bg-pink-300/30'}`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-cyan-400/20' : 'bg-blue-200/30'}`} style={{ animationDelay: '1.2s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-blue-600/25' : 'bg-yellow-200/25'}`} style={{ animationDelay: '2.2s' }}></div>
        <div className={`absolute top-1/3 left-1/3 w-80 h-80 rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-emerald-400/15' : 'bg-purple-200/20'}`} style={{ animationDelay: '2.8s' }}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-yellow-300/10' : 'bg-white/30'}`} style={{ animationDelay: '3.2s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-60 h-60 rounded-full filter blur-2xl animate-pulse ${darkMode ? 'bg-white/10' : 'bg-pink-100/30'}`} style={{ animationDelay: '4.2s' }}></div>
        {/* Floating Certificate/Star/Award Icons - with gold/white star */}
        {[...Array(12)].map((_, i) => (
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
            {i % 4 === 0 ? (
              <Certificate className={`w-6 h-6 ${darkMode ? 'text-cyan-400/40' : 'text-pink-400/30'} drop-shadow-lg`} />
            ) : i % 4 === 1 ? (
              <Star className={`w-6 h-6 ${darkMode ? 'text-yellow-300/40' : 'text-yellow-400/30'} drop-shadow-lg`} />
            ) : i % 4 === 2 ? (
              <Award className={`w-6 h-6 ${darkMode ? 'text-emerald-400/40' : 'text-emerald-500/30'} drop-shadow-lg`} />
            ) : (
              <Rocket className={`w-6 h-6 ${darkMode ? 'text-purple-400/40' : 'text-purple-500/30'} drop-shadow-lg`} />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`}>
            My Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Enhanced Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
          {/* Search Bar */}
          <div className={`relative flex-1 max-w-md ${isSearchFocused ? 'scale-105' : 'scale-100'} transition-transform duration-300`}>
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isSearchFocused ? 'text-purple-500' : darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`} />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 ${isSearchFocused ? 'border-purple-500' : darkMode ? 'border-gray-600' : 'border-gray-300'} ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'} focus:outline-none focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 shadow-lg`}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-purple-500'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-500'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const htmlJsRepo = 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git';
            return (
            <div
              key={project.id}
              ref={el => (projectRefs.current[project.id] = el)}
              tabIndex={0}
              role="region"
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * 10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `perspective(1000px) translateY(-16px) scale(1.06) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.transition = 'transform 0.18s cubic-bezier(0.4,0.2,0.2,1), background 0.4s cubic-bezier(0.4,0.2,0.2,1)';
                card.style.transformStyle = 'preserve-3d';
                card.style.willChange = 'transform, background';
                card.style.background = 'linear-gradient(135deg, #a21caf 0%, #2563eb 50%, #ec4899 100%)';
              }}
              onMouseLeave={e => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
                card.style.transition = 'transform 0.4s cubic-bezier(0.4,0.2,0.2,1), background 0.6s cubic-bezier(0.4,0.2,0.2,1)';
                card.style.background = darkMode
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)';
              }}
              onMouseEnter={e => {
                const card = e.currentTarget;
                card.style.transition = 'transform 0.18s cubic-bezier(0.4,0.2,0.2,1), background 0.4s cubic-bezier(0.4,0.2,0.2,1)';
                card.style.background = 'linear-gradient(135deg, #a21caf 0%, #2563eb 50%, #ec4899 100%)';
              }}
              onClick={() => {
                if (project.category === 'html-js') {
                  window.open(htmlJsRepo, '_blank', 'noopener,noreferrer');
                } else if (project.githubLink) {
                  window.open(project.githubLink, '_blank', 'noopener,noreferrer');
                }
              }}
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                animationDelay: `${index * 100}ms`,
                zIndex: 2,
                borderRadius: '1.5rem',
                boxShadow: darkMode
                  ? '0 8px 32px 0 rgba(31, 41, 55, 0.37)'
                  : '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
                transition: 'transform 0.18s cubic-bezier(0.4,0.2,0.2,1)',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                cursor: 'pointer',
                position: 'relative',
                padding: '2.5rem',
                marginBottom: '2rem',
                minHeight: '340px',
                overflow: 'visible',
              }}
              aria-label={project.title}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl about-card-glow"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Rocket className="w-8 h-8 text-white" />
                      </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all duration-300 mb-2`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${darkMode ? 'text-blue-200' : 'text-purple-600'}`}>{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/70 border border-blue-200/20' : 'bg-white/40 border border-white/20'} mb-6`}>
                  <p className={`${darkMode ? 'text-white' : 'text-gray-900'} leading-relaxed text-lg`}>
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${darkMode ? 'bg-blue-900/60 text-blue-200 border border-blue-700' : 'bg-white/40 text-purple-600 border border-white/20'} capitalize`}>
                    <Rocket className="w-4 h-4" />
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`w-4 h-4 ${darkMode ? 'text-yellow-300' : 'text-yellow-400'}`}>★</span>
                    ))}
                </div>
                  <div className="flex items-center gap-2 ml-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                        title="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-white dark:text-gray-900" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold text-xs shadow-lg hover:scale-105 transition-transform duration-300`}
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-full mb-8">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">No Projects Found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;