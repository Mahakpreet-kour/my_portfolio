export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  problem: string;
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'hackathon' | 'certification' | 'volunteer';
}

export interface Skill {
  name: string;
  level: number;
  category: 'core' | 'ai' | 'devops' | 'fullstack';
}

export const projects: Project[] = [
  {
    id: 'smartops-ai',
    title: 'SmartOps AI Dashboard',
    description: 'Intelligent operations dashboard with AI-powered monitoring and SSH automation',
    techStack: ['Streamlit', 'Gemini AI', 'Docker', 'SSH', 'Python'],
    problem: 'Streamlines DevOps workflows with AI-driven insights and automated system management',
    githubLink: 'https://github.com/Mahakpreet-kour/SmartOps-AI-Dashboard',
    liveLink: 'https://smartops-ai-dashboard.streamlit.app',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'borrowsmart',
    title: 'BorrowSmart App',
    description: 'ML-powered loan advisor that provides personalized financial recommendations',
    techStack: ['Python', 'Machine Learning', 'Scikit-learn', 'Streamlit'],
    problem: 'Helps users make informed borrowing decisions through predictive modeling',
    githubLink: 'https://github.com/Mahakpreet-kour/BorrowSmart-App',
    liveLink: 'https://borrowsmart-app.streamlit.app',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'resume-matcher',
    title: 'Resume Compatibility Checker',
    description: 'Bulk resume analysis tool using NLP to match candidates with job requirements',
    techStack: ['Python', 'NLP', 'Gemini API', 'Streamlit', 'PDF Processing'],
    problem: 'Automates resume screening process for HR teams with AI-powered matching',
    githubLink: 'https://github.com/Mahakpreet-kour/Resume-Compatibility-Checker',
    liveLink: 'https://resume-matcher.streamlit.app',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'linux-ssh-dashboard',
    title: 'Linux SSH Dashboard',
    description: 'Voice and text command interface for remote Linux system management',
    techStack: ['Python', 'SSH', 'Voice Recognition', 'Linux', 'Flask'],
    problem: 'Simplifies remote server administration with intuitive voice commands',
    githubLink: 'https://github.com/Mahakpreet-kour/Linux-SSH-Dashboard',
    liveLink: 'https://linux-ssh-dashboard.herokuapp.com',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'smart-menubase',
    title: 'Smart MenuBase App',
    description: 'Cross-platform automation tool for Linux, Windows, and Docker environments',
    techStack: ['Python', 'Docker', 'Linux', 'Windows', 'Cross-Platform'],
    problem: 'Unified interface for managing multiple operating systems and containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Smart-MenuBase-App',
    liveLink: 'https://smart-menubase.streamlit.app',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'smart-file-explorer',
    title: 'Smart File Explorer with Gemini AI',
    description: 'AI-enhanced file management system with intelligent organization',
    techStack: ['Python', 'Gemini API', 'File System', 'AI', 'GUI'],
    problem: 'Transforms file navigation with AI-powered organization and search capabilities',
    githubLink: 'https://github.com/Mahakpreet-kour/Smart-File-Explorer',
    liveLink: 'https://smart-file-explorer.streamlit.app',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'fatigue-predictor',
    title: 'Fatigue Score Predictor',
    description: 'Machine learning model for predicting workplace fatigue levels',
    techStack: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
    problem: 'Helps organizations monitor and prevent employee burnout through predictive analytics',
    githubLink: 'https://github.com/Mahakpreet-kour/Fatigue-Score-Predictor',
    liveLink: 'https://fatigue-predictor.streamlit.app',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'virtual-mouse',
    title: 'Virtual Mouse using Mediapipe',
    description: 'Gesture-controlled mouse interface using computer vision',
    techStack: ['Python', 'Mediapipe', 'CVZone', 'OpenCV', 'Computer Vision'],
    problem: 'Enables hands-free computer interaction through gesture recognition',
    githubLink: 'https://github.com/Mahakpreet-kour/Virtual-Mouse-Mediapipe',
    liveLink: 'https://virtual-mouse-demo.streamlit.app',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'hackathon-runner-up',
    title: 'Runner-up, Top 10 – Hackathon at VGU',
    description: 'Achieved runner-up position in competitive hackathon at Vivekananda Global University',
    date: '2024',
    type: 'hackathon'
  },
  {
    id: 'volunteer-vgu',
    title: 'Volunteer – National Project Exhibitions at VGU',
    description: 'Organized and managed national-level project exhibitions and technical events',
    date: '2024',
    type: 'volunteer'
  },
  {
    id: 'volunteer-ric',
    title: 'Volunteer – National Project Exhibitions at RIC Jaipur',
    description: 'Contributed to organizing technical exhibitions and innovation showcases',
    date: '2024',
    type: 'volunteer'
  },
  {
    id: 'exin-ai',
    title: 'EXIN BCS Artificial Intelligence Essentials',
    description: 'Certified in AI fundamentals and practical applications',
    date: '2024',
    type: 'certification'
  },
  {
    id: 'exin-cloud',
    title: 'EXIN Cloud Computing Foundation',
    description: 'Foundational certification in cloud computing concepts and services',
    date: '2024',
    type: 'certification'
  },
  {
    id: 'azure-ai',
    title: 'Microsoft Azure AI Fundamentals',
    description: 'Certified in Azure AI services and machine learning fundamentals',
    date: '2024',
    type: 'certification'
  },
  {
    id: 'azure-design',
    title: 'Microsoft AI Design & Implementation',
    description: 'Advanced certification in AI solution design and implementation',
    date: '2024',
    type: 'certification'
  },
  {
    id: 'google-genai',
    title: 'Google Cloud: Intro to Generative AI',
    description: 'Specialized training in generative AI technologies and applications',
    date: '2024',
    type: 'certification'
  }
];

