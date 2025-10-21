// Portfolio Data - All information is stored here

export const personalInfo = {
  name: "Surajit Tunga",
  role: "Full Stack Developer || Exploring AI/ML",
  tagline: "Building innovative solutions with modern technologies",
  about: "Passionate developer with expertise in building scalable web applications, AI-powered solutions, and machine learning models. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  photo: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwMjI0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  resumeUrl: "#",
  email: "surajittunga2005@gmail.com",
  location: "Kolkata, India"
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
    skills: ["JavaScript", "Python", "Java", "C", "SQL"]
  },
  {
    category: "Web Technologies",
    skills: ["React", "Node.js", "Express", "Django", "HTML/CSS", "Tailwind CSS", "GSAP", "EJS", "Vite"]
  },
  {
    category: "AI/ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Flask", "XGBoost"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "Github"]
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
    title: "Urban Expansion and Land Use Analysis",
    category: "ML",
    description: "Automated system for urban growth detection using Sentinel-2 imagery with NDVI, NDBI, and NDWI indices integrated into a Web-GIS dashboard.",
    technologies: ["Python", "Leaflet.js", "Random Forest", "React", "Nodejs", "Express js", "postgreSQL", "Sentinel-2"],
    link: "https://github.com/Surajit-Tunga/Urban-Expansion-and-Land-Use-Analysis-",
    liveUrl: "https://github.com/Surajit-Tunga/Urban-Expansion-and-Land-Use-Analysis-",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 2,
    title: "Forest Cover Type Detection",
    category: "ML",
    description: "Machine learning model that classifies forest cover types using cartographic features and Scikit-learn.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/Surajit-Tunga/Forest-Cover-Type-Detection-ML1",
    liveUrl: "https://github.com/Surajit-Tunga/Forest-Cover-Type-Detection-ML1",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 3,
    title: "HackMate",
    category: "MERN",
    description: "Hackathon management platform for organizers and participants, featuring registration, event tracking, and result management.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/Surajit-Tunga/HackMate",
    liveUrl: "https://github.com/Surajit-Tunga/HackMate",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 4,
    title: "ResumeXpert",
    category: "MERN",
    description: "Interactive resume builder with live preview, user authentication, and PDF export for professional resume creation.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/Surajit-Tunga/Resume-Builder-MERN",
    liveUrl: "https://github.com/Surajit-Tunga/Resume-Builder-MERN",
    image: "https://images.unsplash.com/photo-1587613995604-53e43a03d51f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 5,
    title: "AI Code Reviewer",
    category: "AI",
    description: "AI-driven code reviewer using Gemini API for real-time code analysis, feedback, and improvement suggestions.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
    link: "https://github.com/Surajit-Tunga/Code-Reviewer-MERN-AI",
    liveUrl: "https://github.com/Surajit-Tunga/Code-Reviewer-MERN-AI",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 6,
    title: "Fest.io",
    category: "Frontend",
    description: "Festival management platform with event scheduling, ticketing, and user management features.",
    technologies: ["React", "TailwindCSS"],
    link: "https://github.com/Surajit-Tunga/Fest.io",
    liveUrl: "https://fest-io.vercel.app/",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  },
  {
    id: 7,
    title: "Metagame",
    category: "Frontend",
    description: "Visually engaging web interface showcasing smooth GSAP animations and modern design transitions.",
    technologies: ["React", "GSAP", "TailwindCSS"],
    link: "https://github.com/Surajit-Tunga/Metagame",
    liveUrl: "https://gsap-page-umber.vercel.app/",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  }
];


export const journey = [
  {
    id: 1,
    date: "April 2025",
    name: "Smart Bengal Hackathon 2025",
    position: "Finalist",
    description: "Led the team as Full Stack Developer at Smart Bengal Hackathon 2025 organized by RCC Institute of Information Technology. We built an AI-powered image processing system to detect mobile phone usage in restricted areas, showcasing innovation and teamwork.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
  {
    id: 2,
    date: "April 2025",
    name: "Technical Paper Presentation",
    position: "Paper Presenter",
    description: "Presented a research paper titled '5G-Enabled IoT' at the Technical Paper Presentation organized by FOSET. Discussed advancements in IoT communication systems leveraging 5G networks and their real-world implications.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
  {
    id: 3,
    date: "March 2025",
    name: "IHMMC 2025",
    position: "Winner (10th Place)",
    description: "Led the team to develop an innovative assistive technology — a speaking system for mute individuals using hand gesture recognition. The project secured 10th position at IHMMC 2025 hosted by Asansol Engineering College.",
    image: "https://images.unsplash.com/photo-1581091012184-5c1cc8e0b4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    type: "milestone"
  },
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
