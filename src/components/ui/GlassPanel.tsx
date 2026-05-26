import React from "react";
import { cn } from "@/lib/utils";

export const GlassPanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-[#030014]/40 backdrop-blur-xl border border-white/10 shadow-[var(--shadow-glass)]",
        className
      )}
      {...props}
    />
  )
);
GlassPanel.displayName = "GlassPanel";
