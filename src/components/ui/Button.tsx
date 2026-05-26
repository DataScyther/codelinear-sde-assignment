import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white shadow-[var(--shadow-glow-cyan)] hover:shadow-[var(--shadow-glow-purple)]":
              variant === "primary",
            "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20":
              variant === "secondary",
            "hover:bg-white/5 text-slate-300 hover:text-white": variant === "ghost",
            "bg-[#0d0722]/45 backdrop-blur-md border border-white/10 text-white hover:bg-[#140c32]/60 hover:border-[#a855f7]/25": variant === "glass",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
