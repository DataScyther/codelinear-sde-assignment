import React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-white/5 bg-[#0b0720] text-slate-100 shadow-[var(--shadow-glass)] overflow-hidden",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
