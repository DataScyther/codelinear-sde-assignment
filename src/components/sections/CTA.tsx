import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

export const CTA = () => {
  return (
    <section className="py-32">
      <Container>
        <AnimateIn variant="scaleIn" className="max-w-4xl mx-auto">
          <div className="p-10 md:p-16 text-center relative overflow-hidden rounded-3xl bg-[#0a0520]/80 backdrop-blur-xl border border-[#a855f7]/30 shadow-[var(--shadow-glass)]">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a855f7]/20 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
                Ready to Scale Your FinTech?
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl">
                Get started today and deploy your unified infrastructure in
                minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <Link
                  href="/get-started"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-semibold text-lg transition-all hover:shadow-[var(--shadow-glow-cyan)] hover:scale-105 active:scale-95"
                >
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/20"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
