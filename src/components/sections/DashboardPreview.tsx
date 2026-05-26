import React from "react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { DashboardMockup } from "@/components/cards/DashboardMockup";

export const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-16 md:py-20 relative overflow-hidden bg-[#07060f] border-t border-white/[0.02]">
      {/* Background glow — radial-gradient instead of blur-[120px] div */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 700px 350px at 50% 50%, rgba(168, 85, 247, 0.08) 0%, rgba(6, 182, 212, 0.06) 40%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimateIn variant="fadeUp">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
              Your Command Center
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.05}>
            <p className="text-slate-500 text-base">
              Monitor analytics, manage trades, and view consolidated liquidity
              in one interface.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn variant="fadeUp" delay={0.1} className="w-full max-w-4xl">
          <div className="p-1.5 md:p-2 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <DashboardMockup />
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
