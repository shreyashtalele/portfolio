"use client";

import type { IconType } from "react-icons";
import { techColors } from "@/components/data";
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
  SiHtml5,
  SiCss,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

// Map technology names to icon components
const iconMap: Record<string, IconType | null> = {
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: FaDocker,
  Git: FaGitAlt,
  GitHub: SiGithub,
  Postman: SiPostman,
  Vercel: SiVercel,
  "Tailwind CSS": SiTailwindcss,
  "ShadCN UI": SiShadcnui,
};

type SkillChipProps = {
  name: string;
};

export default function SkillChip({ name }: SkillChipProps) {
  const brandColor = techColors[name] || "#97948A";
  const fallbackLetter = name.slice(0, 2).toUpperCase();
  const Icon = iconMap[name] || null;

  return (
    <div
      className="group inline-flex items-center gap-2 rounded-full border border-line/60 bg-surface px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/5"
      style={{ "--skill-color": brandColor } as React.CSSProperties}
    >
      {Icon ? (
        <Icon
          className="h-4 w-4 transition-all duration-300 group-hover:scale-110"
          style={{
            color: "#97948A",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
        />
      ) : (
        <span className="font-mono text-[10px] text-muted transition-colors duration-300 group-hover:text-accent">
          {fallbackLetter}
        </span>
      )}
      <span className="text-xs text-muted transition-colors duration-300 group-hover:text-ink">
        {name}
      </span>
    </div>
  );
}
