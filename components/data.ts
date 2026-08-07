export const profile = {
  name: "Shreyash Talele",
  role: "Frontend Developer & Software Engineer",
  location: "Pune, Maharashtra, India",
  email: "your.email@example.com", // TODO: replace with your real email
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

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "Full-Stack" | "Web" | "Mobile";
  metrics?: string[];
  demoUrl?: string; // TODO: add if the project has a live demo
  githubUrl?: string; // TODO: add if the repo is public
  image?: string; // TODO: add a real screenshot to /public and reference it here
};

export const projects: Project[] = [
  {
    id: "shipment-management-system",
    title: "Shipment Management System",
    description:
      "Full-stack platform for managing shipment operations — auth, dashboard analytics, CSV upload with dynamic field mapping, and 15+ integrated REST APIs.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    category: "Full-Stack",
    metrics: ["15+ REST APIs", "CSV import + validation"],
  },
  {
    id: "storewise",
    title: "Storewise — Marketing site",
    description:
      "Informational website with a dynamic content pipeline through a headless CMS, built for responsiveness and fast load times.",
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    category: "Web",
    metrics: ["Headless CMS", "Fully responsive"],
  },
  {
    id: "smart-farming-application",
    title: "Smart Farming Application",
    description:
      "Mobile app helping farmers get crop recommendations through an ML-based prediction workflow, wrapped in a simple, guided interface.",
    tags: ["React Native", "Machine Learning"],
    category: "Mobile",
    metrics: ["ML-based predictions"],
  },
  {
    id: "agrolease",
    title: "Agrolease",
    description:
      "Agriculture-focused application for managing products and services, with integrated payments and backend operations.",
    tags: ["PHP", "Razorpay"],
    category: "Web",
    metrics: ["Payment gateway integration"],
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
    company: "Startup (Shipment Management)", // TODO: swap in the real company name
    location: "Remote",
  },
];
