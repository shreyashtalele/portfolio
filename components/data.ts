export const profile = {
  name: "Shreyash Talele",
  role: "Full-Stack Developer",
  tagline:
    "Building production-grade web applications with React, Next.js & Node.js",
  location: "Pune, Maharashtra, India",
  email: "your.email@example.com", // 🔁 Replace with your real email
  linkedin: "https://www.linkedin.com/in/shreyash-talele/",
  github: "https://github.com/shreyashtalele",
  twitter: "https://twitter.com/yourhandle", // Optional - add if you have
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf", // Add your resume PDF to public folder
};

export const stats = [
  { label: "Experience", value: "1+ Year" },
  { label: "Projects", value: "4" },
  { label: "CSV Rows Processed", value: "500+" },
  { label: "Technologies", value: "15+" },
];

export const facts = [
  { label: "Based in", value: "Pune, Maharashtra, IN" },
  { label: "Experience", value: "1 year internship + projects" },
  { label: "Focus", value: "Full-stack development, product engineering" },
  { label: "Education", value: "MCA (8.07 CGPA) | BCS (9.94 CGPA)" },
  { label: "Availability", value: "Open to opportunities" },
];

export const projects = [
  {
    id: "shipment-management",
    title: "Shipment Management System",
    description:
      "Production dashboard for logistics teams to manage shipment data through CSV imports with dynamic field mapping, validation, and real-time analytics.",
    longDescription: [
      "Built for small-mid cap logistics companies struggling with CSV-based data management",
      "Implemented end-to-end data pipeline: upload → validation → transformation → analytics",
      "Designed dynamic field mapping allowing users to match CSV columns to system fields",
      "Built responsive dashboards with search, filtering, pagination, and analytics visualization",
      "Collaborated with 2 frontend developers using Git workflows and code reviews",
    ],
    metrics: [
      "500-600 rows processed per CSV import",
      "2-person frontend team",
      "15+ REST APIs integrated",
      "Real-time data validation & transformation",
    ],
    tags: ["Next.js", "React.js", "Tailwind CSS", "ShadCN UI", "REST APIs"],
    image: "/projects/shipment-management.png", // Add screenshot
    demoUrl: "https://demo-url.com", // Optional
    githubUrl: "https://github.com/your-repo", // Optional
    category: "Full-Stack",
  },
  {
    id: "agrolease",
    title: "Agrolease — Agricultural Rental Platform",
    description:
      "Full-stack rental platform connecting farmers with agricultural equipment. Complete user flow from listing to booking with secure authentication.",
    longDescription: [
      "Built MERN-based web application for agricultural equipment rental",
      "Designed REST APIs for authentication, equipment management, and booking workflows",
      "Implemented MongoDB schema design and CRUD operations",
      "Integrated frontend and backend for end-to-end functionality",
    ],
    metrics: [
      "Full user flow: listing → booking → payment",
      "MongoDB with optimized schema design",
      "JWT-based authentication",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/agrolease.png",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/your-repo",
    category: "Full-Stack",
  },
  {
    id: "smart-farming",
    title: "Smart Farming — Crop & Fertilizer Recommendation",
    description:
      "Mobile application delivering ML-driven crop and fertilizer recommendations to farmers through an intuitive interface.",
    longDescription: [
      "Built mobile app using React Native for cross-platform compatibility",
      "Integrated Django REST APIs connecting mobile frontend with ML recommendation engine",
      "Designed responsive interfaces for data input and results display",
    ],
    metrics: [
      "ML-driven crop recommendations",
      "Cross-platform mobile app",
      "Django REST API integration",
    ],
    tags: ["React Native", "Django REST Framework", "Machine Learning"],
    image: "/projects/smart-farming.png",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/your-repo",
    category: "Mobile",
  },
  {
    id: "storewise",
    title: "Storewise — Marketing Website",
    description:
      "Dynamic marketing website with content management through headless CMS, built for performance and responsiveness.",
    longDescription: [
      "Built with Next.js for optimal performance and SEO",
      "Integrated Sanity CMS for dynamic content management",
      "Responsive design across all devices",
    ],
    metrics: ["Headless CMS integration", "SEO optimized", "Fast load times"],
    tags: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    image: "/projects/storewise.png",
    demoUrl: "https://demo-url.com",
    githubUrl: "https://github.com/your-repo",
    category: "Frontend",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Middleware",
    ],
  },
  {
    title: "Database & Tools",
    icon: "🗄️",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "Git & GitHub",
      "Postman",
      "VS Code",
    ],
  },
];

export const experience = [
  {
    period: "Jan 2025 — Jan 2026",
    role: "Software Developer Intern",
    company: "Simtrak Solutions",
    location: "Remote",
    achievements: [
      "Developed full-stack web application modules using React.js, Next.js, and REST APIs",
      "Integrated 15+ REST APIs for authentication, shipment tracking, analytics, and reporting",
      "Built dashboard features: search, filtering, pagination, CSV upload, and dynamic field mapping",
      "Improved data-processing speed and user experience for internal teams",
      "Collaborated using Git workflows and code reviews with 2-person frontend team",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "DYPIMCAM, Pune",
    cgpa: "8.07 / 10",
    period: "2023 — 2025",
  },
  {
    degree: "Bachelor of Computer Science (BCS)",
    institution: "KBCNUMU, Jalgaon",
    cgpa: "9.94 / 10",
    period: "2020 — 2023",
  },
];

export const timeline = {
  period: "2025 — 2026",
};

// Navigation links for header
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
