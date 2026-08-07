type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto max-w-wrap px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
