import * as React from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * A standard, responsive layout container that automatically applies
 * center alignment, safe horizontal padding, and max-width bounds.
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[var(--content-max-width)] px-4 md:px-8 lg:px-12",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
