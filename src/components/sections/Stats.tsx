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
    <section className="py-10 md:py-12 border-y border-white/[0.02] bg-[#0b0a15]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <AnimateIn
              key={index}
              variant="fadeUp"
              delay={0.06 * index}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1 tabular-nums tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
