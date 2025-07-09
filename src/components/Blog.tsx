import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Clock, BookOpen, ArrowRight, Heart, MessageCircle } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  readTime: string;
  image: string;
  category: string;
  likes: number;
  comments: number;
}

const Blog: React.FC = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  // Sample blog posts - you can replace these with your actual Medium articles
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building AI-Powered Applications with Gemini API',
      description: 'Learn how to integrate Google\'s Gemini API into your applications for intelligent features and enhanced user experiences.',
      url: 'https://medium.com/@mahakmakkar621/building-ai-powered-applications-with-gemini-api',
      publishedAt: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ai',
      likes: 45,
      comments: 12
    },
    {
      id: '2',
      title: 'DevOps Best Practices for Modern Applications',
      description: 'Explore essential DevOps practices including Docker, Kubernetes, and CI/CD pipelines for scalable applications.',
      url: 'https://medium.com/@mahakmakkar621/devops-best-practices-for-modern-applications',
      publishedAt: '2024-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'devops',
      likes: 38,
      comments: 8
    },
    {
      id: '3',
      title: 'Full-Stack Development with React and Python',
      description: 'A comprehensive guide to building full-stack applications using React frontend and Python backend.',
      url: 'https://medium.com/@mahakmakkar621/full-stack-development-with-react-and-python',
      publishedAt: '2024-01-05',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'fullstack',
      likes: 52,
      comments: 15
    },
    {
      id: '4',
      title: 'Machine Learning for Beginners: Getting Started',
      description: 'A beginner-friendly introduction to machine learning concepts and practical implementation.',
      url: 'https://medium.com/@mahakmakkar621/machine-learning-for-beginners-getting-started',
      publishedAt: '2024-01-01',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ml',
      likes: 67,
      comments: 23
    },
    {
      id: '5',
      title: 'Linux System Administration Essentials',
      description: 'Essential Linux commands and system administration techniques for developers and DevOps engineers.',
      url: 'https://medium.com/@mahakmakkar621/linux-system-administration-essentials',
      publishedAt: '2023-12-25',
      readTime: '14 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'linux',
      likes: 41,
      comments: 9
    },
    {
      id: '6',
      title: 'JavaScript Modern Features and Best Practices',
      description: 'Explore modern JavaScript features including ES6+, async/await, and functional programming patterns.',
      url: 'https://medium.com/@mahakmakkar621/javascript-modern-features-and-best-practices',
      publishedAt: '2023-12-20',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'javascript',
      likes: 48,
      comments: 14
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', color: 'from-purple-600 to-pink-600' },
    { id: 'ai', name: 'AI & ML', color: 'from-blue-600 to-cyan-600' },
    { id: 'devops', name: 'DevOps', color: 'from-green-600 to-emerald-600' },
    { id: 'fullstack', name: 'Full-Stack', color: 'from-orange-600 to-red-600' },
    { id: 'linux', name: 'Linux', color: 'from-yellow-600 to-orange-600' },
    { id: 'javascript', name: 'JavaScript', color: 'from-indigo-600 to-purple-600' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900' : 'bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-purple-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-indigo-600/20' : 'bg-indigo-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Blog Icons */}
        {[...Array(15)].map((_, i) => (
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
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My Blog
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Sharing knowledge and insights about AI, DevOps, Full-Stack development, and technology
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : darkMode
                    ? 'bg-gray-800/80 text-gray-200 hover:bg-gray-700/90 border border-gray-600/50'
                    : 'bg-white/90 text-gray-800 hover:bg-gray-100/90 border border-gray-300/60'
                } shadow-md`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
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
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Blog Post Image */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    categories.find(c => c.id === post.category)?.color 
                      ? `bg-gradient-to-r ${categories.find(c => c.id === post.category)?.color} text-white`
                      : 'bg-gray-800/80 text-white'
                  }`}>
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-600/70 to-transparent transition-opacity duration-500 ${
                  hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition-all duration-300 hover:scale-110 border border-white/40 shadow-lg"
                    >
                      <span className="text-white font-medium">Read on Medium</span>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Post Content */}
              <div className="p-8 space-y-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-purple-600 transition-colors line-clamp-2`}>
                    {post.title}
                  </h3>
                </div>

                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm line-clamp-3`}>
                  {post.description}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="pt-4">
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <a 
            href="https://medium.com/@mahakmakkar621" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 flex items-center gap-3 mx-auto border border-white/30 backdrop-blur-sm shadow-xl"
          >
            <span>View All Posts on Medium</span>
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 