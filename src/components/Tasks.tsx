import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, Star, Target, Zap, Code, Database, Server, Globe, Brain, Terminal } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  category: string;
  estimatedTime: string;
  skills: string[];
}

const Tasks: React.FC = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);

  const tasks: Task[] = [
    // Python Tasks
    {
      id: '1',
      title: 'Build AI Chatbot with Gemini API',
      description: 'Create an intelligent chatbot using Python and Google\'s Gemini API for natural language processing',
      completed: true,
      priority: 'high',
      category: 'python',
      estimatedTime: '4-6 hours',
      skills: ['Python', 'Gemini API', 'NLP', 'Streamlit']
    },
    {
      id: '2',
      title: 'Develop Machine Learning Model',
      description: 'Build a predictive model for loan approval using scikit-learn and pandas',
      completed: true,
      priority: 'high',
      category: 'python',
      estimatedTime: '6-8 hours',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'ML']
    },
    {
      id: '3',
      title: 'Create Data Analysis Dashboard',
      description: 'Build a comprehensive dashboard for data visualization and analysis',
      completed: false,
      priority: 'medium',
      category: 'python',
      estimatedTime: '3-4 hours',
      skills: ['Python', 'Plotly', 'Dash', 'Data Analysis']
    },

    // Linux Tasks
    {
      id: '4',
      title: 'Set up SSH Server Configuration',
      description: 'Configure secure SSH access with key-based authentication and firewall rules',
      completed: true,
      priority: 'high',
      category: 'linux',
      estimatedTime: '2-3 hours',
      skills: ['Linux', 'SSH', 'Security', 'Networking']
    },
    {
      id: '5',
      title: 'Automate System Monitoring',
      description: 'Create automated scripts for system health monitoring and alerting',
      completed: true,
      priority: 'medium',
      category: 'linux',
      estimatedTime: '4-5 hours',
      skills: ['Linux', 'Bash', 'Monitoring', 'Automation']
    },
    {
      id: '6',
      title: 'Configure Docker on Linux',
      description: 'Set up Docker environment with proper networking and storage configuration',
      completed: false,
      priority: 'high',
      category: 'linux',
      estimatedTime: '3-4 hours',
      skills: ['Linux', 'Docker', 'Containerization', 'DevOps']
    },

    // Docker Tasks
    {
      id: '7',
      title: 'Containerize Python Application',
      description: 'Create Docker containers for Python applications with multi-stage builds',
      completed: true,
      priority: 'high',
      category: 'docker',
      estimatedTime: '2-3 hours',
      skills: ['Docker', 'Python', 'Containerization', 'CI/CD']
    },
    {
      id: '8',
      title: 'Set up Docker Compose Stack',
      description: 'Deploy multi-container application using Docker Compose with proper networking',
      completed: true,
      priority: 'medium',
      category: 'docker',
      estimatedTime: '3-4 hours',
      skills: ['Docker', 'Docker Compose', 'Networking', 'Microservices']
    },
    {
      id: '9',
      title: 'Implement Kubernetes Deployment',
      description: 'Deploy containerized applications to Kubernetes cluster with proper scaling',
      completed: false,
      priority: 'high',
      category: 'docker',
      estimatedTime: '5-6 hours',
      skills: ['Docker', 'Kubernetes', 'Orchestration', 'Cloud Native']
    },

    // Full-Stack Tasks
    {
      id: '10',
      title: 'Build React Portfolio Website',
      description: 'Create a modern, responsive portfolio website using React and TypeScript',
      completed: true,
      priority: 'high',
      category: 'fullstack',
      estimatedTime: '8-10 hours',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      id: '11',
      title: 'Develop REST API with Flask',
      description: 'Build a RESTful API backend using Flask with authentication and database integration',
      completed: true,
      priority: 'medium',
      category: 'fullstack',
      estimatedTime: '6-8 hours',
      skills: ['Python', 'Flask', 'REST API', 'SQLAlchemy']
    },
    {
      id: '12',
      title: 'Create Real-time Chat Application',
      description: 'Build a real-time chat application with WebSocket and React frontend',
      completed: false,
      priority: 'medium',
      category: 'fullstack',
      estimatedTime: '10-12 hours',
      skills: ['React', 'WebSocket', 'Node.js', 'Real-time']
    },

    // JavaScript Tasks
    {
      id: '13',
      title: 'Build Interactive Dashboard',
      description: 'Create an interactive dashboard with charts and real-time data updates',
      completed: true,
      priority: 'high',
      category: 'javascript',
      estimatedTime: '5-6 hours',
      skills: ['JavaScript', 'Chart.js', 'DOM Manipulation', 'Async/Await']
    },
    {
      id: '14',
      title: 'Develop Progressive Web App',
      description: 'Build a PWA with offline functionality and push notifications',
      completed: false,
      priority: 'medium',
      category: 'javascript',
      estimatedTime: '8-10 hours',
      skills: ['JavaScript', 'PWA', 'Service Workers', 'Web APIs']
    },
    {
      id: '15',
      title: 'Create Animation Library',
      description: 'Build a custom animation library using JavaScript and CSS transitions',
      completed: false,
      priority: 'low',
      category: 'javascript',
      estimatedTime: '6-8 hours',
      skills: ['JavaScript', 'CSS', 'Animations', 'Libraries']
    },

    // Machine Learning Tasks
    {
      id: '16',
      title: 'Implement Computer Vision Model',
      description: 'Build a computer vision application using OpenCV and MediaPipe',
      completed: true,
      priority: 'high',
      category: 'ml',
      estimatedTime: '8-10 hours',
      skills: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision']
    },
    {
      id: '17',
      title: 'Create NLP Text Analyzer',
      description: 'Develop a natural language processing tool for text analysis and sentiment',
      completed: true,
      priority: 'medium',
      category: 'ml',
      estimatedTime: '6-8 hours',
      skills: ['Python', 'NLP', 'NLTK', 'Text Processing']
    },
    {
      id: '18',
      title: 'Build Recommendation System',
      description: 'Implement a collaborative filtering recommendation system',
      completed: false,
      priority: 'high',
      category: 'ml',
      estimatedTime: '10-12 hours',
      skills: ['Python', 'ML', 'Recommendation Systems', 'Algorithms']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tasks', icon: Target, color: 'from-purple-600 to-pink-600' },
    { id: 'python', name: 'Python', icon: Code, color: 'from-blue-600 to-cyan-600' },
    { id: 'linux', name: 'Linux', icon: Terminal, color: 'from-green-600 to-emerald-600' },
    { id: 'docker', name: 'Docker', icon: Server, color: 'from-orange-600 to-red-600' },
    { id: 'fullstack', name: 'Full-Stack', icon: Globe, color: 'from-indigo-600 to-purple-600' },
    { id: 'javascript', name: 'JavaScript', icon: Code, color: 'from-yellow-600 to-orange-600' },
    { id: 'ml', name: 'Machine Learning', icon: Brain, color: 'from-pink-600 to-rose-600' }
  ];

  const filteredTasks = selectedCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔥';
      case 'medium': return '⚡';
      case 'low': return '💡';
      default: return '📋';
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section id="tasks" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-blue-600/20' : 'bg-blue-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-indigo-600/20' : 'bg-indigo-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Task Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Tasks & Skills
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Track my progress across different technologies and skill areas
          </p>

          {/* Progress Overview */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className={`p-6 rounded-3xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/80 border border-gray-200'} backdrop-blur-sm shadow-xl`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Overall Progress
                </h3>
                <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {completionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm">
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {completedTasks} completed
                </span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {totalTasks} total tasks
                </span>
              </div>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : darkMode
                      ? 'bg-gray-800/80 text-gray-200 hover:bg-gray-700/90 border border-gray-600/50'
                      : 'bg-white/90 text-gray-800 hover:bg-gray-100/90 border border-gray-300/60'
                  } shadow-md`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredTasks.map((task, index) => (
            <div
              key={task.id}
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
              onMouseEnter={() => setHoveredTask(task.id)}
              onMouseLeave={() => setHoveredTask(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Task Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${task.completed ? 'bg-green-500/20' : 'bg-purple-500/20'}`}>
                      {task.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-purple-500" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-600 transition-colors`}>
                        {task.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {getPriorityIcon(task.priority)} {task.priority}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {task.estimatedTime}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.completed 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {task.completed ? 'Completed' : 'In Progress'}
                  </div>
                </div>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm`}>
                  {task.description}
                </p>
              </div>

              {/* Task Skills */}
              <div className="p-6">
                <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Skills Required:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {task.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-700/80 text-gray-200 border border-gray-500/60' 
                          : 'bg-gray-100/90 text-gray-800 border border-gray-300/70'
                      } hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks; 