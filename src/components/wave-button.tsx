import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "coral" | "ink" | "ghost" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

interface WaveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  coral:
    "bg-coral text-cream btn-wave",
  ink:
    "bg-ink text-cream btn-wave btn-wave-light",
  ghost:
    "bg-transparent text-ink hover:text-coral",
  outline:
    "bg-transparent text-ink border border-ink/80 btn-wave",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-4 text-sm rounded-full",
  md: "h-12 px-6 text-[15px] rounded-full",
  lg: "h-14 px-7 text-base rounded-full",
  xl: "h-16 px-9 text-lg rounded-full",
};

export const WaveButton = React.forwardRef<HTMLButtonElement, WaveButtonProps>(
  ({ className, variant = "coral", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-semibold tracking-tight",
          "transition-[transform,color] duration-300 will-change-transform",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
WaveButton.displayName = "WaveButton";
