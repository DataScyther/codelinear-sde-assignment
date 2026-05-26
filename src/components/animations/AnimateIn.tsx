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
  type?: AnimationVariant;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

/*
 * Variant definitions use only transform + opacity.
 * These are compositor-friendly properties that the GPU handles
 * without triggering layout or paint on any frame.
 */
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

/**
 * Lightweight viewport-triggered entry animation.
 * Relies on the app-level <MotionProvider> for LazyMotion features.
 *
 * Performance notes:
 * - Reduced travel distance (30px → 24px) for subtler, faster reveals
 * - Shortened default duration (0.8s → 0.55s) to feel snappier
 * - Memoized to prevent re-renders from parent state changes
 * - No per-instance LazyMotion — uses shared provider
 */
export const AnimateIn = memo(function AnimateIn({
  children,
  variant = "fadeUp",
  type,
  duration = 0.55,
  delay = 0,
  threshold = 0.15,
  className,
}: AnimateInProps) {
  const shouldReduceMotion = useReducedMotion();

  const activeVariant = type || variant;
  const selectedVariant = shouldReduceMotion ? "fadeIn" : activeVariant;

  const motionVariants = {
    hidden: variants[selectedVariant].hidden,
    visible: {
      ...variants[selectedVariant].visible,
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
