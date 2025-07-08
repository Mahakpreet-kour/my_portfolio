import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MessageSquare, Send, Phone, MapPin, Zap, Heart, Star } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { useTheme } from './ThemeContext';

const Contact: React.FC = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mailtoLink = `mailto:${socialLinks.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialPlatforms = [
    {
      name: 'GitHub',
      url: socialLinks.github,
      icon: <Github className="w-6 h-6" />,
      gradient: 'from-gray-700 to-gray-900',
      hoverGradient: 'hover:from-gray-600 hover:to-gray-800'
    },
    {
      name: 'LinkedIn',
      url: socialLinks.linkedin,
      icon: <Linkedin className="w-6 h-6" />,
      gradient: 'from-blue-600 to-blue-800',
      hoverGradient: 'hover:from-blue-500 hover:to-blue-700'
    },
    {
      name: 'Twitter',
      url: socialLinks.twitter,
      icon: <Twitter className="w-6 h-6" />,
      gradient: 'from-sky-500 to-sky-700',
      hoverGradient: 'hover:from-sky-400 hover:to-sky-600'
    },
    {
      name: 'Medium',
      url: socialLinks.medium,
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: 'from-green-600 to-green-800',
      hoverGradient: 'hover:from-green-500 hover:to-green-700'
    }
  ];

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-900/20' : 'bg-purple-200/30'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-pink-900/20' : 'bg-pink-200/30'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-200/30'} blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Hearts */}
        {[...Array(15)].map((_, i) => (
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
            <Heart className={`w-4 h-4 ${darkMode ? 'text-pink-400/20' : 'text-pink-500/30'}`} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600`}>
            Let's Connect & Create
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mx-auto rounded-full mb-8 shadow-lg"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Ready to bring your ideas to life? Let's collaborate and build something extraordinary together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`group relative p-10 rounded-3xl ${
              darkMode ? 'bg-gray-900/80' : 'bg-white/90'
            } backdrop-blur-xl shadow-2xl border ${
              darkMode ? 'border-gray-700/50' : 'border-white/50'
            } hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 transform-gpu`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                  <Zap className="w-8 h-8 text-yellow-500" />
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="group/item flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                        Email
                      </p>
                      <a href={`mailto:${socialLinks.email}`} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-600 transition-colors text-lg`}>
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>

                  <div className="group/item flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                        Location
                      </p>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                        Sri Ganganagar, Rajasthan
                      </p>
                    </div>
                  </div>

                  <div className="group/item flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>
                        Response Time
                      </p>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className={`group relative p-10 rounded-3xl ${
              darkMode ? 'bg-gray-900/80' : 'bg-white/90'
            } backdrop-blur-xl shadow-2xl border ${
              darkMode ? 'border-gray-700/50' : 'border-white/50'
            } hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 transform-gpu`}>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                  <Star className="w-8 h-8 text-yellow-500" />
                  Follow My Journey
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialPlatforms.map((platform, index) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social p-6 bg-gradient-to-r ${platform.gradient} text-white rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${platform.hoverGradient} transform-gpu`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="group-hover/social:rotate-12 transition-transform duration-300">
                          {platform.icon}
                        </div>
                        <span className="font-semibold text-sm">{platform.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`group relative p-10 rounded-3xl ${
            darkMode ? 'bg-gray-900/80' : 'bg-white/90'
          } backdrop-blur-xl shadow-2xl border ${
            darkMode ? 'border-gray-700/50' : 'border-white/50'
          } hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 transform-gpu`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center gap-3`}>
                <Send className="w-8 h-8 text-purple-600" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label htmlFor="name" className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-6 py-4 rounded-xl border-2 ${
                        darkMode 
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover/input:border-purple-400`}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="group/input">
                    <label htmlFor="email" className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-6 py-4 rounded-xl border-2 ${
                        darkMode 
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover/input:border-purple-400`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group/input">
                  <label htmlFor="subject" className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-xl border-2 ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover/input:border-purple-400`}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group/input">
                  <label htmlFor="message" className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 rounded-xl border-2 ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 group-hover/input:border-purple-400 resize-none`}
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn w-full px-8 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform-gpu"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;