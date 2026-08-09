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
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Docker: FaDocker,
  Git: FaGitAlt,
  "Tailwind CSS": SiTailwindcss,
  "ShadCN UI": SiShadcnui,
  HTML5: SiHtml5,
  CSS3: SiCss,
  GitHub: SiGithub,
  Postman: SiPostman,
  Vercel: SiVercel,
};

type SkillChipProps = {
  name: string;
};

export default function SkillChip({ name }: SkillChipProps) {
  const brandColor = techColors[name] || "#97948A";
  const fallbackLetter = name.slice(0, 2).toUpperCase();
  const Icon = iconMap[name] || null;

  return (
    <div className="group flex flex-col items-center gap-2.5 rounded-xl border border-line/60 bg-surface px-3 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line/60 bg-bg transition-all duration-300 group-hover:border-accent/30">
        {Icon ? (
          <Icon
            className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
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
      </div>
      <span className="text-xs text-muted transition-colors duration-300 group-hover:text-ink">
        {name}
      </span>

      {/* Add style for icon color on card hover */}
      <style jsx>{`
        .group:hover svg {
          color: ${brandColor} !important;
        }
      `}</style>
    </div>
  );
}
