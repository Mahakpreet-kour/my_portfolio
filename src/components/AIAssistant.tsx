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
      text: "Namaste! I'm Saathi AI, your AI companion. Ask me anything about Mahakpreet's skills, projects, or contributions! 🚀✨",
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
          onClick={() => {
            const aiAssistant = document.querySelector('#ai-assistant');
            if (aiAssistant) {
              aiAssistant.classList.remove('hidden');
            }
          }}
          className="group relative p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 bg-gradient-to-r from-purple-600 to-pink-600 text-white animate-bounce-subtle"
          title="Saathi AI - Your AI Companion"
        >
          <Bot className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Saathi AI 🤖
          </div>
        </button>
      </div>

      {/* AI Chat Modal */}
      <div id="ai-assistant" className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-gray-800 via-purple-900 to-violet-900 rounded-3xl p-6 max-w-md w-full mx-auto shadow-2xl border border-purple-500/30 relative">
          {/* Close Button */}
          <button
            onClick={() => {
              const aiAssistant = document.querySelector('#ai-assistant');
              if (aiAssistant) {
                aiAssistant.classList.add('hidden');
              }
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Saathi AI</h3>
            <p className="text-gray-300 text-sm">Your AI companion powered by Gemini</p>
          </div>

          {/* Messages */}
          <div className="max-h-96 overflow-y-auto mb-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-200 px-4 py-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Saathi AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about Mahakpreet..."
              className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-2xl border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant; 