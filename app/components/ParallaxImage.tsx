"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <motion.img
      src="/hero.jpg"
      style={{ y }}
      className="w-full h-[150vh] object-cover object-top"
      alt="hero"
    />
  );
}