"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Single LazyMotion provider for the entire app.
 * This replaces per-component <LazyMotion> wrappers that caused
 * redundant feature-loading checks on every AnimateIn mount.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
