import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <Section className="py-32">
      <Container>
        <AnimateIn type="scale-up" className="max-w-4xl mx-auto">
          <GlassPanel className="p-10 md:p-16 text-center relative overflow-hidden bg-[#0a0520]/80 border-[#a855f7]/30">
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#a855f7]/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <Heading level={2} className="mb-6">
                Ready to Scale Your FinTech?
              </Heading>
              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl">
                Join the decentralized financial revolution. Get started today and deploy your unified infrastructure in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  Talk to Engineering
                </Button>
              </div>
            </div>
          </GlassPanel>
        </AnimateIn>
      </Container>
    </Section>
  );
};
