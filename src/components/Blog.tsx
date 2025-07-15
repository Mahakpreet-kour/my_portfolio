import React, { useState } from 'react';
import { Book, Search, ExternalLink, Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Blog: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.description.toLowerCase().includes(search.toLowerCase()) ||
                         post.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Docker & DevOps': 'from-blue-600 to-cyan-600',
      'Python & Automation': 'from-green-600 to-emerald-600',
      'Linux & System Admin': 'from-orange-600 to-red-600',
      'Testing & DevOps': 'from-purple-600 to-pink-600',
      'Machine Learning & Docker': 'from-indigo-600 to-violet-600',
      'Python & DevOps': 'from-teal-600 to-cyan-600',
      'Web Development & Docker': 'from-rose-600 to-pink-600'
    };
    return colors[category as keyof typeof colors] || 'from-purple-600 to-pink-600';
  };

  return (
    <section id="blog" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900' : 'bg-gradient-to-br from-pink-100 via-blue-100 via-60% to-yellow-100'}`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Vibrant multi-stop gradient */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900 opacity-95' : 'bg-gradient-to-br from-pink-100 via-blue-100 via-60% to-yellow-100 opacity-90'}`}></div>
        {/* Subtle radial grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: darkMode ? `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.10) 1px, transparent 0)` : `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        {/* Animated conic gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: darkMode ? 'conic-gradient(from 180deg at 50% 50%, rgba(139,92,246,0.10) 0deg, rgba(16,185,129,0.10) 120deg, rgba(253,224,71,0.10) 240deg, rgba(236,72,153,0.10) 360deg)' : 'conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.10) 0deg, rgba(59,130,246,0.10) 120deg, rgba(253,224,71,0.10) 240deg, rgba(255,255,255,0.10) 360deg)',
          animation: 'rotate 18s linear infinite'
        }}></div>
        {/* Glowing Orbs - more variety, premium colors */}
        <div className={`absolute top-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-indigo-600/30' : 'bg-pink-300/30'}`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-violet-600/20' : 'bg-blue-200/30'}`} style={{ animationDelay: '1.2s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-emerald-400/15' : 'bg-yellow-200/25'}`} style={{ animationDelay: '2.2s' }}></div>
        <div className={`absolute top-1/3 left-1/3 w-80 h-80 rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-yellow-300/10' : 'bg-purple-200/20'}`} style={{ animationDelay: '2.8s' }}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full filter blur-3xl animate-pulse ${darkMode ? 'bg-white/10' : 'bg-white/30'}`} style={{ animationDelay: '3.2s' }}></div>
        <div className={`absolute top-1/2 left-1/4 w-60 h-60 rounded-full filter blur-2xl animate-pulse ${darkMode ? 'bg-white/10' : 'bg-pink-100/30'}`} style={{ animationDelay: '4.2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 flex items-center justify-center gap-2">
            {/* Medium SVG Icon */}
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 40 40"><ellipse cx="10" cy="20" rx="8" ry="12"/><ellipse cx="30" cy="20" rx="8" ry="12"/><ellipse cx="20" cy="20" rx="4" ry="12"/></svg>
            <Book className="w-8 h-8 text-white opacity-80" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            Technical Blog
          </h2>
          <div className="w-40 h-2 mx-auto rounded-full mb-12 shadow-lg"
            style={darkMode ? { background: 'linear-gradient(to right, #2563eb, #06b6d4, #14b8a6)' } : { background: 'linear-gradient(to right, #000, #222, #444)' }}
          ></div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sharing knowledge and experiences in AI, DevOps, and cloud technologies
          </p>
        </div>

        {/* Enhanced Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-16">
        {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
                <span className="relative z-10">
              {category === 'all' ? 'All Posts' : category}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </button>
          ))}
          </div>

          {/* Enhanced Search Bar */}
          <div className="relative">
            <div className={`relative transition-all duration-300 ${
              isSearchFocused ? 'scale-105' : 'scale-100'
            }`}>
              <input
                type="text"
                placeholder="Search articles by title, description, or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md text-gray-300 rounded-full border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
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
                card.style.background = 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #ec4899 100%)';
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
                card.style.background = 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #ec4899 100%)';
              }}
              onClick={e => {
                setActiveCard(post.id);
                setTimeout(() => setActiveCard(null), 2000);
              }}
              onTouchStart={() => setActiveCard(post.id)}
              onTouchEnd={() => setActiveCard(null)}
              onMouseDown={() => setActiveCard(post.id)}
              onMouseUp={() => setActiveCard(null)}
              onFocus={() => setActiveCard(post.id)}
              onBlur={() => setActiveCard(null)}
              className="rounded-3xl shadow-2xl"
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                zIndex: 2,
                borderRadius: '1.5rem',
                boxShadow: darkMode
                  ? '0 8px 32px 0 rgba(31, 41, 55, 0.37)'
                  : '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
                transition: 'transform 0.18s cubic-bezier(0.4,0.2,0.2,1), background 0.4s cubic-bezier(0.4,0.2,0.2,1)',
                transformStyle: 'preserve-3d',
                willChange: 'transform, background',
                cursor: 'pointer',
                position: 'relative',
                padding: '2.5rem',
                marginBottom: '2rem',
                minHeight: '340px',
                overflow: 'visible',
              }}
              aria-label={post.title}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl about-card-glow"></div>
              {/* Glass overlay for extra pop */}
              {!darkMode && (
                <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/20 pointer-events-none"></div>
              )}
              <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                <span className={`p-4 rounded-2xl shadow-lg mb-4 flex items-center justify-center gap-2 ${darkMode ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'}`}
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 40 40"><ellipse cx="10" cy="20" rx="8" ry="12"/><ellipse cx="30" cy="20" rx="8" ry="12"/><ellipse cx="20" cy="20" rx="4" ry="12"/></svg>
                  <Book className="w-6 h-6 text-white opacity-80" />
                </span>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 gradient-text-secondary`}>{post.title}</h3>
                <p className={`${darkMode ? 'text-gray-100' : 'text-gray-900'} text-sm mb-6 line-clamp-3`}>
                  {post.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-sm font-medium ${darkMode ? 'text-cyan-100' : 'text-purple-600'}`}>{post.category}</span>
                </div>
                <div className="flex items-center justify-between w-full mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${darkMode ? 'text-cyan-100' : 'text-purple-600'}`}>{post.date}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${darkMode ? 'text-cyan-100' : 'text-purple-600'}`}>{post.readTime}</span>
                      </div>
                    )}
                  </div>
                  <div className={`flex items-center gap-2 ${darkMode ? 'text-cyan-100' : 'text-purple-600'} group-hover:text-pink-600 transition-colors`}>
                    <span className="text-sm font-medium">Read More</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* No Posts Found */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-full mb-8">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">No Articles Found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 