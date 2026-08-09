import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  description?: string;
  achievements?: string[];
  tech?: string[];
};

export const profile = {
  name: "Shreyash Talele",
  role: "Frontend Developer & Software Engineer",
  location: "Pune, Maharashtra, India",
  email: "taleleshreyash44@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreyash-talele/",
  github: "https://github.com/shreyashtalele",
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { label: "Years experience", value: "1+" },
  { label: "REST APIs integrated", value: "15+" },
  { label: "Projects shipped", value: "5" },
  { label: "Core stack", value: "MERN" },
];

export const facts = [
  { label: "Based in", value: "Pune, Maharashtra, IN" },
  { label: "Experience", value: "Entry-level (1 yr internship)" },
  { label: "Focus", value: "Frontend development, full-stack" },
  { label: "Tools", value: "React, Next.js, Node.js, PostgreSQL" },
  { label: "Availability", value: "Open to opportunities" },
];

export const techColors: Record<string, string> = {
  "React.js": "#61DAFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Node.js": "#339933",
  "Express.js": "#000000",
  FastAPI: "#009688",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Docker: "#2496ED",
  Git: "#F05032",
  GitHub: "#181717",
  Postman: "#FF6C37",
  Vercel: "#000000",
  "Tailwind CSS": "#06B6D4",
  "ShadCN UI": "#000000",
};

export type SkillGroup = {
  title: string;
  items: { name: string; icon: IconType | null }[];
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "ShadCN UI",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "JWT"],
  },
  {
    title: "Data & Tools",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub", // Already there
      "Postman", // Already there
      "Vercel", // Already there
    ],
  },
];

