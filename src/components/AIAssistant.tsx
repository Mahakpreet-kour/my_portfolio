import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, X, Loader2, MessageCircle } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. Ask me anything about Mahakpreet's skills, projects, or contributions! 🚀",
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
    <>
      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`group relative p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
          } animate-bounce-subtle`}
        >
          <Bot className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Ask AI about Mahak 🤖
          </div>
        </button>
      </div>

      {/* AI Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Chat Window */}
          <div className={`relative w-full max-w-md h-[600px] rounded-2xl shadow-2xl overflow-hidden ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between p-4 border-b ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    AI Assistant
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Ask about Mahakpreet 🤖
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : darkMode
                        ? 'bg-gray-800 text-gray-100 border border-gray-700'
                        : 'bg-gray-100 text-gray-900 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isUser ? 'text-purple-200' : darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    darkMode ? 'bg-gray-800 text-gray-100 border border-gray-700' : 'bg-gray-100 text-gray-900 border border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(question)}
                    className={`px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105 ${
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

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Mahakpreet's skills, projects, or achievements..."
                  className={`flex-1 px-4 py-2 rounded-full text-sm border transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 text-white border-gray-600 focus:border-purple-500' 
                      : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-purple-500'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    inputText.trim() && !isLoading
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant; 