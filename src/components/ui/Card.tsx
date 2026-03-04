import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
  style,
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-base-100 rounded-xl border border-base-300",
        paddingClasses[padding],
        hover && "card-hover",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
