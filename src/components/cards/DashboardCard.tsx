import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Stack } from "@/components/layout/Stack";

export interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  value?: string | React.ReactNode;
  trend?: {
    value: number;
    label?: string;
    isPositive?: boolean;
  };
  icon?: React.ReactNode;
  variant?: "default" | "glass" | "gradient" | "outline";
}

export const DashboardCard = React.forwardRef<HTMLDivElement, DashboardCardProps>(
  ({ className, title, value, trend, icon, variant = "default", children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "p-5 md:p-6 transition-all duration-300",
          {
            "bg-[#0b0720] border-white/5": variant === "default",
            "bg-[#030014]/40 backdrop-blur-xl border-white/10": variant === "glass",
            "bg-gradient-to-br from-[#a855f7]/10 to-[#06b6d4]/10 border-[#06b6d4]/20":
              variant === "gradient",
            "bg-transparent border-white/20": variant === "outline",
          },
          className
        )}
        {...props}
      >
        <Stack direction="col" className="h-full gap-4">
          {/* Header */}
          {(title || icon) && (
            <Stack direction="row" justify="between" align="center" className="w-full">
              {title && <h3 className="text-sm font-medium text-slate-400">{title}</h3>}
              {icon && <div className="text-slate-300">{icon}</div>}
            </Stack>
          )}

          {/* Main Content */}
          {value !== undefined ? (
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                {value}
              </span>
              {trend && (
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={cn(
                      "text-xs font-semibold px-2 py-0.5 rounded-full",
                      trend.isPositive ?? trend.value >= 0
                        ? "bg-[#06b6d4]/10 text-[#06b6d4]"
                        : "bg-[#ec4899]/10 text-[#ec4899]"
                    )}
                  >
                    {trend.isPositive ?? trend.value >= 0 ? "+" : ""}
                    {trend.value}%
                  </span>
                  {trend.label && (
                    <span className="text-xs text-slate-500">{trend.label}</span>
                  )}
                </div>
              )}
            </div>
          ) : (
            children
          )}
        </Stack>
      </Card>
    );
  }
);

DashboardCard.displayName = "DashboardCard";
