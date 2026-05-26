import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "cyan" | "purple" | "outline";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "cyan", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
          {
            "bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20": variant === "cyan",
            "bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20": variant === "purple",
            "text-slate-100 border border-white/10": variant === "outline",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Badge.displayName = "Badge";
