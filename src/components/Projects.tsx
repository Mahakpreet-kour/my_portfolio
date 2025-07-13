import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { projects } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const categoryIcons: Record<string, JSX.Element> = {
  main: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  ),
  python: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  ),
  'html-js': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  ),
};

const Projects: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState<'all' | 'main' | 'python' | 'html-js'>('all');
  const [modalProject, setModalProject] = useState<any | null>(null);
  const [search, setSearch] = useState('');
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

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
    project.techStack.some(tech => tech.toLowerCase().includes(search.toLowerCase()))
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      main: 'from-purple-600 to-pink-600',
      python: 'from-green-600 to-emerald-600',
      'html-js': 'from-orange-600 to-red-600'
    };
    return colors[category as keyof typeof colors] || 'from-purple-600 to-pink-600';
  };

  const getPriorityBadge = (priority: string) => {
    const badges = {
      high: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700',
      low: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700'
    };
    return badges[priority as keyof typeof badges] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  // Timeline for main projects
  const mainProjects = projects.filter(p => p.category === 'main');

  // Random project button
  const showRandomProject = () => {
    const pool = filteredProjects.length > 0 ? filteredProjects : projects;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setModalProject(random);
    triggerConfetti();
  };

  // Confetti animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Additional burst after a short delay
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 150);
  };

  // Open project modal with confetti
  const openProjectModal = (project: any) => {
    setModalProject(project);
    triggerConfetti();
  };

  return (
    <section id="projects" className={`py-32 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-100'}`}>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className={`text-6xl md:text-7xl font-bold mb-8 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600`}>
            My Projects
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-12 shadow-xl"></div>
          <p className={`text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed`}>
            A collection of my work showcasing expertise in AI, machine learning, web development, and automation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600 backdrop-blur-sm'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Search Bar and Random Project Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search by project name or technology..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-5 py-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm shadow-lg"
          />
          <button
            onClick={showRandomProject}
            className="mt-2 md:mt-0 px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
          >
            🎲 Random Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-1 border border-gray-200/50 dark:border-slate-700/50 ${
                hoveredPost === project.id ? 'ring-4 ring-purple-500/50' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
              onClick={() => openProjectModal(project)}
              onMouseEnter={() => setHoveredPost(project.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Enhanced 3D Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
              
              {/* 3D Transform on Hover */}
              <div className="relative transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Project</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}>
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Priority Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(project.priority)}`}>
                      {project.priority.toUpperCase()}
                    </span>
                  </div>

                  {/* Completion Status */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.completed 
                        ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700' 
                        : 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700'
                    } border`}>
                      {project.completed ? 'COMPLETED' : 'IN PROGRESS'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-200 dark:border-purple-700">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
          <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
            darkMode ? 'bg-gray-800/95 border-gray-600/50' : 'bg-white/95 border-purple-200/50'
          } backdrop-blur-xl border`}>
            <button
              className="absolute top-6 right-6 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
              onClick={() => setModalProject(null)}
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {/* Project Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${getCategoryColor(modalProject.category)} rounded-2xl shadow-xl`}>
                    {categoryIcons[modalProject.category] || categoryIcons.main}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {modalProject.title}
                    </h2>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(modalProject.category)} text-white shadow-lg`}>
                        {modalProject.category.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityBadge(modalProject.priority)}`}>
                        {modalProject.priority.toUpperCase()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        modalProject.status === 'completed' 
                          ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700' 
                          : modalProject.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700'
                          : 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'
                      }`}>
                        {modalProject.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {modalProject.description}
                </p>
              </div>

              {/* Project Image */}
              {modalProject.image && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={modalProject.image}
                    alt={modalProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {modalProject.techStack.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {modalProject.githubLink && (
                  <a
                    href={modalProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                {modalProject.liveLink && (
                  <a
                    href={modalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;