export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  problem: string;
  liveLink?: string;
  githubLink?: string;
  image: string;
  category: 'main' | 'python' | 'html-js';
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  date: string;
  readTime: string;
  category: string;
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
  // MAIN PROJECTS (High Priority)
  {
    id: 'career-guidance-ai-chatbot',
    title: 'Career Guidance AI Chatbot',
    description: 'AI-powered career guidance chatbot providing personalized career advice and recommendations',
    techStack: ['Python', 'AI', 'Chatbot', 'Career Guidance', 'Machine Learning'],
    problem: 'Helps students and professionals make informed career decisions through intelligent conversation',
    githubLink: 'https://github.com/Mahakpreet-kour/Career_guidance_ai_chatbot.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'borrow-smart-loan-advisor',
    title: 'BorrowSmart Loan Advisor',
    description: 'Intelligent loan advisory system that provides personalized financial recommendations',
    techStack: ['Python', 'Machine Learning', 'Financial Analysis', 'AI', 'Data Science'],
    problem: 'Helps users make informed borrowing decisions through predictive modeling and risk assessment',
    githubLink: 'https://github.com/Mahakpreet-kour/Borrow_smart_loan_advisor.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'studymate-ai',
    title: 'StudyMate AI',
    description: 'AI-powered study assistant for personalized learning and academic support',
    techStack: ['Python', 'AI', 'Education', 'Machine Learning', 'Jupyter'],
    problem: 'Enhances learning experience with intelligent study recommendations and assistance',
    githubLink: 'https://github.com/Mahakpreet-kour/Studymate__AI.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'smart-file-explorer',
    title: 'Smart File Explorer',
    description: 'Intelligent file management system with AI-powered organization and search',
    techStack: ['Python', 'File Management', 'AI', 'Automation', 'GUI'],
    problem: 'Streamlines file organization and retrieval with intelligent categorization',
    githubLink: 'https://github.com/Mahakpreet-kour/Smart-file-explorer.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'multi-resume-screening-system',
    title: 'Multi Resume Screening System',
    description: 'AI-powered bulk resume analysis and candidate matching system',
    techStack: ['Python', 'NLP', 'AI', 'Resume Processing', 'Machine Learning'],
    problem: 'Automates HR processes with intelligent resume screening and candidate evaluation',
    githubLink: 'https://github.com/Mahakpreet-kour/Multi-resume-screening-system.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'smart-menubase',
    title: 'Smart MenuBase',
    description: 'Intelligent menu management system with AI-powered recommendations',
    techStack: ['Python', 'AI', 'Menu Management', 'Database', 'Web Development'],
    problem: 'Optimizes menu planning and management with intelligent suggestions',
    githubLink: 'https://github.com/Mahakpreet-kour/Smart-menubase-project.git',
    image: '',
    category: 'main',
    priority: 'medium',
    completed: true
  },
  {
    id: 'linux-ssh-dashboard',
    title: 'Linux SSH Dashboard',
    description: 'Voice and text command interface for remote Linux system management',
    techStack: ['Python', 'SSH', 'Voice Recognition', 'Linux', 'Flask'],
    problem: 'Simplifies remote server administration with intuitive voice commands',
    githubLink: 'https://github.com/Mahakpreet-kour/linux-ssh-dashboard.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'fatigue-score-predictor',
    title: 'Fatigue Score Predictor',
    description: 'ML-based fatigue prediction system for health monitoring',
    techStack: ['Python', 'Machine Learning', 'Health Tech', 'Data Analysis', 'ML'],
    problem: 'Predicts fatigue levels to improve workplace safety and health monitoring',
    githubLink: 'https://github.com/Mahakpreet-kour/fatigue_score_predictor_mlproj.git',
    image: '',
    category: 'main',
    priority: 'medium',
    completed: true
  },
  {
    id: 'stock-trend-predictor',
    title: 'Stock Trend Predictor',
    description: 'AI-powered stock market trend prediction and analysis system',
    techStack: ['Python', 'Machine Learning', 'Finance', 'Data Science', 'AI'],
    problem: 'Provides data-driven insights for stock market analysis and predictions',
    githubLink: 'https://github.com/Mahakpreet-kour/Stock_trend_predictor.git',
    image: '',
    category: 'main',
    priority: 'medium',
    completed: true
  },
  {
    id: 'genaiops-windows',
    title: 'GenAIOps Windows Assistant',
    description: 'AI-powered Windows system management and automation assistant',
    techStack: ['Python', 'AI', 'Windows', 'Automation', 'GenAI'],
    problem: 'Streamlines Windows system management with AI-driven automation',
    githubLink: 'https://github.com/Mahakpreet-kour/GenAIOps-WindowsAssistant.git',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },

  // PYTHON PROJECTS - Individual Tasks
  {
    id: 'audio-to-text',
    title: 'Audio to Text Converter',
    description: 'Convert audio files to text using speech recognition',
    techStack: ['Python', 'Speech Recognition', 'Audio Processing', 'API'],
    problem: 'Transcribes audio content to text for accessibility and documentation',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'text-to-audio',
    title: 'Text to Audio Converter',
    description: 'Convert text to speech with natural voice synthesis',
    techStack: ['Python', 'Text-to-Speech', 'Audio Generation', 'API'],
    problem: 'Creates audio content from text for accessibility and automation',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'phone-call-automation',
    title: 'Phone Call Automation',
    description: 'Make automated phone calls using Python with text-to-speech',
    techStack: ['Python', 'Twilio API', 'Voice Calls', 'TTS', 'Automation'],
    problem: 'Automates phone calls for notifications and reminders',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'web-scraping',
    title: 'Web Scraping Tool',
    description: 'Extract data from websites using Python automation',
    techStack: ['Python', 'Web Scraping', 'BeautifulSoup', 'Requests', 'Automation'],
    problem: 'Automates data collection from web sources for analysis',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'email-automation',
    title: 'Email Automation System',
    description: 'Send automated emails with attachments and HTML formatting',
    techStack: ['Python', 'SMTP', 'Email', 'Automation', 'HTML'],
    problem: 'Automates email sending for marketing campaigns and notifications',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'sms-automation',
    title: 'SMS Automation Tool',
    description: 'Send SMS messages using Python with Twilio API integration',
    techStack: ['Python', 'Twilio API', 'SMS', 'Automation'],
    problem: 'Enables automated SMS notifications and alerts',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Message Automation',
    description: 'Send WhatsApp messages using Python with WhatsApp Business API',
    techStack: ['Python', 'WhatsApp API', 'Automation', 'Messaging'],
    problem: 'Automates WhatsApp messaging for business communications',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'instagram-posting',
    title: 'Instagram Post Automation',
    description: 'Automatically post content to Instagram using Python',
    techStack: ['Python', 'Instagram API', 'Social Media', 'Automation'],
    problem: 'Automates social media posting for business and personal use',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'face-swap',
    title: 'Face Swap Application',
    description: 'Swap faces in images using computer vision and AI',
    techStack: ['Python', 'OpenCV', 'Computer Vision', 'AI', 'Image Processing'],
    problem: 'Creates entertaining face swap effects using advanced image processing',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors Game',
    description: 'Interactive rock paper scissors game with computer opponent',
    techStack: ['Python', 'Game Logic', 'Random Generation', 'User Input'],
    problem: 'Provides entertainment and demonstrates basic game programming',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes.git',
    image: '',
    category: 'python',
    priority: 'low',
    completed: true
  },

  // HTML & JAVASCRIPT PROJECTS - Individual Tasks
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'Calculate age from birth date with precise calculations',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Date Processing', 'DOM'],
    problem: 'Provides accurate age calculation for various applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'Calculate Body Mass Index with health recommendations',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Health Calculations', 'Forms'],
    problem: 'Helps users track their health metrics and get recommendations',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'camera-app',
    title: 'Camera Application',
    description: 'Take photos using device camera with web interface',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Camera API', 'WebRTC'],
    problem: 'Enables camera functionality in web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'dark-mode-toggle',
    title: 'Dark Mode Toggle',
    description: 'Switch between light and dark themes with smooth transitions',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Theme Switching', 'LocalStorage'],
    problem: 'Improves user experience with customizable theme options',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'goal-countdown',
    title: 'Goal Countdown Timer',
    description: 'Countdown timer for tracking goals and deadlines',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Timer Logic', 'Date Calculations'],
    problem: 'Helps users stay motivated and track progress towards goals',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'gps-tracker',
    title: 'GPS Location Tracker',
    description: 'Get and display current GPS coordinates',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Geolocation API', 'GPS'],
    problem: 'Provides location services for web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'grocery-finder',
    title: 'Grocery Store Finder',
    description: 'Find nearby grocery stores using location services',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Maps API', 'Geolocation'],
    problem: 'Helps users locate nearby grocery stores and markets',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'internet-speed-test',
    title: 'Internet Speed Tester',
    description: 'Test internet connection speed and performance',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Network API', 'Performance'],
    problem: 'Provides real-time internet speed measurements',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'live-vlog',
    title: 'Live Vlog Application',
    description: 'Stream live video content with web interface',
    techStack: ['HTML', 'CSS', 'JavaScript', 'WebRTC', 'Video Streaming'],
    problem: 'Enables live video streaming for content creators',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'mood-music',
    title: 'Mood Music Player',
    description: 'Music player that suggests songs based on mood',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Audio API', 'Mood Detection'],
    problem: 'Provides personalized music recommendations based on user mood',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'whatsapp-sender',
    title: 'WhatsApp Message Sender',
    description: 'Send WhatsApp messages directly from web interface',
    techStack: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Messaging'],
    problem: 'Enables WhatsApp messaging from web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'calculator',
    title: 'Simple Calculator',
    description: 'Basic calculator with arithmetic operations',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Math Operations', 'DOM'],
    problem: 'Provides basic calculation functionality for everyday use',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'text-to-speech',
    title: 'Text to Speech Converter',
    description: 'Convert text to speech with voice synthesis',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Speech API', 'Audio'],
    problem: 'Makes content accessible to visually impaired users',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'speed-tester',
    title: 'Speed Tester',
    description: 'Test typing speed and accuracy',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Timer Logic', 'Performance'],
    problem: 'Helps users improve typing speed and accuracy',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter',
    description: 'Convert between Celsius, Fahrenheit, and Kelvin',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Unit Conversion', 'Forms'],
    problem: 'Provides temperature conversion for various applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'email-sender',
    title: 'Email Sender',
    description: 'Send emails directly from web interface',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Email API', 'SMTP'],
    problem: 'Enables email sending from web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  },
  {
    id: 'unit-converter',
    title: 'Unit Converter',
    description: 'Convert between different units of measurement',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Unit Conversion', 'Calculations'],
    problem: 'Provides unit conversion for various measurement systems',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'medium',
    completed: true
  },
  {
    id: 'video-capture',
    title: 'Video Capture Application',
    description: 'Record video using device camera with web interface',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Video API', 'WebRTC'],
    problem: 'Enables video recording functionality in web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects.git',
    image: '',
    category: 'html-js',
    priority: 'high',
    completed: true
  }
];

