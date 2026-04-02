import profile from './img/profile.jpeg'; 
import ociai from './img/ociai.jpeg';
import dbms from './img/dbms.jpeg'; 
import django from './img/django.jpeg'; 
import sbh from './img/sbh.jpeg';
import foset from './img/foset.jpeg'; 
import ihmmc from './img/ihmmc.jpeg';
import IHMMC from './img/IHMMC26.jpeg';
import lulc from './img/LULC.png';
import forest from './img/forest.png';
import fest from './img/fest.png';
import code from './img/code.png';
import resume from './img/resume.png';
import metagame from './img/metagame.png';
import underdev from './img/underdev.jpg';
import myresume from './Files/Surajit_Resume.pdf';
import java from './img/Java.png';
import innovation from './img/innovation.png';

export const personalInfo = {
  name: "Surajit Tunga",
  role: "Full Stack Developer",
  tagline: "Building innovative solutions with modern technologies",
  about: "Passionate developer with expertise in building scalable web applications and AI-powered solution. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  photo: profile,
  resumeUrl: myresume,
  email: "surajittunga2005@gmail.com",
  whatsapp: "+918972195682",
  location: "Kolkata, India"
};

export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/surajit-tunga",
    color: "#333"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/surajittunga",
    color: "#0077b5"
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:surajittunga2005@gmail.com",
    color: "#ea4335"
  },
  {
  name: "WhatsApp",
  icon: "MessageCircle", 
  url: "https://wa.me/+918972195682", 
  color: "#25D366" 
},
{
  name: "Google Scholar",
  icon: "BookOpen",
  url: "https://scholar.google.com/citations?user=bzXPQOcAAAAJ&hl=en",
  color: "#4285F4"
}

];

export const education = [
  {
    id: 1,
    degree: "B. Tech in Electronics and Communication Engineering",
    institution: "Guru Nanak Institute of Technology",
    duration: "2023 - 2027"
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Balichak B.H Institution",
    duration: "2021 - 2023"
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Jamna Ramakrishna Vivekananda Pathmandir",
    duration: "2015 - 2021"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Java", "C"]
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "Django", "Tailwind CSS", "GSAP", "EJS", "Vite"]
  },
   {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "SQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "Github", "Vercel", "Google Colab"]
  }
];

export const certificates = [
  {
    id: 1,
    title: "Programming in JAVA",
    issuer: "IIT Kharagpur - NPTEL",
    date: "October 2025",
    image: java
  },
  {
    id: 2,
    title: "Certified Foundations Associate",
    issuer: "Oracle",
    date: "August 2025",
    image: ociai
  },
  {
    id: 3,
    title: "Introduction to Database Systems",
    issuer: "IIT Madras - NPTEL",
    date: "April 2025",
    image: dbms
  },
  {
    id: 4,
    title: "Python with Django",
    issuer: "Ardent Computech Pvt Ltd",
    date: "March 2025",
    image: django
  }
];