export const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'core' },
  { name: 'Linux', level: 90, category: 'core' },
  { name: 'SSH', level: 85, category: 'core' },
  { name: 'Docker', level: 88, category: 'devops' },
  { name: 'Jenkins', level: 80, category: 'devops' },
  { name: 'Kubernetes', level: 75, category: 'devops' },
  { name: 'Streamlit', level: 92, category: 'fullstack' },
  { name: 'GitHub', level: 90, category: 'core' },
  { name: 'LangChain', level: 85, category: 'ai' },
  { name: 'Gemini API', level: 88, category: 'ai' },
  { name: 'Machine Learning', level: 87, category: 'ai' },
  { name: 'GenAI', level: 90, category: 'ai' },
  { name: 'Full Stack Development', level: 82, category: 'fullstack' },
  { name: 'DevOps', level: 85, category: 'devops' }
];

export const socialLinks = {
  email: 'mahakmakkar621@gmail.com',
  github: 'https://github.com/Mahakpreet-kour',
  linkedin: 'https://www.linkedin.com/in/mahakpreet-kour-b83774286/',
  twitter: 'https://x.com/Mahak_makkar',
  medium: 'https://medium.com/@mahakmakkar621'
};

export const personalInfo = {
  name: 'Mahakpreet Kour',
  title: 'Building the Core, AI, and Innovation',
  location: 'Sri Ganganagar, Rajasthan',
  university: 'Vivekananda Global University, Jaipur',
  year: '3rd Year Student',
  bio: 'Passionate about core technologies, GenAI, Agentic AI, full-stack development, DevOps, ML, LangChain, Gemini, Docker, and Kubernetes. Building the future with AI-driven solutions.',
  funFacts: [
    'Built AI OS menu for Linux, Windows, and Docker',
    'Developed Python automation tools for social media',
    'Working on AI cartoon education app startup',
    'Passionate about GenAIops and Agentic AI'
  ]
};