export const blogPosts: BlogPost[] = [
  // Linux & DevOps Articles
  {
    id: 'linux-gui-programs',
    title: '5 Popular GUI Programs in Linux and the Terminal Commands Behind Them',
    description: 'Exploring the relationship between GUI applications and their underlying terminal commands in Linux systems.',
    url: 'https://medium.com/@mahakmakkar621/5-popular-gui-programs-in-linux-and-the-terminal-commands-behind-them-ea2aa47fa964',
    date: '2024',
    readTime: '8 min read',
    category: 'Linux & DevOps'
  },
  {
    id: 'companies-linux-benefits',
    title: 'Why Top Companies Use Linux and the Benefits They Reap',
    description: 'Analyzing why major corporations choose Linux and the advantages they gain from this decision.',
    url: 'https://medium.com/@mahakmakkar621/why-top-companies-use-linux-and-the-benefits-they-reap-70c9b449ef1b',
    date: '2024',
    readTime: '10 min read',
    category: 'Linux & DevOps'
  },
  {
    id: 'docker-sound-access',
    title: 'Find a Way to Give Sound Card Access to Any Program Inside Docker',
    description: 'Technical guide on enabling audio functionality for applications running inside Docker containers.',
    url: 'https://medium.com/@mahakmakkar621/find-a-way-to-give-sound-card-access-to-any-program-inside-docker-6c745254807c',
    date: '2024',
    readTime: '6 min read',
    category: 'Docker & Cloud'
  },
  {
    id: 'docker-case-studies',
    title: 'How Companies Are Leveraging Docker: Real-World Case Studies',
    description: 'Exploring real-world implementations of Docker technology across various industries.',
    url: 'http://medium.com/@mahakmakkar621/how-companies-are-leveraging-docker-real-world-case-studies-212a83d0444e',
    date: '2024',
    readTime: '12 min read',
    category: 'Docker & Cloud'
  },
  {
    id: 'linux-icon-changer',
    title: 'Change the Logo or Icon of Any Program in Linux',
    description: 'Step-by-step guide to customizing program icons and logos in Linux desktop environments.',
    url: 'https://medium.com/@mahakmakkar621/change-the-logo-or-icon-of-any-program-in-linux-bbaedbbbec93',
    date: '2024',
    readTime: '5 min read',
    category: 'Linux & DevOps'
  },
  {
    id: 'netflix-aws-strategy',
    title: 'How Netflix is Streaming Innovation with AWS: A Deep Dive into Its Cloud Strategy',
    description: 'Comprehensive analysis of Netflix\'s cloud infrastructure and AWS implementation strategies.',
    url: 'https://medium.com/@mahakmakkar621/how-netflix-is-streaming-innovation-with-aws-a-deep-dive-into-its-cloud-strategy-a053477d1fc7',
    date: '2024',
    readTime: '15 min read',
    category: 'Cloud & DevOps'
  },
  {
    id: 'jenkins-cicd-pipeline',
    title: 'Building a Complete CI/CD DevOps Pipeline with Jenkins, GitHub, Docker, Flask on RHEL9',
    description: 'Comprehensive guide to setting up automated deployment pipelines using modern DevOps tools.',
    url: 'https://medium.com/@mahakmakkar621/building-a-complete-ci-cd-devops-pipeline-with-jenkins-github-docker-flask-on-rhel9-490cefb6f2b6',
    date: '2024',
    readTime: '20 min read',
    category: 'DevOps & CI/CD'
  },
  {
    id: 'docker-systemctl',
    title: 'Running Systemctl Commands Inside a Docker Container',
    description: 'Technical tutorial on executing systemctl commands within Docker containerized environments.',
    url: 'https://medium.com/@mahakmakkar621/running-systemctl-commands-inside-a-docker-container-1246184b0869',
    date: '2024',
    readTime: '7 min read',
    category: 'Docker & Cloud'
  },
  {
    id: 'docker-in-docker',
    title: 'Setting Up Docker Inside Docker (DinD) Using Official Docker-in-Docker Image',
    description: 'Complete setup guide for Docker-in-Docker configurations for advanced containerization scenarios.',
    url: 'https://medium.com/@mahakmakkar621/setting-up-docker-inside-docker-dind-using-official-docker-in-docker-image-f4e788e8932a',
    date: '2024',
    readTime: '8 min read',
    category: 'Docker & Cloud'
  },

  // Git & Version Control Articles
  {
    id: 'git-branching',
    title: 'Navigating Git: Creating, Merging, and Managing Branches',
    description: 'Comprehensive guide to Git branch management and version control best practices.',
    url: 'https://medium.com/@mahakmakkar621/navigating-git-creating-merging-and-managing-branches-c32b4854f060',
    date: '2024',
    readTime: '10 min read',
    category: 'Git & Version Control'
  },
  {
    id: 'ctrl-c-ctrl-z',
    title: 'The Command Working Behind the Ctrl+C and Ctrl+Z: Interrupt Signals',
    description: 'Deep dive into Linux signal handling and process control mechanisms.',
    url: 'https://medium.com/@mahakmakkar621/the-command-working-behind-the-ctrl-c-and-ctrl-z-interrupt-si-9a6434c42d16',
    date: '2024',
    readTime: '6 min read',
    category: 'Linux & DevOps'
  },
  {
    id: 'git-repository-setup',
    title: 'Creating a Git Repository and Pushing to GitHub: A Step-by-Step Guide',
    description: 'Complete tutorial for setting up Git repositories and managing code on GitHub.',
    url: 'https://medium.com/@mahakmakkar621/creating-a-git-repository-and-pushing-to-github-a-step-by-step-guide-928bacfc256a',
    date: '2024',
    readTime: '8 min read',
    category: 'Git & Version Control'
  },

  // Python Automation Articles
  {
    id: 'python-linkedin-posting',
    title: 'Python Code to Post on LinkedIn',
    description: 'Automate LinkedIn posting using Python with API integration and automation techniques.',
    url: 'https://medium.com/@mahakmakkar621/python-code-to-post-on-linkedin-3249746a2a1c',
    date: '2024',
    readTime: '5 min read',
    category: 'Python Automation'
  },
  {
    id: 'python-social-media',
    title: 'Python Code to Post on Twitter, Facebook, and Instagram',
    description: 'Comprehensive guide to automating social media posting across multiple platforms using Python.',
    url: 'https://medium.com/@mahakmakkar621/python-code-to-post-on-twitter-facebook-and-instagram-98cbcc58b50e',
    date: '2024',
    readTime: '7 min read',
    category: 'Python Automation'
  },
  {
    id: 'python-whatsapp',
    title: 'Python Code to Send WhatsApp Message to Someone',
    description: 'Automate WhatsApp messaging using Python with WhatsApp Business API integration.',
    url: 'https://medium.com/@mahakmakkar621/python-code-to-send-whatsapp-message-to-someone-bf246806727e',
    date: '2024',
    readTime: '6 min read',
    category: 'Python Automation'
  },
  {
    id: 'python-phone-calls',
    title: 'Python Code to Make a Call',
    description: 'Automate phone calls using Python with text-to-speech and voice calling capabilities.',
    url: 'https://medium.com/@mahakmakkar621/python-code-to-make-a-call-b619a4defb8a',
    date: '2024',
    readTime: '5 min read',
    category: 'Python Automation'
  },
  {
    id: 'python-sms',
    title: 'Python Code to Successfully Send a Text Message',
    description: 'Automate SMS sending using Python with Twilio API and other messaging services.',
    url: 'https://medium.com/@mahakmakkar621/python-code-to-successfully-send-a-text-message-6f6873103347',
    date: '2024',
    readTime: '4 min read',
    category: 'Python Automation'
  },
  {
    id: 'python-email',
    title: 'Python Code to Successfully Send an Email',
    description: 'Automate email sending using Python with SMTP and advanced email formatting.',
    url: 'https://medium.com/@mahakmakkar621/python-code-to-successfully-send-an-email-36f6849c538b',
    date: '2024',
    readTime: '5 min read',
    category: 'Python Automation'
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
  { name: 'HTML', level: 85, category: 'fullstack' },
  { name: 'CSS', level: 80, category: 'fullstack' },
  { name: 'JavaScript', level: 78, category: 'fullstack' },
  { name: 'Flask API', level: 85, category: 'fullstack' },
  { name: 'Bootstrap', level: 82, category: 'fullstack' },
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