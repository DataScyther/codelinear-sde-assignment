import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background glow — asymmetric positioning for natural feel */}
      <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#a855f7]/15 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#06b6d4]/15 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              Now in Public Beta
            </span>
          </div>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
            The Financial OS for the{" "}
            <span className="text-gradient-purple-cyan">Next Generation.</span>
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.3}>
          <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Manage trades, monitor liquidity, and scale your fintech
            infrastructure — all from one unified platform.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              href="#features"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#dashboard"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all hover:bg-white/10 hover:border-white/15"
            >
              <Terminal className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              View Demo
            </Link>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
