import Container from "@/components/Container";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  noBorder?: boolean;
  className?: string;
};

export default function Section({
  id,
  children,
  noBorder = false,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-6 md:py-10 ${noBorder ? "" : "border-b border-line"} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