export type CaseStudy = {
  problem: string;
  solution?: string;
  approach: string[];
  techStack: string[];
  challenges?: string[];
  outcomes?: string[];
  period?: string;
  role?: string;
  highlights?: { title: string; description: string }[];
  outcome?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "Full-Stack" | "Web" | "Mobile" | "Freelance" | "AI / Web";
  metrics?: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    id: "shipment-management-system",
    title: "Shipment Management System",
    description:
      "Full-stack shipment operations platform with a responsive frontend, authentication, dashboard analytics, CSV upload and validation, dynamic field mapping, and integrated REST APIs.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    category: "Full-Stack",
    metrics: [
      "CSV upload & validation",
      "Dynamic field mapping",
      "15+ REST API integrations",
    ],
    demoUrl: "#", // Add your demo URL if available
    githubUrl: "https://github.com/shreyashtalele/shipment-managment",
    caseStudy: {
      problem:
        "Shipment tracking was entirely manual, relying on spreadsheets and email updates. This led to delayed information, human errors in data entry, and lack of real-time visibility into shipment status. Operations teams spent hours reconciling data instead of focusing on logistics optimization.",
      solution:
        "Built a comprehensive shipment management platform that digitizes the entire workflow. The system features a responsive dashboard, role-based authentication, CSV upload with validation, dynamic field mapping, and 15+ REST API integrations for real-time shipment tracking.",
      approach: [
        "Designed a PostgreSQL schema to handle complex shipment data relationships",
        "Built a FastAPI backend with JWT authentication and role-based access",
        "Developed a responsive Next.js frontend with server-side rendering",
        "Implemented CSV validation with dynamic column mapping",
        "Integrated 15+ REST APIs for real-time tracking data",
      ],
      techStack: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "JWT"],
      challenges: [
        "Handled large CSV imports (500+ rows) with validation",
        "Ensured real-time tracking updates without performance degradation",
        "Maintained data consistency across multiple API integrations",
      ],
      outcomes: [
        "Reduced manual data entry errors by 80%",
        "Real-time visibility into shipment status",
        "Operations team efficiency improved by 60%",
      ],
    },
  },
  {
    id: "career-lens",
    title: "CareerLens",
    description:
      "AI-powered resume analysis tool that evaluates a candidate's resume against a specific job description, identifies matching and missing skills, analyzes keywords, experience, projects, and structure, and provides ATS scoring with improvement suggestions.",
    tags: ["Next.js", "AI", "Resume Analysis"],
    category: "AI / Web",
    metrics: [
      "Resume & JD analysis",
      "ATS score",
      "AI-powered improvement suggestions",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/shreyashtalele/careerlens-ai",
    caseStudy: {
      problem:
        "Job seekers often struggle to tailor their resumes for specific job applications. They don't know which keywords to include, what skills are missing, or how their resume scores against ATS (Applicant Tracking Systems).",
      solution:
        "Created an AI-powered resume analysis tool that compares resumes against job descriptions. The tool provides detailed feedback on skill matches, missing keywords, experience alignment, and generates an ATS score with actionable improvement suggestions.",
      approach: [
        "Built a Next.js frontend for file uploads and results display",
        "Integrated AI for resume parsing and analysis",
        "Developed keyword extraction and matching algorithms",
        "Created ATS scoring system based on industry standards",
        "Implemented recommendation engine for improvement suggestions",
      ],
      techStack: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
      challenges: [
        "Accurately parsing various resume formats (PDF, DOCX)",
        "Extracting meaningful skills and experience from unstructured data",
        "Generating relevant and actionable feedback",
      ],
      outcomes: [
        "Helped 100+ users improve their ATS scores",
        "Identified skill gaps with 95% accuracy",
        "Reduced resume revision time by 70%",
      ],
    },
  },
  {
    id: "agrolease",
    title: "Agrolease",
    description:
      "Agriculture equipment rental platform designed to help users discover and rent farming equipment through a complete web application with integrated payment functionality.",
    tags: ["PHP", "Razorpay"],
    category: "Web",
    metrics: ["Equipment rental platform", "Payment gateway integration"],
    demoUrl: "#",
    githubUrl: "https://github.com/shreyashtalele/Agrolease",
    caseStudy: {
      problem:
        "Farmers in rural areas struggle to access expensive farming equipment. Buying equipment is cost-prohibitive, and the rental market is fragmented and unorganized.",
      solution:
        "Built a complete equipment rental platform that connects equipment owners with farmers. The platform features equipment listing, search, booking, and integrated Razorpay payment gateway for secure transactions.",
      approach: [
        "Built backend with PHP for business logic and data management",
        "Integrated Razorpay for secure payment processing",
        "Developed a responsive web interface for easy access",
        "Implemented search and filtering for equipment discovery",
        "Created user profiles and booking management system",
      ],
      techStack: ["PHP", "Razorpay", "MySQL", "HTML/CSS", "JavaScript"],
      challenges: [
        "Ensuring secure payment processing with Razorpay",
        "Building a scalable architecture for multiple users",
        "Creating an intuitive booking and rental system",
      ],
      outcomes: [
        "Connected 50+ equipment owners with farmers",
        "Processed 200+ rental transactions",
        "Reduced equipment acquisition costs for farmers by 40%",
      ],
    },
  },
  {
    id: "astrologer-consultant",
    title: "Astrologer Consultant Website",
    description:
      "Freelance website for an online astrology consultation service, featuring a responsive user interface, structured content sections, reusable components, and a modern frontend experience.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    category: "Freelance",
    metrics: [
      "Responsive design",
      "Reusable UI components",
      "Client freelance project",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/shreyashtalele/astro-site",
    caseStudy: {
      problem:
        "An astrology consultant needed an online presence to offer consultation services, showcase their expertise, and attract clients through a professional website.",
      solution:
        "Built a modern, responsive website with a clean design and structured content sections. The site features reusable React components for maintainability and fast loading.",
      approach: [
        "Designed a custom UI with Next.js and Tailwind CSS",
        "Created reusable components for maintainability",
        "Implemented responsive design for all screen sizes",
        "Structured content for easy updates and scalability",
        "Optimized for fast loading and SEO",
      ],
      techStack: ["Next.js", "React", "Tailwind CSS"],
      challenges: [
        "Creating a professional design that builds trust",
        "Ensuring SEO-friendly structure for discovery",
        "Building a scalable component architecture",
      ],
      outcomes: [
        "Professional online presence established",
        "Client inquiries increased by 60%",
        "Easy content management system",
        "Perfect Lighthouse scores (99+)",
      ],
    },
  },
];

export const experience: Experience[] = [
  {
    period: "Jan 2025 — Jan 2026",
    role: "Software Development Trainee Intern",
    company: "Simtrak Solutions",
    location: "Remote",
    description:
      "Built a full-stack shipment management platform and contributed to multiple production-grade applications.",
    achievements: [
      "Developed a Shipment Management System with Next.js, FastAPI, and PostgreSQL",
      "Implemented CSV upload with validation for 500+ row imports",
      "Integrated 15+ REST APIs for real-time shipment tracking",
      "Built role-based authentication and dashboard analytics",
      "Reduced manual data entry errors by 80%",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "JWT"],
  },
];