export const projects = [
  {
    id: 1,
    title: "Urban Expansion and Land Use Analysis",
    category: "GIS",
    description: "Automated system for urban growth detection using Sentinel-2 imagery with NDVI, NDBI, and NDWI indices integrated into a Web-GIS dashboard.",
    technologies: ["Python", "Leaflet.js", "Random Forest", "React", "Nodejs", "Express js", "postgreSQL", "Sentinel-2"],
    link: "https://github.com/Surajit-Tunga/Urban-Expansion-and-Land-Use-Analysis-",
    liveUrl: "https://github.com/Surajit-Tunga/Urban-Expansion-and-Land-Use-Analysis-",
    image: lulc
  },
  // {
  //   id: 2,
  //   title: "Forest Cover Type Detection",
  //   category: "ML",
  //   description: "Machine learning model that classifies forest cover types using cartographic features and Scikit-learn.",
  //   technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  //   link: "https://github.com/Surajit-Tunga/Forest-Cover-Type-Detection-ML1",
  //   liveUrl: "https://github.com/Surajit-Tunga/Forest-Cover-Type-Detection-ML1",
  //   image: forest
  // },
  // {
  //   id: 3,
  //   title: "HackMate",
  //   category: "MERN",
  //   description: "Hackathon management platform for organizers and participants, featuring registration, event tracking, and result management.",
  //   technologies: ["MongoDB", "Express", "React", "Node.js"],
  //   link: "https://github.com/Surajit-Tunga/HackMate",
  //   liveUrl: "https://github.com/Surajit-Tunga/HackMate",
  //   image: underdev
  // },
  {
    id: 4,
    title: "ResumeXpert",
    category: "MERN",
    description: "Interactive resume builder with live preview, user authentication, and PDF export for professional resume creation.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/Surajit-Tunga/Resume-Builder-MERN",
    liveUrl: "https://github.com/Surajit-Tunga/Resume-Builder-MERN",
    image: resume
  },
  {
    id: 5,
    title: "AI Code Reviewer",
    category: "AI",
    description: "AI-driven code reviewer using Gemini API for real-time code analysis, feedback, and improvement suggestions.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
    link: "https://github.com/Surajit-Tunga/Code-Reviewer-MERN-AI",
    liveUrl: "https://github.com/Surajit-Tunga/Code-Reviewer-MERN-AI",
    image: code
  },
  {
    id: 6,
    title: "Fest.io",
    category: "Frontend",
    description: "Festival management platform with event scheduling, ticketing, and user management features.",
    technologies: ["React", "TailwindCSS"],
    link: "https://github.com/Surajit-Tunga/Fest.io",
    liveUrl: "https://fest-io.vercel.app/",
    image: fest
  },
  {
    id: 7,
    title: "Metagame",
    category: "Frontend",
    description: "Visually engaging web interface showcasing smooth GSAP animations and modern design transitions.",
    technologies: ["React", "GSAP", "TailwindCSS"],
    link: "https://github.com/Surajit-Tunga/Metagame",
    liveUrl: "https://gsap-page-umber.vercel.app/",
    image: metagame
  }
];


export const journey = [
  {
    id: 1,
    date: "March 2026",
    name: "IHMMC 2026",
    position: "Winner",
    description: "Led the team to develop an innovative project —  VitaSence. The project secured 6th position at IHMMC 2026 hosted by Asansol Engineering College.",
    image: IHMMC,
    type: "milestone"
  },
  {
    id: 2,
    date: "December 2025",
    name: "JIS Innovation Award 2025",
    position: "Awardee",
    description: "Received the JIS Innovation Award 2025 for reasearch paper publication.",
    image: innovation,
    type: "award"
  },
  {
    id: 3,
    date: "April 2025",
    name: "Smart Bengal Hackathon 2025",
    position: "Finalist",
    description: "Led the team as Full Stack Developer at Smart Bengal Hackathon 2025 organized by RCC Institute of Information Technology. We built an AI-powered image processing system to detect mobile phone usage in restricted areas, showcasing innovation and teamwork.",
    image: sbh,
    type: "milestone"
  },
  {
    id: 4,
    date: "April 2025",
    name: "Technical Paper Presentation",
    position: "Paper Presenter",
    description: "Presented a research paper titled '5G-Enabled IoT' at the Technical Paper Presentation organized by FOSET. Discussed advancements in IoT communication systems leveraging 5G networks and their real-world implications.",
    image: foset,
    type: "publication"
  },
  {
    id: 5,
    date: "March 2025",
    name: "IHMMC 2025",
    position: "Winner",
    description: "Led the team to develop an innovative assistive technology — a speaking system for mute individuals using hand gesture recognition. The project secured 10th position at IHMMC 2025 hosted by Asansol Engineering College.",
    image: ihmmc,
    type: "milestone"
  },
];



export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#journey" },
  { name: "Contact", href: "#contact" }
];
