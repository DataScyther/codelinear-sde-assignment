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
        "group relative p-6 md:p-8 rounded-3xl bg-[#0b0720] border border-white/5 transition-all duration-300 hover:shadow-[var(--shadow-glow-purple)] hover:border-[#a855f7]/30 hover:-translate-y-1 overflow-hidden",
        className
      )}
    >
      {/* Subtle Background Mesh/Glow inside the card */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#a855f7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6 text-[#06b6d4] group-hover:text-[#a855f7] group-hover:scale-110 transition-all duration-300 shadow-[var(--shadow-glass)]">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
