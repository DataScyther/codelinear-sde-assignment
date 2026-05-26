import React from "react";
import { Shield, Zap, Layers, Globe, Cpu, Lock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { FeatureCard } from "@/components/cards/FeatureCard";

const features = [
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description:
      "Execute transactions in microseconds with our proprietary routing engine.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption and decentralized key management for all digital assets.",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description:
      "Plug-and-play microservices to build customized financial products faster.",
  },
  {
    icon: Globe,
    title: "Global Liquidity",
    description:
      "Unified liquidity pools across 50+ exchanges through a single API.",
  },
  {
    icon: Cpu,
    title: "Smart Risk Engine",
    description:
      "Real-time fraud detection and risk assessment powered by ML models.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description:
      "Built-in KYC/AML workflows and automated reporting across jurisdictions.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 relative bg-[#0b0a15] border-t border-white/[0.02]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimateIn variant="fadeUp">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-slate-50 mb-4 tracking-tight">
              Built for{" "}
              <span className="text-gradient-purple-cyan">
                Modern Finance
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <p className="text-slate-500 text-base">
              Everything you need to launch scalable, secure financial
              applications.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <AnimateIn
              key={feature.title}
              variant="fadeUp"
              delay={0.05 * (index % 3) + 0.15}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
