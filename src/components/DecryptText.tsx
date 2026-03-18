"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

interface DecryptTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function DecryptText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}: DecryptTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState(text);
  const lastTextRef = useRef(text);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalSpeed = Math.max(1, Math.floor(speed / 2));

  const clearAnimation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const runAnimation = useCallback((animDelay: number) => {
    clearAnimation();

    timeoutRef.current = setTimeout(() => {
      let iteration = 0;
      const textChars = text.split("");
      const totalIterations = Math.min(text.length * 2, 40);

      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";

              // Characters that have been "decrypted"
              if (index < iteration / 3) {
                return text[index];
              }

              // Get shuffled char from text itself for width consistency
              const nonSpaceChars = textChars.filter(c => c !== " " && c !== char);
              if (nonSpaceChars.length === 0) return char;
              return nonSpaceChars[Math.floor(Math.random() * nonSpaceChars.length)];
            })
            .join("")
        );

        iteration++;

        if (iteration > totalIterations) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setDisplayText(text);
        }
      }, intervalSpeed);
    }, animDelay);
  }, [clearAnimation, text, intervalSpeed]);

  // Re-animate when text changes (for dynamic content like Collection)
  useEffect(() => {
    if (text !== lastTextRef.current) {
      lastTextRef.current = text;
      runAnimation(0);
    }
  }, [text, runAnimation]);

  // Initial animation on scroll into view
  useEffect(() => {
    if (!isInView) return;
    runAnimation(delay);
    return clearAnimation;
  }, [isInView, delay, runAnimation, clearAnimation]);

  useEffect(() => clearAnimation, [clearAnimation]);

  return (
    <span ref={ref} className={`relative inline-block max-w-full align-baseline ${className}`}>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {displayText}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
