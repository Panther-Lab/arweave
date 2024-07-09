import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatNumber(input: number, decimals?: number) {
  if (input === undefined || input === null) return 0;
  return input.toLocaleString("en-US", {
    maximumFractionDigits: decimals ?? 2,
    notation: "compact",
    compactDisplay: "short",
  });
}
