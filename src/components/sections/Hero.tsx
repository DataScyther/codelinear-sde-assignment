import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#a855f7]/20 rounded-full blur-[100px] md:blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#06b6d4]/20 rounded-full blur-[80px] md:blur-[100px] opacity-60 pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <AnimateIn type="slide-up" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              Antigravity Engine v2.0 Live
            </span>
          </div>
        </AnimateIn>

        <AnimateIn type="slide-up" delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-8">
            The Financial OS for the{" "}
            <span className="text-gradient-purple-cyan">Next Generation.</span>
          </h1>
        </AnimateIn>

        <AnimateIn type="slide-up" delay={0.3}>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Execute high-frequency trades, manage decentralized liquidity, and
            scale your fintech infrastructure with zero friction and absolute security.
          </p>
        </AnimateIn>

        <AnimateIn type="slide-up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href="/get-started"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-semibold text-lg transition-all hover:shadow-[var(--shadow-glow-cyan)] hover:scale-105"
            >
              Initialize System
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Terminal className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              View Documentation
            </Link>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
