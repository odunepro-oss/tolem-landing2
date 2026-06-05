"use client";

import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CarouselProps {
  images: { src: string; alt: string }[];
  embedded?: boolean;
}

export default function Carousel({ images, embedded = false }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const controls = useAnimationControls();
  const dragX = useMotionValue(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const containerW = containerRef.current.offsetWidth;
      // Mobile: full width minus padding, Desktop: ~60% of container
      const sw = window.innerWidth < 1024 ? containerW : containerW * 0.55;
      setSlideWidth(sw);
      setTrackWidth(sw * images.length);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [images.length]);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, images.length - 1));
    setActiveIndex(clamped);
    controls.start({
      x: -clamped * slideWidth,
      transition: { type: "spring", stiffness: 300, damping: 40 },
    });
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = slideWidth * 0.2;
    const vThreshold = 300;
    let newIndex = activeIndex;

    if (info.offset.x < -threshold || info.velocity.x < -vThreshold) {
      newIndex = activeIndex + 1;
    } else if (info.offset.x > threshold || info.velocity.x > vThreshold) {
      newIndex = activeIndex - 1;
    }

    goTo(newIndex);
    isDragging.current = false;
  };

  const maxDrag = 0;
  const minDrag = -(images.length - 1) * slideWidth;

  if (images.length === 0) return null;

  const Wrapper = embedded ? "div" : "section";

  return (
    <Wrapper
      className={
        embedded
          ? "relative mb-16 lg:mb-20 overflow-hidden"
          : "relative bg-white pb-16 lg:pb-24 overflow-hidden"
      }
    >
      <div
        ref={containerRef}
        className={embedded ? "" : "max-w-[1400px] mx-auto px-6 lg:px-10"}
      >
        {/* Track */}
        <div className="overflow-visible">
          <motion.div
            ref={trackRef}
            className="flex cursor-grab active:cursor-grabbing"
            style={{ width: trackWidth || "auto", x: dragX }}
            drag="x"
            dragConstraints={{ left: minDrag, right: maxDrag }}
            dragElastic={0.1}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 pr-3 lg:pr-5"
                style={{ width: slideWidth || "55%" }}
              >
                <div className="aspect-[16/10] lg:aspect-[3/2] bg-[#E8E8E8] overflow-hidden rounded-sm">
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: activeIndex === index ? 1 : 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    draggable={false}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6 lg:mt-8">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="relative w-2 h-2 rounded-full bg-[#D0D0D0] transition-colors duration-300"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#181818]"
                  initial={false}
                  animate={{ scale: activeIndex === index ? 1 : 0, opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>

          {/* Counter + Arrows */}
          <div className="flex items-center gap-4">
            <span
              className="text-[12px] text-[#888] tracking-[0.05em] font-mono tabular-nums"
              role="status"
              aria-live="polite"
              aria-label={`Image ${activeIndex + 1} sur ${images.length}`}
            >
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="w-9 h-9 flex items-center justify-center border border-[#D0D0D0] rounded-full text-[#181818] disabled:opacity-25 disabled:cursor-default hover:border-[#181818] transition-colors"
                aria-label="Previous"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === images.length - 1}
                className="w-9 h-9 flex items-center justify-center border border-[#D0D0D0] rounded-full text-[#181818] disabled:opacity-25 disabled:cursor-default hover:border-[#181818] transition-colors"
                aria-label="Next"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
