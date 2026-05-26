import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

export const Hero = () => {
  return (
    <section aria-label="Hero" className="relative min-h-[70vh] flex items-center pt-24 md:pt-28 pb-12 md:pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#a855f7]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#06b6d4]/12 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] mb-4 backdrop-blur-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="text-xs font-medium text-slate-400">
              Now in Public Beta
            </span>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.15] mb-4">
            The Financial OS for the{" "}
            <span className="text-gradient-purple-cyan">Next Generation.</span>
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
            Manage trades, monitor liquidity, and scale your fintech
            infrastructure — all from one platform.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              href="#features"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#dashboard"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm font-semibold transition-all hover:bg-white/[0.07]"
            >
              <Terminal className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              View Demo
            </Link>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
