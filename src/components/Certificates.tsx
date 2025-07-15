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
    <section id="certificates" className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-300/50 dark:bg-purple-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-pink-300/50 dark:bg-pink-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-300/40 dark:bg-blue-600/15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Floating Certificate/LinkedIn/Star Icons */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-achievement pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              zIndex: 1
            }}
          >
            {i % 3 === 0 ? (
              <Linkedin className="w-5 h-5 text-blue-500/30" />
            ) : i % 3 === 1 ? (
              <Star className="w-5 h-5 text-yellow-400/30" />
            ) : (
              <Award className="w-5 h-5 text-purple-400/30" />
            )}
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-2xl hover:scale-110 transition-transform duration-500">
            <Linkedin className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Certificates
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-12 shadow-xl"></div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            My professional certifications and achievements
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              tabIndex={0}
              role="button"
              onClick={() => {
                window.open(cert.link, '_blank', 'noopener,noreferrer');
                handleCardClick(cert.id);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(cert.link, '_blank', 'noopener,noreferrer');
                  handleCardClick(cert.id);
                }
              }}
              className={`group relative p-8 rounded-3xl bg-gray-900/80 dark:bg-gray-900/90 border backdrop-blur-xl shadow-2xl border-blue-200/30 dark:border-purple-600/30 transition-all duration-700 transform-gpu animate-fade-in-up cursor-pointer
                ${activeCard === cert.id ? 'certificate-float certificate-z' : ''}
                hover:shadow-3xl hover:-translate-y-10 hover:scale-115 hover:certificate-hover-glow
              `}
              style={{ animationDelay: `${idx * 100}ms`, zIndex: activeCard === cert.id ? 30 : 2 }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl certificate-hover-glow"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  {cert.platform.toLowerCase().includes('linkedin') && (
                    <span className="p-3 bg-blue-600 rounded-xl shadow-lg">
                      <Linkedin className="w-7 h-7 text-white" />
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300 mb-2 certificate-title-gradient">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6 flex-1">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-block px-4 py-2 rounded-full text-xs font-bold bg-blue-900/60 text-blue-200 border border-blue-700 capitalize">
                    {cert.platform}
                  </span>
                  <span
                    className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg flex items-center gap-2 select-none pointer-events-none"
                  >
                    <Linkedin className="w-5 h-5" />
                    View Certificate
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 