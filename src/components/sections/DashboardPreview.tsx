import React from "react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { DashboardMockup } from "@/components/cards/DashboardMockup";

export const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-16 md:py-20 relative overflow-hidden bg-[#07060f] border-t border-white/[0.02] section-contain">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#a855f7]/10 to-[#06b6d4]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimateIn variant="fadeUp">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
              Your Command Center
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <p className="text-slate-500 text-base">
              Monitor analytics, manage trades, and view consolidated liquidity
              in one interface.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn variant="fadeUp" delay={0.15} className="w-full max-w-4xl">
          <div className="p-1.5 md:p-2 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <DashboardMockup />
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
