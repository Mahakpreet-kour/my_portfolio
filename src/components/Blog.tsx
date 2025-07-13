import React, { useState } from 'react';
import { blogPosts } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Blog: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.description.toLowerCase().includes(search.toLowerCase()) ||
                         post.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Linux & DevOps': 'from-green-600 to-emerald-600',
      'Docker & Cloud': 'from-blue-600 to-indigo-600',
      'Cloud & DevOps': 'from-purple-600 to-pink-600',
      'DevOps & CI/CD': 'from-orange-600 to-red-600',
      'Git & Version Control': 'from-gray-600 to-slate-700',
      'Python Automation': 'from-yellow-600 to-orange-600'
    };
    return colors[category as keyof typeof colors] || 'from-purple-600 to-pink-600';
  };

  return (
    <section id="blog" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-100'}`}>
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
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className={`text-6xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`}>
            Blog & Insights
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-12 shadow-xl"></div>
          <p className={`text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
            Technical articles and insights on AI, DevOps, and modern development practices
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-5 py-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm shadow-lg"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600 backdrop-blur-sm'
              }`}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 border border-gray-200/50 dark:border-slate-700/50 cursor-pointer`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Enhanced 3D Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(post.category)} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
              
              {/* 3D Transform on Hover */}
              <div className="relative transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white rounded-full text-xs font-semibold shadow-lg`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold transition-colors flex items-center gap-1 group-hover:translate-x-1">
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No blog posts found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog; 