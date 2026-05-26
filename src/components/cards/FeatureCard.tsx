import React, { memo } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * Memoized to prevent re-renders when parent Features section re-renders.
 *
 * Performance notes:
 * - No will-change or translateZ(0) — these permanently promote elements to
 *   GPU compositing layers, wasting VRAM for elements that only animate on hover.
 *   Modern browsers auto-promote on hover transitions already.
 * - Scoped transition to only the properties that actually change.
 */
export const FeatureCard: React.FC<FeatureCardProps> = memo(({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-7 rounded-2xl bg-bg-card border border-white/[0.05] overflow-hidden",
        "transition-[background-color,border-color,transform] duration-200 ease-[var(--ease-premium)]",
        "hover:bg-bg-card-hover hover:border-white/[0.10] hover:-translate-y-0.5",
        className
      )}
    >
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-5 text-cyber-cyan group-hover:text-cyber-purple transition-colors duration-200">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";
