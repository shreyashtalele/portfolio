import type { IconType } from "react-icons";

type SkillChipProps = {
  name: string;
  icon?: IconType;
};

export default function SkillChip({ name, icon: Icon }: SkillChipProps) {
  return (
    <div className="group flex flex-col items-center gap-2.5 rounded-xl border border-line/60 bg-surface px-3 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line/60 bg-bg text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
        {Icon ? (
          <Icon className="h-5 w-5" />
        ) : (
          <span className="font-mono text-[10px]">{name.slice(0, 2)}</span>
        )}
      </div>
      <span className="text-xs text-muted transition-colors duration-300 group-hover:text-ink">
        {name}
      </span>
    </div>
  );
}
