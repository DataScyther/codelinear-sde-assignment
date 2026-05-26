import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DashboardPreview />
      <Stats />
      <CTA />
      {/* 
        Remaining UI Sections will be injected here:
        - CTA
        - Footer
      */}
    </>
  );
}
