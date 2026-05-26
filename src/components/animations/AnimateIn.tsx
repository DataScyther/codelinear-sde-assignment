"use client";

import { m, useReducedMotion } from "framer-motion";
import { memo } from "react";

export type AnimationVariant =
  | "fadeIn"
  | "fadeUp"
  | "slide-up"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "scale-up";

interface AnimateInProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

/* Only transform + opacity — compositor-friendly, no layout/paint triggers */
const variants: Record<
  AnimationVariant,
  {
    hidden: { opacity: number; x?: number; y?: number; scale?: number };
    visible: { opacity: number; x?: number; y?: number; scale?: number };
  }
> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
};

/** Viewport-triggered entry animation. Uses app-level LazyMotion provider. */
export const AnimateIn = memo(function AnimateIn({
  children,
  variant = "fadeUp",
  duration = 0.55,
  delay = 0,
  threshold = 0.15,
  className,
}: AnimateInProps) {
  const shouldReduceMotion = useReducedMotion();
  const selected = shouldReduceMotion ? "fadeIn" : variant;

  const motionVariants = {
    hidden: variants[selected].hidden,
    visible: {
      ...variants[selected].visible,
      transition: {
        duration: shouldReduceMotion ? 0.01 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={motionVariants}
      className={className}
    >
      {children}
    </m.div>
  );
});

interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}

export const StaggerContainer = memo(function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.08,
  className,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </m.div>
  );
});
