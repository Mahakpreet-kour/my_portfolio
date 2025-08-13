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
  readTime?: string;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'hackathon' | 'certification' | 'volunteer';
  certificateLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'core' | 'ai' | 'devops' | 'fullstack';
}

export const projects: Project[] = [
  // MAIN PROJECTS (now 16)
  {
    id: 'smartops-ai-all-in-one-menu-dashboard',
    title: 'SmartOps AI All-in-One Menu Dashboard',
    description: 'A highly powerful and student-friendly project that integrates system control, AI, automation, and machine learning into one streamlined console.',
    techStack: ['Python', 'AI', 'Machine Learning', 'Automation', 'System Control'],
    problem: 'Centralizes system control, AI tools, and automation in one powerful dashboard.',
    githubLink: 'https://github.com/Mahakpreet-kour/SmartOps-AI-All-in-One-Menu-Dashboard',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'career-guidance-ai-chatbot',
    title: 'Career Guidance AI Chatbot',
    description: 'AI-powered chatbot providing personalized career guidance and advice.',
    techStack: ['Python', 'AI', 'NLP', 'Streamlit'],
    problem: 'Helps users make informed career decisions using AI.',
    githubLink: 'https://github.com/Mahakpreet-kour/Career_guidance_ai_chatbot',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'borosmart-loan-advisor',
    title: 'Borosmart Loan Advisor',
    description: 'AI-based system for smart loan recommendations and eligibility checks.',
    techStack: ['Python', 'AI', 'Machine Learning', 'Flask'],
    problem: 'Assists users in finding the best loan options.',
    githubLink: 'https://github.com/Mahakpreet-kour/Borrow_smart_loan_advisor',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'studymate-ai',
    title: 'StudyMate AI',
    description: 'AI-powered study assistant for personalized learning and productivity.',
    techStack: ['Python', 'AI', 'Streamlit'],
    problem: 'Enhances student learning with AI-driven tools.',
    githubLink: 'https://github.com/Mahakpreet-kour/Studymate__AI',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'smart-file-explorer',
    title: 'Smart File Explorer',
    description: 'A smart file explorer for efficient file management and search.',
    techStack: ['Python', 'Streamlit'],
    problem: 'Simplifies file organization and access.',
    githubLink: 'https://github.com/Mahakpreet-kour/Smart-file-explorer',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'multi-resume-screening',
    title: 'Multi-Resume Screening System',
    description: 'Automated system for screening and ranking multiple resumes using AI.',
    techStack: ['Python', 'AI', 'NLP'],
    problem: 'Speeds up the hiring process by automating resume screening.',
    githubLink: 'https://github.com/Mahakpreet-kour/Multi-resume-screening-system',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'smart-menu-base',
    title: 'Smart Menu Base',
    description: 'A smart, customizable menu base for desktop automation.',
    techStack: ['Python', 'Automation'],
    problem: 'Centralizes access to various automation scripts.',
    githubLink: 'https://github.com/Mahakpreet-kour/Smart-menubase-project',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'linux-ssh-dashboard',
    title: 'Linux SSH Dashboard',
    description: 'Dashboard for managing and monitoring Linux SSH connections.',
    techStack: ['Python', 'Linux', 'SSH'],
    problem: 'Simplifies SSH session management for Linux servers.',
    githubLink: 'https://github.com/Mahakpreet-kour/linux-ssh-dashboard',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'fatigue-score-predictor',
    title: 'Fatigue Score Predictor',
    description: 'Machine learning model to predict fatigue scores from user data.',
    techStack: ['Python', 'ML', 'Streamlit'],
    problem: 'Helps users monitor and manage fatigue levels.',
    githubLink: 'https://github.com/Mahakpreet-kour/fatigue_score_predictor_mlproj',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'stock-trend-predictor',
    title: 'Stock Trend Predictor',
    description: 'AI-powered tool for predicting stock market trends.',
    techStack: ['Python', 'AI', 'ML'],
    problem: 'Assists users in making informed stock trading decisions.',
    githubLink: 'https://github.com/Mahakpreet-kour/Stock_trend_predictor',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'genaiops-windows-assistant',
    title: 'GenAIops Windows Assistant',
    description: 'AI-powered assistant for automating tasks on Windows.',
    techStack: ['Python', 'AI', 'Automation'],
    problem: 'Automates routine tasks on Windows OS.',
    githubLink: 'https://github.com/Mahakpreet-kour/GenAIOps-WindowsAssistant',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'all-in-one-menu-dashboard',
    title: 'All in One Menu Dashboard',
    description: 'Centralized dashboard for accessing multiple automation tools.',
    techStack: ['Python', 'Automation'],
    problem: 'Brings all automation scripts under one dashboard.',
    githubLink: 'https://github.com/Mahakpreet-kour/All_In_One-Menu-Dashboard',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'jarvis-ai-assistant',
    title: 'Jarvis AI Menubase Assistant',
    description: 'Advanced AI-powered desktop assistant with voice commands and automation capabilities',
    techStack: ['Python', 'AI', 'Speech Recognition', 'Automation', 'Natural Language Processing'],
    problem: 'Streamlines desktop tasks and enhances productivity through voice-controlled AI assistance',
    githubLink: 'https://github.com/Mahakpreet-kour/jarvis_ai_Desktop_Assistant',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'gemini-kids-quiz-game',
    title: 'Gemini Kids Quiz Game',
    description: 'Fun and educational quiz game for kids using Gemini AI.',
    techStack: ['Python', 'AI', 'Gemini'],
    problem: 'Makes learning fun and interactive for children.',
    githubLink: 'https://github.com/Mahakpreet-kour/Gemini-Kids-Quiz-Game',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'devops-project-1',
    title: 'DevOps Infrastructure Automation',
    description: 'Comprehensive DevOps project showcasing infrastructure automation and CI/CD pipelines.',
    techStack: ['Python', 'Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Terraform', 'Git'],
    problem: 'Automates infrastructure deployment and streamlines development workflows.',
    githubLink: 'https://github.com/Mahakpreet-kour/devops_project_1',
    image: '',
    category: 'main',
    priority: 'high',
    completed: true
  },
  // PYTHON PROJECTS (11)
  {
    id: 'text-converter',
    title: 'How to Text Converter',
    description: 'Convert various formats to text using Python automation.',
    techStack: ['Python', 'Text Processing', 'Automation'],
    problem: 'Automates conversion of files and data to text.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'text-to-audio',
    title: 'Text to Audio Converter',
    description: 'Convert text to speech/audio using Python.',
    techStack: ['Python', 'Text-to-Speech', 'Audio'],
    problem: 'Makes content accessible by converting text to audio.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'make-call',
    title: 'How to Call',
    description: 'Automate phone calls using Python scripts.',
    techStack: ['Python', 'Telephony', 'Automation'],
    problem: 'Automates making phone calls programmatically.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'make-image',
    title: 'How to Make Image',
    description: 'Generate or manipulate images using Python.',
    techStack: ['Python', 'Image Processing'],
    problem: 'Automates image creation and editing.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'google-search-output',
    title: 'How to Search through Google and Output',
    description: 'Search Google and process results using Python.',
    techStack: ['Python', 'Web Scraping', 'Google Search'],
    problem: 'Automates Google search and result extraction.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'send-email',
    title: 'How to Send Email',
    description: 'Send emails programmatically using Python.',
    techStack: ['Python', 'Email', 'SMTP'],
    problem: 'Automates sending emails from scripts.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'send-sms',
    title: 'How to Send SMS',
    description: 'Send SMS messages using Python automation.',
    techStack: ['Python', 'SMS', 'Twilio'],
    problem: 'Automates sending SMS messages.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'whatsapp-message',
    title: 'Message on WhatsApp through Python',
    description: 'Send WhatsApp messages using Python scripts.',
    techStack: ['Python', 'WhatsApp API', 'Automation'],
    problem: 'Automates WhatsApp messaging.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'post-on-insta',
    title: 'Post on Insta',
    description: 'Automate Instagram posting using Python.',
    techStack: ['Python', 'Instagram API', 'Automation'],
    problem: 'Automates posting to Instagram.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description: 'Play Rock Paper Scissors game with Python.',
    techStack: ['Python', 'Game'],
    problem: 'Demonstrates basic game logic in Python.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'swap-face',
    title: 'Swap Face',
    description: 'Swap faces in images using Python and OpenCV.',
    techStack: ['Python', 'OpenCV', 'Image Processing'],
    problem: 'Performs face swap using computer vision.',
    githubLink: 'https://github.com/Mahakpreet-kour/Python_codes',
    image: '',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  // HTML-JS PROJECTS (21)
  {
    id: 'htmljs-video-capture',
    title: 'Video Capture Application',
    description: 'Capture video from webcam and save or process it in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Webcam', 'Video'],
    problem: 'Allows users to record video directly from their browser.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-unit-converter',
    title: 'Unit Converter',
    description: 'Convert between different units (length, weight, etc.) in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Unit Conversion'],
    problem: 'Helps users quickly convert units.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-email-sender',
    title: 'Email Sender',
    description: 'Send emails directly from a web form.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Email'],
    problem: 'Allows users to send emails from the browser.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-temperature-converter',
    title: 'Temperature Converter',
    description: 'Convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Temperature Conversion'],
    problem: 'Quickly convert temperature units.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-speed-tester',
    title: 'Speed Tester',
    description: 'Test your typing or internet speed in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Speed Test'],
    problem: 'Lets users check their speed easily.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-text-to-speech',
    title: 'Text-to-Speech Converter',
    description: 'Convert written text to spoken audio.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Text-to-Speech'],
    problem: 'Makes content accessible by reading text aloud.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-simple-calculator',
    title: 'Simple Calculator',
    description: 'Perform basic arithmetic operations in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Calculator'],
    problem: 'Helps users calculate quickly.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-whatsapp-message',
    title: 'WhatsApp Message Sender',
    description: 'Send WhatsApp messages from a web interface.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
    problem: 'Automates WhatsApp messaging from browser.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-mode-music',
    title: 'Mode Music Player',
    description: 'Play music with different modes (shuffle, repeat, etc.).',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Music Player'],
    problem: 'Lets users play and control music in browser.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-live-vlog',
    title: 'Live Vlog Application',
    description: 'Stream or record live video vlogs in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Live Vlog'],
    problem: 'Enables live vlogging from browser.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-internet-speed',
    title: 'Internet Speed Tester',
    description: 'Test your internet speed in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Internet Speed Test'],
    problem: 'Lets users check their internet speed.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-grocery-finder',
    title: 'Grocery Store Finder',
    description: 'Find nearby grocery stores using browser location.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Grocery Finder'],
    problem: 'Helps users locate grocery stores.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-gps-tracker',
    title: 'GPS Location Tracker',
    description: 'Track and display your GPS location in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GPS Tracker'],
    problem: 'Shows user location using browser GPS.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-goal-countdown',
    title: 'Goal Countdown Timer',
    description: 'Set and track countdowns to your goals.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Countdown Timer'],
    problem: 'Helps users stay motivated by tracking goals.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-dark-mode',
    title: 'Dark Mode Toggle',
    description: 'Switch between light and dark mode in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Dark Mode'],
    problem: 'Improves user experience with dark mode.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-camera-app',
    title: 'Camera Application',
    description: 'Take photos using your webcam in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Camera App'],
    problem: 'Lets users capture photos from browser.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-bmi-calculator',
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) in browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'BMI Calculator'],
    problem: 'Helps users check their BMI easily.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-age-calculator',
    title: 'Age Calculator',
    description: 'Calculate your age from date of birth.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Age Calculator'],
    problem: 'Lets users calculate their age easily.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-photo-to-email',
    title: 'Photo Capture & Email Sender',
    description: 'Capture a photo using your webcam and instantly send it as an email attachment from the browser.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Photo Capture', 'Email'],
    problem: 'Enables users to take a photo and email it directly in one step.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-video-to-email',
    title: 'Video Capture & Email Sender',
    description: 'Record a video in the browser and instantly send it as an email attachment.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Video Capture', 'Email'],
    problem: 'Allows users to capture video and email it directly from the web app.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  },
  {
    id: 'htmljs-last-gmail-info',
    title: 'Info of Your Last Gmail',
    description: 'Display information about your last received Gmail.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Gmail Info'],
    problem: 'Shows details of the last Gmail message.',
    githubLink: 'https://github.com/Mahakpreet-kour/HTML_and_JS_projects',
    image: '',
    category: 'html-js',
    priority: 'low',
    completed: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'docker-gui-software',
    title: 'Running Graphical Software in Docker Containers',
    description: 'Comprehensive guide on running GUI applications inside Docker containers with proper display and audio support.',
    url: 'https://medium.com/@mahakmakkar621/running-graphical-software-in-docker-containers-46572ea8bf38',
    date: '2024',
    readTime: '8 min read',
    category: 'Docker & DevOps'
  },
  {
    id: 'python-menu-commands',
    title: 'Python Menu to Run Various Commands',
    description: 'Building an interactive command menu system using Python for system automation.',
    url: 'https://medium.com/@mahakmakkar621/python-menu-to-run-various-commands-a577bca8211d',
    date: '2024',
    readTime: '6 min read',
    category: 'Python & Automation'
  },
  {
    id: 'docker-webserver',
    title: 'Configuring Webserver Inside Docker Container',
    description: 'Step-by-step guide to setting up and configuring a web server within a Docker container on CentOS 7.',
    url: 'https://medium.com/@mahakmakkar621/configuring-webserver-inside-docker-container-in-centos-7-1afac390f3f8',
    date: '2024',
    readTime: '10 min read',
    category: 'Docker & DevOps'
  },
  {
    id: 'linux-terminals',
    title: 'Adding More Terminals and GUI Interfaces in Linux',
    description: 'Exploring various ways to enhance Linux terminal capabilities and GUI interfaces.',
    url: 'https://medium.com/@mahakmakkar621/to-add-more-terminals-and-gui-interfaces-in-linux-cdc30bb1fab3',
    date: '2024',
    readTime: '7 min read',
    category: 'Linux & System Admin'
  },
  {
    id: 'selenium-docker',
    title: 'Running Selenium Tests in Docker',
    description: 'Beginner-friendly guide to implementing Selenium testing within Docker containers.',
    url: 'https://medium.com/@mahakmakkar621/running-selenium-tool-tests-in-docker-a-beginner-friendly-guide-d95284557f03',
    date: '2024',
    readTime: '9 min read',
    category: 'Testing & DevOps'
  },
  {
    id: 'linear-regression-docker',
    title: 'Running Python Linear Regression in Docker',
    description: 'Implementation guide for running machine learning models inside Docker containers using Red Hat UBI8.',
    url: 'https://medium.com/@mahakmakkar621/run-a-python-linear-regression-model-inside-a-docker-container-using-red-hat-ubi8-4c42b05a36a2',
    date: '2024',
    readTime: '8 min read',
    category: 'Machine Learning & Docker'
  },
  {
    id: 'folder-backup-flask',
    title: 'Automate Folder Backup with Flask API',
    description: 'Creating an automated backup system using Flask API and curl commands on Linux.',
    url: 'https://medium.com/@mahakmakkar621/automate-folder-backup-with-flask-api-and-curl-on-linux-d62fcfe90b61',
    date: '2024',
    readTime: '7 min read',
    category: 'Python & DevOps'
  },
  {
    id: 'python-cli-docker',
    title: 'Building Python CLI Apps in Docker',
    description: 'Guide to building and running menu-driven Python CLI applications inside Docker containers.',
    url: 'https://medium.com/@mahakmakkar621/build-and-run-a-menu-driven-python-cli-app-inside-a-red-hat-ubi8-docker-container-a9d6dbb16679',
    date: '2024',
    readTime: '8 min read',
    category: 'Python & Docker'
  },
  {
    id: 'flask-docker-ubi8',
    title: 'Running Flask Web Apps in Docker UBI8',
    description: 'Comprehensive guide to deploying Flask web applications using Red Hat UBI8 Docker containers.',
    url: 'https://medium.com/@mahakmakkar621/running-a-flask-web-app-inside-a-docker-container-using-red-hat-ubi8-47bb3bb6f514',
    date: '2024',
    readTime: '9 min read',
    category: 'Web Development & Docker'
  },
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
    id: 'major-projects-8',
    title: '8+ Major Projects Completed',
    description: 'Successfully completed 8+ major projects in AI, automation, and development.',
    date: '2023',
    type: 'hackathon'
  },
  {
    id: 'national-exhibition-volunteer',
    title: 'National Level Project Exhibition Volunteering',
    description: 'Volunteered at National Level Project Exhibition.',
    date: '2023',
    type: 'volunteer'
  },
  {
    id: 'ric-jaipur-volunteer',
    title: 'RIC Jaipur Volunteering',
    description: 'Volunteered at RIC Jaipur for national-level event.',
    date: '2023',
    type: 'volunteer'
  },
  {
    id: 'vgu-hackathon-runnerup',
    title: 'VGU Hackathon (Smart India Hackathon) Runner Up (Top 10)',
    description: 'Runner up (Top 10) in VGU Smart India Hackathon.',
    date: '2023',
    type: 'hackathon'
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
  { name: 'Ansible', level: 85, category: 'devops' },
  { name: 'DevOps', level: 85, category: 'devops' }
];

export const socialLinks = {
  github: 'https://github.com/Mahakpreet-kour',
  linkedin: 'https://www.linkedin.com/in/mahakpreet-kour-b83774286/',
  twitter: 'https://twitter.com/MahakpreetK',
  email: 'mahakmakkar621@gmail.com'
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