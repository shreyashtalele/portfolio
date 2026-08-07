type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  meta,
}: SectionHeadingProps) {
  return (
    <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
      <div>
        {eyebrow && (
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-[clamp(26px,3vw,34px)] font-normal">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
      </div>
      {meta && (
        <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          {meta}
        </div>
      )}
    </div>
  );
}
