"use client";

import React from "react";
import { m, LazyMotion, domAnimation, useReducedMotion } from "framer-motion";

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
  // Fallback for older code referencing 'type'
  type?: AnimationVariant;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * AnimateIn is a wrapper component that leverages Framer Motion
 * to provide fluid viewport-triggered entry animations.
 * Uses LazyMotion to strip the animation engine out of the initial bundle.
 */
export function AnimateIn({
  children,
  variant = "fadeUp",
  type,
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
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
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: threshold }}
        variants={motionVariants}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
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
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
