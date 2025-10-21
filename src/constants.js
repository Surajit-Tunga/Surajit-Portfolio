// Portfolio Data - All information is stored here

export const personalInfo = {
  name: "Alex Johnson",
  role: "Full Stack Developer",
  tagline: "Building innovative solutions with modern technologies",
  about: "Passionate developer with expertise in building scalable web applications, AI-powered solutions, and machine learning models. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  photo: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwMjI0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  resumeUrl: "#", // Add your resume URL here
  email: "alex.johnson@example.com",
  location: "San Francisco, CA"
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/yourusername",
    color: "#333"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com/in/yourusername",
    color: "#0077b5"
  },
  {
    name: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com/yourusername",
    color: "#1da1f2"
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:alex.johnson@example.com",
    color: "#ea4335"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "2020 - 2022",
    description: "Specialized in Machine Learning and Distributed Systems. GPA: 3.9/4.0",
    achievements: ["Dean's List", "Research Assistant", "Published 2 papers"]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "MIT",
    duration: "2016 - 2020",
    description: "Graduated with Honors. Focus on Software Engineering and AI.",
    achievements: ["Valedictorian", "Hackathon Winner", "Teaching Assistant"]
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Tech High School",
    duration: "2012 - 2016",
    description: "Advanced placement in Mathematics and Computer Science.",
    achievements: ["Honor Roll", "Coding Club President", "Math Olympiad"]
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
  },
  {
    category: "Web Technologies",
    skills: ["React", "Next.js", "Vue.js", "Node.js", "Express", "HTML/CSS", "Tailwind CSS", "REST APIs", "GraphQL"]
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI APIs", "Computer Vision", "NLP", "Deep Learning"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Linux", "VS Code", "Postman"]
  }
];

export const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SA-2023-1234",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-5678",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: 3,
    title: "Machine Learning Specialization",
    issuer: "Coursera - Stanford",
    date: "2022",
    credentialId: "ML-SPEC-2022-9012",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    id: 4,
    title: "Meta React Developer Certificate",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-2022-3456",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
];

export const projects = [
  {
    id: 1,
    title: "Dhristhi - AI Vision Assistant",
    category: "AI",
    description: "An AI-powered vision assistant that helps visually impaired users navigate their environment using computer vision and natural language processing.",
    technologies: ["Python", "TensorFlow", "OpenCV", "React"],
    link: "https://github.com/yourusername/dhristhi",
    liveUrl: "https://dhristhi.example.com",
    image: "https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 2,
    title: "EcoTrack - Sustainability Dashboard",
    category: "MERN",
    description: "A full-stack MERN application for tracking carbon footprint and promoting sustainable practices in organizations.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/yourusername/ecotrack",
    liveUrl: "https://ecotrack.example.com",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    description: "Modern, animated portfolio website built with React, TailwindCSS, and Motion animations.",
    technologies: ["React", "TailwindCSS", "Motion", "TypeScript"],
    link: "https://github.com/yourusername/portfolio",
    liveUrl: "https://alexjohnson.dev",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 4,
    title: "PredictStock - ML Trading Bot",
    category: "ML",
    description: "Machine learning model for stock price prediction using LSTM neural networks and real-time market data analysis.",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
    link: "https://github.com/yourusername/predictstock",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 5,
    title: "ShopHub - E-commerce Platform",
    category: "MERN",
    description: "Complete e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    link: "https://github.com/yourusername/shophub",
    liveUrl: "https://shophub.example.com",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 6,
    title: "ChatGenius - AI Chatbot",
    category: "AI",
    description: "Intelligent chatbot powered by GPT-4 with context-aware responses and multi-language support.",
    technologies: ["Python", "OpenAI API", "FastAPI", "React"],
    link: "https://github.com/yourusername/chatgenius",
    liveUrl: "https://chatgenius.example.com",
    image: "https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 7,
    title: "WeatherPro Dashboard",
    category: "Frontend",
    description: "Beautiful, responsive weather dashboard with real-time data visualization and 7-day forecasts.",
    technologies: ["React", "Chart.js", "TailwindCSS", "Weather API"],
    link: "https://github.com/yourusername/weatherpro",
    liveUrl: "https://weatherpro.example.com",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 8,
    title: "FaceDetect ML",
    category: "ML",
    description: "Real-time face detection and recognition system using deep learning and computer vision.",
    technologies: ["Python", "OpenCV", "PyTorch", "Flask"],
    link: "https://github.com/yourusername/facedetect",
    liveUrl: "#",
    image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  }
];

export const journey = [
  {
    id: 1,
    date: "March 2024",
    name: "Smart India Hackathon",
    position: "1st Place Winner",
    description: "Developed an AI-powered solution for sustainable agriculture that won the national competition. Built a full-stack application using React, Node.js, and TensorFlow to help farmers optimize crop yields.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
  {
    id: 2,
    date: "January 2024",
    name: "HackMIT 2024",
    position: "2nd Place",
    description: "Created a blockchain-based voting system ensuring transparency and security. Collaborated with a team of 4 to deliver a working prototype within 36 hours.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
  {
    id: 3,
    date: "November 2023",
    name: "IEEE Xtreme Programming Competition",
    position: "Top 100 Globally",
    description: "Competed in the 24-hour coding challenge and ranked in top 100 worldwide. Solved complex algorithmic problems and implemented efficient solutions.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
  {
    id: 4,
    date: "September 2023",
    name: "Google Solution Challenge",
    position: "Regional Finalist",
    description: "Built an app addressing UN Sustainable Development Goals focused on quality education. Implemented features for remote learning and resource sharing.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "education"
  },
  {
    id: 5,
    date: "June 2023",
    name: "National Innovation Contest",
    position: "Best Innovation Award",
    description: "Developed an IoT-based health monitoring system for elderly care. Integrated sensors, cloud computing, and mobile app for real-time health tracking.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
  {
    id: 6,
    date: "April 2023",
    name: "ACM ICPC Regional",
    position: "Qualified for Regionals",
    description: "Advanced to regional level in the prestigious ACM International Collegiate Programming Contest. Solved challenging problems in data structures and algorithms.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "education"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Won National Hackathon",
    year: "2023",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "Published Research Paper",
    year: "2022",
    icon: "FileText"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    year: "2021-Present",
    icon: "GitBranch"
  },
  {
    id: 4,
    title: "Speaker at Tech Conference",
    year: "2023",
    icon: "Mic"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" }
];
