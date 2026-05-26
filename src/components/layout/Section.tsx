import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-20 md:py-24 relative overflow-hidden", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
