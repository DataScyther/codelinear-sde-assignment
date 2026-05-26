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
      "Execute transactions in microseconds with our proprietary routing engine, ensuring you never miss a market movement.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "Military-grade encryption and decentralized key management keep your digital assets and user data absolutely secure.",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description:
      "Plug-and-play microservices allow you to build customized financial products faster than ever before.",
  },
  {
    icon: Globe,
    title: "Global Liquidity",
    description:
      "Access unified liquidity pools across 50+ decentralized and centralized exchanges through a single unified API.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Risk Engine",
    description:
      "Real-time fraud detection and risk assessment powered by cutting-edge neural networks.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description:
      "Built-in KYC/AML workflows and automated reporting ensure you stay compliant in every jurisdiction.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative z-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimateIn type="slide-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Engineering the Future of <br className="hidden md:block" />
              <span className="text-gradient-purple-cyan">Financial Technology</span>
            </h2>
          </AnimateIn>
          <AnimateIn type="slide-up" delay={0.1}>
            <p className="text-slate-400 text-lg">
              Our infrastructure provides the foundational primitives you need to launch
              scalable, secure, and blazing-fast financial applications.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimateIn
              key={feature.title}
              type="slide-up"
              delay={0.1 * (index % 3) + 0.2}
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
