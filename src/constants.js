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
import myresume from './Files/Surajit.pdf';
import java from './img/Java.png';
import innovation from './img/innovation.png';
import MEAN from './img/MEAN.jpeg';
import Dhristi from './img/Dhristi.png';
import PatentImage from './img/Patent1.jpeg';



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
    duration: "2023 - 2027",
    scores: "8.54 CGPA"
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Balichak B.H Institution",
    duration: "2021 - 2023",
    scores: "76%"
  },
  {
    id: 3,
    degree: "Secondary Education",
    institution: "Jamna Ramakrishna Vivekananda Pathmandir",
    duration: "2015 - 2021",
    scores: "84%"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: [ "Java","JavaScript", "Python", "SQL", "C"]
  },
  {
    category: "Remote Sensing & GIS",
    skills: [
      "Google Earth Engine",
      "GIS",
      "MIDAS",
      "Sentinel-2",
      "LISS-4",
      "DFSAR",
      "OHRC",
        
    ]
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "Django", "Tailwind CSS", "GSAP", "EJS", "Vite"]
  },
   {
    category: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "Github", "Vercel", "Google Colab", "MongoDB Atlas", "MySQL Workbench", "Postman", "VS Code"]
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
    title: "MEAN Full Stack Development",
    issuer: "IALSD",
    date: "July 2025",
    image: MEAN
  },
  {
    id: 4,
    title: "Introduction to Database Systems",
    issuer: "IIT Madras - NPTEL",
    date: "April 2025",
    image: dbms
  },
  {
    id: 5,
    title: "Python with Django",
    issuer: "Ardent Computech Pvt Ltd",
    date: "March 2025",
    image: django
  }
];

export const projects = [
  {
  id: 1,
  title: "LISM - Lunar Ice Survey and Mapping",
  category: 'Research Project',
  description:
    "Ongoing college research project for lunar south polar ice detection using Chandrayaan-2 DFSAR, OHRC, NASA ShadowCam and LOLA DEM datasets. Developing a geospatial decision-support framework for landing-site selection, rover traverse planning, and lunar terrain visualization.",
  technologies: [
    "Python",
    "MIDAS",
    "QGIS",
    "GDAL",
    "Rasterio",
    "GeoJSON",
    "DFSAR",
    "LOLA DEM"
  ],
  link: "#",
  liveUrl: "#",
  image: underdev
},
  {
  id: 2,
  title: "Dhristhi - AI Powered Web-GIS Change Detection Platform",
  category: 'Research Project',
  description:
    "Published research project in the Journal of Geomatics. Developed an AI-powered Web-GIS platform for automated Land Use/Land Cover (LULC) change detection using multi-temporal Sentinel-2 imagery, Google Earth Engine, semantic segmentation, and Random Forest-based validation.",
  technologies: [
    "Google Earth Engine",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Sentinel-2",
    "GIS",
    "GeoJSON"
  ],
  link: "https://onlinejog.org/index.php/journal_of_geomatics/article/view/300",
  liveUrl: "https://onlinejog.org/index.php/journal_of_geomatics/article/view/300",
  image: Dhristi
},
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
  date: "April 2026",
  name: "Patent Publication",
  position: "Inventor",
  description: "Co-inventor of the Indian patent 'Speaking System for Mute People by Hand Gesture Using Image Processing' (Application No. 202631019297 A). Developed a machine learning and image processing-based system that translates sign language gestures into text and audible speech in real time.",
  image: PatentImage,
  type: "patent"
}, 
  {
    id: 2,
    date: "April 2026",
    name: "Journal of Geometics, ISRO",
    position: "Primary Author",
    description: "Served as a primary author in the development of “Dhristhi”, an automated Web-GIS platform for near real-time Land Use Land Cover (LULC) monitoring and change detection. Contributed to integrating U-Net based deep learning segmentation, Object-Based Post-Classification Comparison (OBC), and Random Forest based validation using spectral indices such as NDVI and NDBI. The system provides a fully automated workflow for detecting urban sprawl and deforestation, generating alerts and reports with minimal technical intervention. Achieved 92.1% overall accuracy with strong performance in anthropogenic change detection.",
    image: Dhristi,
    type: "publication"
  },  
  {
    id: 3,
    date: "March 2026",
    name: "IHMMC 2026",
    position: "Winner",
    description: "Led the team to develop an innovative project —  VitaSence. The project secured 6th position at IHMMC 2026 hosted by Asansol Engineering College.",
    image: IHMMC,
    type: "milestone"
  },
  {
    id: 4,
    date: "April 2025",
    name: "Smart Bengal Hackathon 2025",
    position: "Finalist",
    description: "Led the team as Full Stack Developer at Smart Bengal Hackathon 2025 organized by RCC Institute of Information Technology. We built an AI-powered image processing system to detect mobile phone usage in restricted areas, showcasing innovation and teamwork.",
    image: sbh,
    type: "milestone"
  },
  {
    id: 5,
    date: "April 2025",
    name: "Technical Paper Presentation",
    position: "Paper Presenter",
    description: "Presented a research paper titled '5G-Enabled IoT' at the Technical Paper Presentation organized by FOSET. Discussed advancements in IoT communication systems leveraging 5G networks and their real-world implications.",
    image: foset,
    type: "publication"
  },
  {
    id: 6,
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
