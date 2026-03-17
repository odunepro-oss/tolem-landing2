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
  const intervalSpeed = Math.max(1, Math.floor(speed / 2));

  const runAnimation = useCallback((animDelay: number) => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const textChars = text.split("");
      const totalIterations = Math.min(text.length * 2, 40);

      const interval = setInterval(() => {
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
          clearInterval(interval);
          setDisplayText(text);
        }
      }, intervalSpeed);

      return () => clearInterval(interval);
    }, animDelay);

    return () => clearTimeout(timeout);
  }, [text, intervalSpeed]);

  // Re-animate when text changes (for dynamic content like Collection)
  useEffect(() => {
    if (text !== lastTextRef.current) {
      lastTextRef.current = text;
      return runAnimation(0);
    }
  }, [text, runAnimation]);

  // Initial animation on scroll into view
  useEffect(() => {
    if (!isInView) return;
    return runAnimation(delay);
  }, [isInView, delay, runAnimation]);

  return (
    <span ref={ref} className={`relative inline-grid align-baseline ${className}`}>
      <span className="invisible whitespace-pre" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0 whitespace-pre" aria-hidden="true">
        {displayText}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
