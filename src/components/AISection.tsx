import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, Loader2, MessageCircle, Brain, Zap, Code, Globe } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AISection: React.FC = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! I'm Saathi AI, your AI companion powered by Gemini 1.5 Flash. Ask me anything about Mahakpreet's skills, projects, or contributions! 🚀✨",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string) => {
    const apiKey = 'AIzaSyBJ1IX2NaFdULhgJxkmIIYfDghiIOpdryU';
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

    const prompt = `You are an AI assistant for Mahakpreet Kour, a 3rd-year student at Vivekananda Global University. 
    
    Mahakpreet's Profile:
    - Full-Stack Developer & AI Enthusiast
    - DevOps & GenAI Specialist
    - Passionate about AI, full-stack development, and creating innovative solutions
    
    Key Skills: Python, Linux, SSH, Docker, Jenkins, Kubernetes, Streamlit, GitHub, LangChain, Gemini API, Machine Learning, GenAI, Full Stack Development, DevOps
    
    Notable Projects:
    1. SmartOps AI Dashboard - AI-powered monitoring and SSH automation
    2. BorrowSmart App - ML-powered loan advisor
    3. Resume Compatibility Checker - NLP-based resume analysis
    4. Linux SSH Dashboard - Voice-controlled Linux management
    5. Smart MenuBase App - Cross-platform automation tool
    6. Smart File Explorer with Gemini AI - AI-enhanced file management
    7. Fatigue Score Predictor - ML model for workplace fatigue
    8. Virtual Mouse using Mediapipe - Gesture-controlled interface
    
    Achievements:
    - Runner-up, Top 10 – Hackathon at VGU (2024)
    - Multiple Microsoft Azure and Google Cloud certifications
    - Volunteer at National Project Exhibitions
    
    User Question: "${userMessage}"
    
    Please provide a helpful, detailed response about Mahakpreet based on the user's question. Be enthusiastic, professional, and highlight her technical expertise and innovative projects. Keep responses conversational and engaging.`;

    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 800,
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      return aiResponse;
    } catch (error) {
      console.error('Error generating AI response:', error);
      return "I apologize, but I'm having trouble connecting to my AI brain right now. Please try again later! 🤖";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const aiResponse = await generateAIResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are Mahak's main skills?",
    "Tell me about her AI projects",
    "What DevOps experience does she have?",
    "What are her achievements?",
    "Show me her latest projects"
  ];

  return (
    <section id="ai-assistant" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${darkMode ? 'bg-purple-600/20' : 'bg-purple-300/50'} blur-3xl animate-pulse`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${darkMode ? 'bg-pink-600/20' : 'bg-pink-300/50'} blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        
        {/* Floating AI Elements */}
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
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            AI Assistant
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Experience the future of portfolio interaction with my AI-powered assistant, 
            built using Gemini 1.5 Flash. Ask me anything about my skills, projects, and achievements!
          </p>
          
          {/* AI Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/80 border border-gray-200'} backdrop-blur-sm shadow-xl hover:scale-105 transition-all duration-300`}>
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-fit mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Powered by Gemini 1.5 Flash
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Advanced AI model providing intelligent responses about my portfolio
              </p>
            </div>
            
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/80 border border-gray-200'} backdrop-blur-sm shadow-xl hover:scale-105 transition-all duration-300`}>
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full w-fit mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Real-time Responses
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Instant AI-generated answers about my skills and projects
              </p>
            </div>
            
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/80 border border-gray-200'} backdrop-blur-sm shadow-xl hover:scale-105 transition-all duration-300`}>
              <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full w-fit mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technical Expertise
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Deep insights into my AI, DevOps, and full-stack development skills
              </p>
            </div>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <div className={`rounded-3xl shadow-2xl overflow-hidden ${darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            {/* Chat Header */}
            <div className={`flex items-center justify-between p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    AI Assistant
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Powered by Gemini 1.5 Flash 🤖
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                Online
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : darkMode
                        ? 'bg-gray-800 text-gray-100 border border-gray-700'
                        : 'bg-gray-100 text-gray-900 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isUser ? 'text-purple-200' : darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    darkMode ? 'bg-gray-800 text-gray-100 border border-gray-700' : 'bg-gray-100 text-gray-900 border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Quick Questions:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Mahakpreet's skills, projects, or achievements..."
                  className={`flex-1 px-4 py-3 rounded-full text-sm border transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 text-white border-gray-600 focus:border-purple-500' 
                      : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    inputText.trim() && !isLoading
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection; 