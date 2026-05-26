import React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid gap-6 md:gap-8",
          {
            "grid-cols-1": cols === 1,
            "grid-cols-1 md:grid-cols-2": cols === 2,
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": cols === 4,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";
