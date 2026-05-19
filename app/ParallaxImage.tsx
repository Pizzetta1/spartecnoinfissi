"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // ❌ MOBILE → niente parallax
  if (isMobile) {
    return (
      <img
        src="/hero.jpg"
        className="w-full h-screen object-cover object-top"
        alt="hero"
      />
    );
  }

  // ✅ DESKTOP → parallax attivo
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <motion.img
      src="/hero.png"
      style={{ y }}
      className="w-full h-[150vh] object-cover object-top"
      alt="hero"
    />
  );
}