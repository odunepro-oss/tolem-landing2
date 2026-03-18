"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const lastScrollY = useRef(0);
  const previousOverflowY = useRef("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up (only when mobile menu is closed)
      if (!mobileMenuOpen) {
        const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 100;
        setHidden(isScrollingDown);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      previousOverflowY.current = document.body.style.overflowY;
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = previousOverflowY.current;
    }
    return () => {
      document.body.style.overflowY = previousOverflowY.current;
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Collection", href: "#manifeste" },
    { label: "Savoir-faire", href: "#savoirfaire" },
    { label: "Ressources", href: "#ressources" },
    { label: "Contact", href: "#newsletter" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden && !mobileMenuOpen ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? "bg-[#F5F5F5]/95 backdrop-blur-md py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10"
          >
            <img src="/logo.svg" alt="TOLEM" className="h-8 w-auto" />
          </motion.a>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="text-[12px] tracking-[0.1em] text-[#181818]/60 hover:text-[#181818] transition-colors duration-300 uppercase"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* CTA - Desktop */}
            <motion.a
              href="#newsletter"
              onClick={(e) => handleNavClick(e, "#newsletter")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden lg:flex items-center gap-2 text-[12px] tracking-[0.1em] text-[#181818] hover:text-[#181818]/60 transition-colors group uppercase"
            >
              <span>Rejoindre la liste</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group relative z-50"
              aria-label="Menu"
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 4 : 0,
                  width: mobileMenuOpen ? 24 : 20,
                }}
                className="h-px bg-black transition-all origin-center"
                style={{ width: 20 }}
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -4 : 0,
                  width: mobileMenuOpen ? 24 : 24,
                }}
                className="h-px bg-black transition-all origin-center"
                style={{ width: 24 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F5F5F5] lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  className="font-display text-[32px] text-[#181818] tracking-[-0.02em]"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8 font-mono text-[10px] tracking-wider text-[#181818]/40"
              >
                <span>BESANÇON</span>
                <span className="mx-2">—</span>
                <span>{time}</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Center - Live Time (Desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? 20 : 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 font-mono text-[10px] tracking-wider"
      >
        <span className="text-[#181818]/50">BESANÇON</span>
        <span className="text-[#181818]">{time}</span>
      </motion.div>
    </>
  );
}
