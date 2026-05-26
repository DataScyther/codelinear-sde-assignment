import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

export const CTA = () => {
  return (
    <section className="py-28">
      <Container>
        <AnimateIn variant="scaleIn" className="max-w-3xl mx-auto">
          <div className="p-8 md:p-14 text-center relative overflow-hidden rounded-2xl bg-[#0a0520]/70 backdrop-blur-xl border border-white/[0.08]">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-[#a855f7]/15 to-transparent pointer-events-none rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-slate-500 text-base mb-8 max-w-lg">
                Deploy your financial infrastructure in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                <Link
                  href="#features"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white font-semibold transition-all hover:bg-white/[0.08]"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
};
