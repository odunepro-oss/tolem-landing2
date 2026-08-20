// Meta (Facebook) Pixel helpers.
// The base pixel + PageView is loaded once in src/app/layout.tsx.
// Use these helpers to fire conversion events from anywhere in the app.

export const FB_PIXEL_ID = "2295186121314482";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire a Meta "Lead" event when a visitor submits their email (newsletter sign-up). */
export function trackLead(): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}
