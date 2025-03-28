import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string using clsx and tailwind-merge
 * 
 * This utility helps with conditional and dynamic class names while resolving
 * any conflicts in Tailwind CSS classes.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <div className={cn("text-red-500", "bg-blue-100", isActive && "font-bold")}>
 *   This has red text, blue background, and conditionally bold font
 * </div>
 * 
 * // Resolving conflicts
 * <div className={cn("px-4", props.className, isWide && "px-6")}>
 *   Tailwind merge will ensure only the winning px class remains
 * </div>
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
