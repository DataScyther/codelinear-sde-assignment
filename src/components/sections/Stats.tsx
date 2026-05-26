import React from "react";
import { Container } from "@/components/layout/Container";
import { AnimateIn } from "@/components/animations/AnimateIn";

const stats = [
  { label: "Quarterly Volume", value: "$42B+" },
  { label: "Active Institutions", value: "2,500+" },
  { label: "Avg Latency", value: "<1ms" },
  { label: "Uptime", value: "99.99%" },
];

export const Stats = () => {
  return (
    <section className="py-20 border-y border-white/[0.04] relative">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <AnimateIn
              key={index}
              variant="fadeUp"
              delay={0.08 * index}
              className="text-center"
            >
              <h4 className="text-3xl md:text-4xl font-heading font-bold text-white mb-1.5 tabular-nums">
                {stat.value}
              </h4>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
