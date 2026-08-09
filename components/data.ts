export const profile = {
  name: "Shreyash Talele",
  role: "Frontend Developer & Software Engineer",
  location: "Pune, Maharashtra, India",
  email: "taleleshreyash44@gmail.com", // TODO: replace with your real email
  linkedin: "https://www.linkedin.com/in/shreyash-talele/",
  github: "https://github.com/shreyashtalele",
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf", // TODO: add your resume PDF to /public
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

export type CaseStudy = {
  period: string;
  problem: string;
  role: string;
  approach: string[];
  highlights: { title: string; description: string }[];
  outcome: string;
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
  },
  {
    id: "agrolease",
    title: "Agrolease",
    description:
      "Agriculture equipment rental platform designed to help users discover and rent farming equipment through a complete web application with integrated payment functionality.",
    tags: ["PHP", "Razorpay"],
    category: "Web",
    metrics: ["Equipment rental platform", "Payment gateway integration"],
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
  },
];

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
      "GitHub",
      "Postman",
      "Vercel",
    ],
  },
];

export const experience = [
  {
    period: "Jan 2025 — Jan 2026",
    role: "Software Development Trainee Intern",
    company: "Simtrak Solutions",
    location: "Remote",
  },
];
