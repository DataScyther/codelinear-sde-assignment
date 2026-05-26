import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

export const CTA = () => {
  return (
    <section aria-label="Call to action" className="py-16 md:py-20 bg-[#07060f] border-t border-white/[0.02]">
      <Container>
        <AnimateIn variant="scaleIn" className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-10 md:p-14 text-center relative overflow-hidden rounded-2xl bg-[#0c0620] border border-white/[0.08]">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-50 mb-4 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-slate-500 text-base mb-8 max-w-lg">
                Deploy your financial infrastructure in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
                <Link
                  href="#features"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-slate-50 font-semibold transition-[box-shadow,transform] duration-200 ease-premium hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.96]"
                >
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-50 font-semibold transition-[background-color,transform] duration-200 ease-premium hover:bg-white/[0.08] hover:scale-[1.02] active:scale-[0.96]"
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
