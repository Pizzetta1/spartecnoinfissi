"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(40px) scale(0.98)",
        opacity: visible ? 1 : 0,
        transition: `
          transform 1s cubic-bezier(0.22, 1, 0.36, 1),
          opacity 1s ease
        `,
      }}
    >
      {children}
    </div>
  );
}