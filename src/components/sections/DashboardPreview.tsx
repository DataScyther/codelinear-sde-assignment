import React from "react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { DashboardMockup } from "@/components/cards/DashboardMockup";

export const DashboardPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030014]">
      {/* Subtle Glow Behind Dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#a855f7]/20 to-[#06b6d4]/20 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn type="slide-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Command Your Financial Empire
            </h2>
          </AnimateIn>
          <AnimateIn type="slide-up" delay={0.1}>
            <p className="text-slate-400 text-lg">
              Monitor real-time analytics, manage high-frequency trades, and view consolidated liquidity across all your connected networks in one unified interface.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn type="slide-up" delay={0.2} className="w-full max-w-5xl">
          {/* Container simulating a subtle 3D tilt perspective */}
          <div className="p-2 md:p-4 rounded-3xl bg-white/5 border border-white/10 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
            <DashboardMockup />
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
