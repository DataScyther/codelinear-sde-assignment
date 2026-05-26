import React from "react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

const stats = [
  { label: "Quarterly Volume", value: "$42B+" },
  { label: "Active Institutions", value: "2,500+" },
  { label: "Execution Latency", value: "<1ms" },
  { label: "System Uptime", value: "99.999%" },
];

export const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#030014]/50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimateIn
              key={index}
              type="slide-up"
              delay={0.1 * index}
              className="text-center"
            >
              <h4 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-2">
                {stat.value}
              </h4>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
