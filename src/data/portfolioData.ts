export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  problem: string;
  liveLink?: string;
  githubLink?: string;
  image: string;
  category: 'python' | 'linux' | 'docker' | 'javascript' | 'streamlit' | 'main';
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
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
    id: 'smartops-ai-dashboard',
    title: 'SmartOps AI Dashboard',
    description: 'Intelligent operations dashboard with AI-powered monitoring and SSH automation',
    techStack: ['Streamlit', 'Gemini AI', 'Docker', 'SSH', 'Python'],
    problem: 'Streamlines DevOps workflows with AI-driven insights and automated system management',
    githubLink: 'https://github.com/Mahakpreet-kour/SmartOps-AI-Dashboard',
    liveLink: 'https://smartops-ai-dashboard.streamlit.app',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'borrowsmart-app',
    title: 'BorrowSmart App',
    description: 'ML-powered loan advisor that provides personalized financial recommendations',
    techStack: ['Python', 'Machine Learning', 'Scikit-learn', 'Streamlit'],
    problem: 'Helps users make informed borrowing decisions through predictive modeling',
    githubLink: 'https://github.com/Mahakpreet-kour/BorrowSmart-App',
    liveLink: 'https://borrowsmart-app.streamlit.app',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'resume-matcher',
    title: 'Resume Compatibility Checker',
    description: 'Bulk resume analysis tool using NLP to match candidates with job requirements',
    techStack: ['Python', 'NLP', 'Gemini API', 'Streamlit', 'PDF Processing'],
    problem: 'Automates resume screening process for HR teams with AI-powered matching',
    githubLink: 'https://github.com/Mahakpreet-kour/Resume-Compatibility-Checker',
    liveLink: 'https://resume-matcher.streamlit.app',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    priority: 'high',
    completed: true
  },
  {
    id: 'linux-ssh-dashboard',
    title: 'Linux SSH Dashboard',
    description: 'Voice and text command interface for remote Linux system management',
    techStack: ['Python', 'SSH', 'Voice Recognition', 'Linux', 'Flask'],
    problem: 'Simplifies remote server administration with intuitive voice commands',
    githubLink: 'https://github.com/Mahakpreet-kour/Linux-SSH-Dashboard',
    liveLink: 'https://linux-ssh-dashboard.herokuapp.com',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main',
    priority: 'high',
    completed: true
  },

  // PYTHON PROJECTS
  {
    id: 'email-automation',
    title: 'Email Automation System',
    description: 'Python script to send automated emails with attachments and HTML formatting',
    techStack: ['Python', 'SMTP', 'Email', 'Automation', 'HTML'],
    problem: 'Automates email sending for marketing campaigns and notifications',
    githubLink: 'https://github.com/Mahakpreet-kour/Python-Email-Automation',
    liveLink: 'https://email-automation.streamlit.app',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    githubLink: 'https://github.com/Mahakpreet-kour/Python-SMS-Automation',
    liveLink: 'https://sms-automation.streamlit.app',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'phone-call-automation',
    title: 'Phone Call Automation',
    description: 'Make automated phone calls using Python with text-to-speech',
    techStack: ['Python', 'Twilio API', 'Voice Calls', 'TTS'],
    problem: 'Automates phone calls for notifications and reminders',
    githubLink: 'https://github.com/Mahakpreet-kour/Python-Phone-Call-Automation',
    liveLink: 'https://phone-call-automation.streamlit.app',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'python',
    priority: 'medium',
    completed: true
  },
  {
    id: 'social-media-automation',
    title: 'Social Media Automation',
    description: 'Post to LinkedIn, Twitter, Facebook, and Instagram automatically',
    techStack: ['Python', 'Selenium', 'Social Media APIs', 'Automation'],
    problem: 'Automates social media posting across multiple platforms',
    githubLink: 'https://github.com/Mahakpreet-kour/Social-Media-Automation',
    liveLink: 'https://social-media-automation.streamlit.app',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    githubLink: 'https://github.com/Mahakpreet-kour/WhatsApp-Automation',
    liveLink: 'https://whatsapp-automation.streamlit.app',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'python',
    priority: 'high',
    completed: true
  },
  {
    id: 'menu-driven-python',
    title: 'Menu-Driven Python Project',
    description: 'Comprehensive menu-driven application with multiple automation features',
    techStack: ['Python', 'Menu System', 'Automation', 'GUI'],
    problem: 'Provides centralized access to all automation tools',
    githubLink: 'https://github.com/Mahakpreet-kour/Menu-Driven-Python-Project',
    liveLink: 'https://menu-driven-python.streamlit.app',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'python',
    priority: 'medium',
    completed: true
  },

  // LINUX PROJECTS
  {
    id: 'linux-icon-changer',
    title: 'Linux Icon Changer',
    description: 'Change program icons and logos in Linux desktop environment',
    techStack: ['Linux', 'Bash', 'Desktop Environment', 'Icon Management'],
    problem: 'Customizes Linux desktop appearance and program icons',
    githubLink: 'https://github.com/Mahakpreet-kour/Linux-Icon-Changer',
    liveLink: 'https://linux-icon-changer.streamlit.app',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'linux',
    priority: 'medium',
    completed: true
  },
  {
    id: 'linux-terminal-gui',
    title: 'Linux Terminal GUI Manager',
    description: 'Add multiple terminals and GUI interfaces to Linux system',
    techStack: ['Linux', 'Bash', 'GUI', 'Terminal Management'],
    problem: 'Enhances Linux desktop with additional terminals and GUI tools',
    githubLink: 'https://github.com/Mahakpreet-kour/Linux-Terminal-GUI-Manager',
    liveLink: 'https://linux-terminal-gui.streamlit.app',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'linux',
    priority: 'high',
    completed: true
  },
  {
    id: 'linux-communication-tool',
    title: 'Linux Communication Tool',
    description: 'Send emails, WhatsApp messages, tweets, and SMS from Linux terminal',
    techStack: ['Linux', 'Bash', 'Python', 'Communication APIs'],
    problem: 'Enables communication from Linux terminal without GUI',
    githubLink: 'https://github.com/Mahakpreet-kour/Linux-Communication-Tool',
    liveLink: 'https://linux-communication.streamlit.app',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'linux',
    priority: 'high',
    completed: true
  },

  // DOCKER PROJECTS
  {
    id: 'docker-tool-runner',
    title: 'Docker Tool Runner',
    description: 'Run any tool or technology inside Docker containers',
    techStack: ['Docker', 'Containerization', 'Multi-tool', 'DevOps'],
    problem: 'Isolates and runs various tools in controlled environments',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Tool-Runner',
    liveLink: 'https://docker-tool-runner.streamlit.app',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'high',
    completed: true
  },
  {
    id: 'docker-apache-server',
    title: 'Docker Apache Web Server',
    description: 'Setup and configure Apache web server in Docker container',
    techStack: ['Docker', 'Apache', 'Web Server', 'Containerization'],
    problem: 'Deploys Apache web server in isolated Docker environment',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Apache-Server',
    liveLink: 'https://docker-apache.streamlit.app',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'high',
    completed: true
  },
  {
    id: 'docker-systemctl',
    title: 'Docker Systemctl Runner',
    description: 'Run systemctl commands inside Docker containers',
    techStack: ['Docker', 'Systemctl', 'Systemd', 'Containerization'],
    problem: 'Enables systemctl functionality within Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Systemctl-Runner',
    liveLink: 'https://docker-systemctl.streamlit.app',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'medium',
    completed: true
  },
  {
    id: 'docker-sound-access',
    title: 'Docker Sound Card Access',
    description: 'Give sound card access to programs inside Docker containers',
    techStack: ['Docker', 'Audio', 'Sound Card', 'Containerization'],
    problem: 'Enables audio functionality in Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Sound-Access',
    liveLink: 'https://docker-sound.streamlit.app',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'medium',
    completed: true
  },
  {
    id: 'docker-gui-apps',
    title: 'Docker GUI Applications',
    description: 'Run graphical software inside Docker containers',
    techStack: ['Docker', 'GUI', 'X11', 'Containerization'],
    problem: 'Enables GUI applications to run in Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-GUI-Applications',
    liveLink: 'https://docker-gui.streamlit.app',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'high',
    completed: true
  },
  {
    id: 'docker-in-docker',
    title: 'Docker in Docker Setup',
    description: 'Learn how to setup Docker inside Docker containers',
    techStack: ['Docker', 'DinD', 'Containerization', 'Nesting'],
    problem: 'Enables Docker functionality within Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-in-Docker',
    liveLink: 'https://docker-in-docker.streamlit.app',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'medium',
    completed: true
  },
  {
    id: 'docker-firefox',
    title: 'Docker Firefox Browser',
    description: 'Install and run Firefox browser inside Docker container',
    techStack: ['Docker', 'Firefox', 'Browser', 'Containerization'],
    problem: 'Provides isolated Firefox browser environment',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Firefox',
    liveLink: 'https://docker-firefox.streamlit.app',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'low',
    completed: true
  },
  {
    id: 'docker-vlc',
    title: 'Docker VLC Media Player',
    description: 'Play VLC media player inside Docker container',
    techStack: ['Docker', 'VLC', 'Media Player', 'Containerization'],
    problem: 'Enables media playback in Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-VLC',
    liveLink: 'https://docker-vlc.streamlit.app',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'docker',
    priority: 'low',
    completed: true
  },

  // JAVASCRIPT PROJECTS
  {
    id: 'js-camera-app',
    title: 'JavaScript Camera Application',
    description: 'Take pictures using JavaScript with camera access',
    techStack: ['JavaScript', 'Camera API', 'WebRTC', 'HTML5'],
    problem: 'Enables camera functionality in web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/JS-Camera-App',
    liveLink: 'https://js-camera-app.netlify.app',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'javascript',
    priority: 'high',
    completed: true
  },
  {
    id: 'js-email-sender',
    title: 'JavaScript Email Sender',
    description: 'Send emails using JavaScript or API integration',
    techStack: ['JavaScript', 'Email API', 'SMTP', 'Web APIs'],
    problem: 'Enables email sending from web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/JS-Email-Sender',
    liveLink: 'https://js-email-sender.netlify.app',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'javascript',
    priority: 'high',
    completed: true
  },
  {
    id: 'js-photo-email',
    title: 'JavaScript Photo Email Sender',
    description: 'Send captured photos to email using JavaScript',
    techStack: ['JavaScript', 'Camera API', 'Email API', 'File Upload'],
    problem: 'Automates photo sharing via email from web apps',
    githubLink: 'https://github.com/Mahakpreet-kour/JS-Photo-Email',
    liveLink: 'https://js-photo-email.netlify.app',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'javascript',
    priority: 'medium',
    completed: true
  },
  {
    id: 'js-video-recorder',
    title: 'JavaScript Video Recorder',
    description: 'Record video on button click and send via email',
    techStack: ['JavaScript', 'Video API', 'WebRTC', 'Email API'],
    problem: 'Enables video recording and sharing from web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/JS-Video-Recorder',
    liveLink: 'https://js-video-recorder.netlify.app',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'javascript',
    priority: 'high',
    completed: true
  },
  {
    id: 'js-whatsapp-sender',
    title: 'JavaScript WhatsApp Sender',
    description: 'Send WhatsApp messages using JavaScript',
    techStack: ['JavaScript', 'WhatsApp API', 'Web APIs', 'Messaging'],
    problem: 'Enables WhatsApp messaging from web applications',
    githubLink: 'https://github.com/Mahakpreet-kour/JS-WhatsApp-Sender',
    liveLink: 'https://js-whatsapp-sender.netlify.app',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'javascript',
    priority: 'high',
    completed: true
  },
  {
    id: 'js-gmail-fetcher',
    title: 'JavaScript Gmail Fetcher',
    description: 'Fetch last email information from Gmail using JavaScript',
    techStack: ['JavaScript', 'Gmail API', 'OAuth', 'Email Processing'],
    problem: 'Retrieves and displays Gmail information in web apps',
    githubLink: 'https://github.com/Mahakpreet-kour/JS-Gmail-Fetcher',
    liveLink: 'https://js-gmail-fetcher.netlify.app',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'javascript',
    priority: 'medium',
    completed: true
  },

  // STREAMLIT PROJECTS
  {
    id: 'streamlit-automation-panel',
    title: 'Streamlit Automation Panel',
    description: 'Automation panel built with Streamlit for various tasks',
    techStack: ['Streamlit', 'Python', 'Automation', 'Web Dashboard'],
    problem: 'Provides web interface for automation tasks',
    githubLink: 'https://github.com/Mahakpreet-kour/Streamlit-Automation-Panel',
    liveLink: 'https://streamlit-automation-panel.streamlit.app',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'streamlit',
    priority: 'high',
    completed: true
  },
  {
    id: 'gradio-automation-panel',
    title: 'Gradio Automation Panel',
    description: 'Automation panel built with Gradio for machine learning tasks',
    techStack: ['Gradio', 'Python', 'ML', 'Web Interface'],
    problem: 'Provides user-friendly interface for ML automation',
    githubLink: 'https://github.com/Mahakpreet-kour/Gradio-Automation-Panel',
    liveLink: 'https://gradio-automation-panel.streamlit.app',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'streamlit',
    priority: 'high',
    completed: true
  },
  {
    id: 'docker-linear-regression',
    title: 'Linear Regression in Docker',
    description: 'Run linear regression model inside Docker container',
    techStack: ['Docker', 'Python', 'Machine Learning', 'Linear Regression'],
    problem: 'Deploys ML models in isolated Docker environments',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Linear-Regression',
    liveLink: 'https://docker-linear-regression.streamlit.app',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'streamlit',
    priority: 'medium',
    completed: true
  },
  {
    id: 'docker-flask-app',
    title: 'Flask App in Docker',
    description: 'Run Flask application inside Docker container',
    techStack: ['Docker', 'Flask', 'Python', 'Web Development'],
    problem: 'Deploys Flask web applications in Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Flask-App',
    liveLink: 'https://docker-flask-app.streamlit.app',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'streamlit',
    priority: 'high',
    completed: true
  },
  {
    id: 'docker-menu-python',
    title: 'Menu Python Project in Docker',
    description: 'Run menu-based Python project inside Docker container',
    techStack: ['Docker', 'Python', 'Menu System', 'Containerization'],
    problem: 'Deploys menu-driven applications in Docker containers',
    githubLink: 'https://github.com/Mahakpreet-kour/Docker-Menu-Python',
    liveLink: 'https://docker-menu-python.streamlit.app',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'streamlit',
    priority: 'medium',
    completed: true
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