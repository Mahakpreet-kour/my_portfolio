import React, { useState } from 'react';
import { ExternalLink, Github, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { projects, type Project } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Projects: React.FC = () => {
  const { darkMode } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'ai', 'fullstack', 'devops', 'automation'];
  
  const getProjectCategory = (techStack: string[]) => {
    if (techStack.some(tech => ['Gemini AI', 'Machine Learning', 'NLP', 'AI', 'Mediapipe'].includes(tech))) return 'ai';
    if (techStack.some(tech => ['Docker', 'SSH', 'Jenkins', 'Kubernetes'].includes(tech))) return 'devops';
    if (techStack.some(tech => ['Streamlit', 'Flask', 'React', 'Full Stack'].includes(tech))) return 'fullstack';
    return 'automation';
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => getProjectCategory(project.techStack) === selectedCategory);

  return (
    <section id="projects" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-purple-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-pink-600/20' : 'bg-pink-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-600/15' : 'bg-blue-300/40'} blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Code Elements */}
        {[...Array(12)].map((_, i) => (
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
            <div className={`w-3 h-3 ${darkMode ? 'bg-blue-400/30' : 'bg-blue-600/40'} rounded-full blur-sm`}></div>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Explore my latest projects showcasing AI, full-stack development, and DevOps innovations
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : darkMode
                    ? 'bg-gray-800/80 text-gray-200 hover:bg-gray-700/90 border border-gray-600/50'
                    : 'bg-white/90 text-gray-800 hover:bg-gray-100/90 border border-gray-300/60'
                } shadow-md`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl ${
                darkMode ? 'bg-gray-800/90 border-gray-600/50' : 'bg-white/95 border-blue-200/50'
              } backdrop-blur-lg shadow-2xl border ${
                darkMode ? 'border-gray-600/50' : 'border-blue-200/50'
              } hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:scale-105`}
              style={{
                background: darkMode 
                  ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-600/70 to-transparent transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition-all duration-300 hover:scale-110 border border-white/40 shadow-lg"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition-all duration-300 hover:scale-110 border border-white/40 shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-600 transition-colors`}>
                    {project.title}
                  </h3>
                </div>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm`}>
                  {project.description}
                </p>

                {/* Problem Section */}
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/60 border-gray-500/40' : 'bg-gradient-to-r from-purple-50/90 to-pink-50/90 border-purple-300/60'} border-l-4 border-purple-600`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    <span className={`text-sm font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      Solution
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {project.problem}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-2 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-700/80 text-gray-200 border border-gray-500/60' 
                          : 'bg-gray-100/90 text-gray-800 border border-gray-300/70'
                      } hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                    >
                      <span>View on GitHub</span>
                      <Github className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <button className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Mahakpreet-kour" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center gap-3 mx-auto border border-white/30 backdrop-blur-sm shadow-xl"
          >
            <span>View All Projects</span>
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;