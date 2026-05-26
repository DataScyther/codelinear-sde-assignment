import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, gradient = false, children, ...props }, ref) => {
    const Tag = `h${level}` as any;
    
    return (
      <Tag
        ref={ref}
        className={cn(
          "font-heading font-bold tracking-tight",
          {
            "text-5xl md:text-7xl lg:text-8xl": level === 1,
            "text-3xl md:text-5xl": level === 2,
            "text-2xl md:text-3xl": level === 3,
            "text-xl md:text-2xl": level === 4,
            "text-lg md:text-xl": level === 5,
            "text-base md:text-lg": level === 6,
            "text-white": !gradient,
            "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#06b6d4]": gradient,
          },
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Heading.displayName = "Heading";
