import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { projects } from '../data/portfolioData';

const categoryIcons: Record<string, JSX.Element> = {
  main: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  ),
  python: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C7.03 2 2.5 6.03 2.5 11c0 2.5 1.5 4.5 4 4.5h11c2.5 0 4-2 4-4.5C21.5 6.03 16.97 2 12 2z" /></svg>
  ),
  linux: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 15c1.333 1.333 4.667 1.333 6 0" stroke="currentColor" strokeWidth="2" /><circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" /></svg>
  ),
  docker: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="2" /><rect x="7" y="7" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="13" y="7" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" /></svg>
  ),
  javascript: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M7 17v-4m0 0V7m0 6h2m4 4v-4m0 0V7m0 6h2" stroke="currentColor" strokeWidth="2" /></svg>
  ),
  streamlit: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2l3 7h-6l3-7zm0 20c-4.418 0-8-3.582-8-8 0-1.657.672-3.157 1.757-4.243l1.414 1.414A5.978 5.978 0 006 12c0 3.314 2.686 6 6 6s6-2.686 6-6c0-.828-.168-1.618-.471-2.343l1.414-1.414A7.963 7.963 0 0120 12c0 4.418-3.582 8-8 8z" stroke="currentColor" strokeWidth="2" /></svg>
  ),
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'main' | 'python' | 'linux' | 'docker' | 'javascript' | 'streamlit'>('all');
  const [modalProject, setModalProject] = useState<any | null>(null);
  const [search, setSearch] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'main', name: 'Main Projects', count: projects.filter(p => p.category === 'main').length },
    { id: 'python', name: 'Python', count: projects.filter(p => p.category === 'python').length },
    { id: 'linux', name: 'Linux', count: projects.filter(p => p.category === 'linux').length },
    { id: 'docker', name: 'Docker', count: projects.filter(p => p.category === 'docker').length },
    { id: 'javascript', name: 'JavaScript', count: projects.filter(p => p.category === 'javascript').length },
    { id: 'streamlit', name: 'Streamlit', count: projects.filter(p => p.category === 'streamlit').length },
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
      main: 'from-purple-500 to-pink-500',
      python: 'from-blue-500 to-cyan-500',
      linux: 'from-green-500 to-emerald-500',
      docker: 'from-blue-600 to-indigo-600',
      javascript: 'from-yellow-500 to-orange-500',
      streamlit: 'from-red-500 to-pink-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getPriorityBadge = (priority: string) => {
    const badges = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200'
    };
    return badges[priority as keyof typeof badges] || 'bg-gray-100 text-gray-800';
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
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated Category Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.slice(1).map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as any)}
            className={`group flex flex-col items-center px-6 py-4 rounded-2xl shadow-lg border-2 border-transparent bg-white dark:bg-slate-800 transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:shadow-2xl ${
              activeCategory === category.id ? 'ring-4 ring-purple-300 scale-110' : ''
            }`}
          >
            <span className={`mb-2 bg-gradient-to-r ${getCategoryColor(category.id)} text-white rounded-full p-3 shadow-lg group-hover:scale-125 transition-transform`}>{categoryIcons[category.id]}</span>
            <span className="font-bold text-lg text-gray-800 dark:text-white mb-1">{category.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-300">{category.count} projects</span>
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
          className="w-full md:w-2/3 px-5 py-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 shadow"
        />
        <button
          onClick={showRandomProject}
          className="mt-2 md:mt-0 px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          🎲 Random Project
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as any)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
            onClick={() => openProjectModal(project)}
          >
            {/* Floating 3D Effect Container */}
            <div className="relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
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
                <div className="absolute bottom-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${project.completed ? 'bg-green-500' : 'bg-yellow-500'} shadow-lg`}></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Problem Statement */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem Solved:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    {project.problem}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Main Projects Timeline */}
      {activeCategory === 'main' && (
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Main Projects Timeline</h3>
          <ol className="relative border-l-4 border-purple-300 dark:border-purple-700">
            {mainProjects.map((proj, i) => (
              <li key={proj.id} className="mb-10 ml-6">
                <span className={`absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r ${getCategoryColor(proj.category)} rounded-full -left-4 ring-4 ring-white dark:ring-slate-900`}></span>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                  <h4 className="font-bold text-lg mb-1 text-purple-700 dark:text-purple-300">{proj.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {proj.githubLink && (
                      <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-300 underline">GitHub</a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Project Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeInUp">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
              onClick={() => setModalProject(null)}
            >
              &times;
            </button>
            <img src={modalProject.image} alt={modalProject.title} className="w-full h-48 object-cover rounded-xl mb-6" />
            <h2 className="text-2xl font-bold mb-2 text-purple-700 dark:text-purple-300">{modalProject.title}</h2>
            <div className="mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(modalProject.category)} text-white shadow-lg`}>
                {modalProject.category.toUpperCase()}
              </span>
              <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium border ${getPriorityBadge(modalProject.priority)}`}>
                {modalProject.priority.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{modalProject.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Problem Solved:</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">{modalProject.problem}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {modalProject.techStack.map((tech: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {modalProject.githubLink && (
                <a
                  href={modalProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;