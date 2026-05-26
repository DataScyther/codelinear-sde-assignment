import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-7 rounded-2xl bg-[#0b0720] border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-0.5 overflow-hidden",
        className
      )}
    >
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] mb-5 text-[#06b6d4] group-hover:text-[#a855f7] transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
