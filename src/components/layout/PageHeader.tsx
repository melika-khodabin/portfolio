import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <header
      className={cn(
        "pt-12 pb-8 md:pt-16 md:pb-12 border-b border-base-300",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="animate-fade-in-up opacity-0">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-base-content/70 max-w-2xl animate-fade-in-up opacity-0 delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
