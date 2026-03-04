import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagProps {
  name: string;
  href?: string;
  size?: "sm" | "md";
  className?: string;
}

export function Tag({ name, href, size = "sm", className }: TagProps) {
  const sizeClasses = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3 py-1.5",
  };

  const baseClasses = cn(
    "inline-flex items-center rounded-full bg-secondary/20 text-secondary font-medium transition-all duration-200",
    sizeClasses[size],
    href && "hover:bg-secondary/30 hover:scale-105",
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {name}
      </Link>
    );
  }

  return <span className={baseClasses}>{name}</span>;
}
