interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // <- 추가
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow ${className}`}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
