import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes and merges conflicts dynamically.
 * Standard utility for building robust and customizable components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
