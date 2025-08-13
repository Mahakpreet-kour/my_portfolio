import React, { useState } from 'react';
import { Linkedin, Award, Star } from 'lucide-react';

// Certificates data restored locally for this section
const certificates = [
  {
    id: 'plc-memory-org',
    title: 'PLC Memory Organization',
    description: 'Certificate of completion for PLC Memory Organization',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/learning/certificates/aefa97a3c0b8a9fc7a81433513975d82352535e447e6c0fbb685f9c41145df39',
  },
  {
    id: 'sql-programming',
    title: 'Learning SQL Programming',
    description: 'Certificate for completing SQL Programming course',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_sql-datascience-artificialintelligence-activity-7312351875117277185-FDxF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
  {
    id: 'intro-ai',
    title: 'Introduction to Artificial Intelligence',
    description: 'Certificate for completing Introduction to AI',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_certificate-of-completion-activity-7304576502174478336--IwK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
  {
    id: 'exin-cloud',
    title: 'EXIN Cloud Computing Foundation',
    description: 'EXIN Cloud Computing Foundation Certification',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_cloudcomputing-certification-exin-activity-7291836982526156800-Bi4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
  {
    id: 'intro-genai',
    title: 'Introduction to Generative AI',
    description: 'Certificate for completing Introduction to Generative AI',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_generativeai-artificialintelligence-coursera-activity-7291835377886138368-w2zh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
  {
    id: 'azure-ai-fundamentals',
    title: 'Microsoft Azure AI Fundamentals',
    description: 'Microsoft Certified: Azure AI Fundamentals',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_microsoftcertified-ai900-artificialintelligence-activity-7263948074241171456-P14b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
  {
    id: 'azure-ai-design',
    title: 'Design and Implement AI Azure Fundamentals',
    description: 'Design and Implement AI Solutions on Azure',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_microsoftcertified-ai900-artificialintelligence-activity-7263947909426003969-Ho7W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
  {
    id: 'exin-bcs-i',
    title: 'EXIN BCS I',
    description: 'EXIN BCS I Certification',
    platform: 'LinkedIn',
    link: 'https://www.linkedin.com/posts/mahakpreet-kour-b83774286_i-feel-honoured-to-be-part-of-this-exam-activity-7199831452950142976-UYBB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWGTJMBxzIZP5PRF7MuPIlFxv12EQ-El9M',
  },
];

const Certificates: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCard(id);
    setTimeout(() => setActiveCard(null), 3000); // Keep floating for 3 seconds
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-600/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Certificate Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              zIndex: Math.floor(Math.random() * 10)
            }}
          >
            {i % 3 === 0 ? (
              <Linkedin className="w-6 h-6 text-blue-400/40 hover:text-blue-300/60 transition-colors duration-300" />
            ) : i % 3 === 1 ? (
              <Star className="w-6 h-6 text-yellow-400/40 hover:text-yellow-300/60 transition-colors duration-300" />
            ) : (
              <Award className="w-6 h-6 text-purple-400/40 hover:text-purple-300/60 transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Professional Certifications
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-8 shadow-xl"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Validating expertise in AI, cloud computing, and modern technologies
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`group relative p-8 rounded-3xl bg-gray-800/95 border border-gray-600/50 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-700 hover:-translate-y-4 hover:scale-105 transform-gpu cursor-pointer ${
                activeCard === certificate.id ? 'ring-4 ring-purple-500/50' : ''
              }`}
              onClick={() => handleCardClick(certificate.id)}
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(55, 65, 81, 0.9) 100%)'
              }}
            >
              {/* Enhanced glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Certificate Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {certificate.platform}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {certificate.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {certificate.description}
                  </p>

                  {/* View Certificate Button */}
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group/link"
                  >
                    <span>View Certificate</span>
                    <Linkedin className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                  </a>
                </div>

                {/* Certificate Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Committed to staying updated with the latest technologies and industry best practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 