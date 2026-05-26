import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

export const Hero = () => {
  return (
    <section aria-label="Hero" className="relative min-h-[70vh] flex items-center pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 600px 600px at 45% 40%, rgba(168, 85, 247, 0.10) 0%, transparent 70%),
            radial-gradient(ellipse 450px 450px at 55% 35%, rgba(6, 182, 212, 0.10) 0%, transparent 70%)
          `,
        }}
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <AnimateIn variant="fadeUp" delay={0.05}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="text-xs font-medium text-slate-400">
              Now in Public Beta
            </span>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight text-slate-50 max-w-3xl mx-auto leading-[1.15] mb-4">
            The Financial OS for the{" "}
            <span className="text-gradient-purple-cyan">Next Generation.</span>
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.15}>
          <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
            Manage trades, monitor liquidity, and scale your fintech
            infrastructure — all from one platform.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              href="#features"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-slate-50 text-sm font-semibold transition-[box-shadow,transform] duration-200 ease-premium hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.96]"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200 ease-premium" />
            </Link>
            <Link
              href="#dashboard"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-50 text-sm font-semibold transition-[background-color,transform] duration-200 ease-premium hover:bg-white/[0.07] hover:scale-[1.02] active:scale-[0.96]"
            >
              <Terminal className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-50 transition-colors duration-200 ease-premium" />
              View Demo
            </Link>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
