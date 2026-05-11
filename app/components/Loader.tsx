"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#0A0A0A] text-white transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">

        {/* TITOLO */}
        <h1 className="text-3xl md:text-4xl font-serif tracking-tight leading-normal">
          <span className="opacity-0 translate-y-6 blur-sm animate-[loaderIn_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards] inline-block">
            Spar Tecnoinfissi
          </span>
        </h1>

        {/* SOTTOTITOLO + LINEE */}
        <div className="mt-10 flex justify-center gap-12 text-sm tracking-widest">

          {/* DESIGN */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400 mb-3 opacity-0 animate-[loaderIn_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:0.4s]">
              DESIGN
            </span>
            <div className="h-[2px] w-16 bg-green-500"></div>
          </div>

          {/* PRECISIONE */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400 mb-3 opacity-0 animate-[loaderIn_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:0.5s]">
              PRECISIONE
            </span>
            <div className="h-[2px] w-16 bg-white"></div>
          </div>

          {/* QUALITÀ */}
          <div className="flex flex-col items-center">
            <span className="text-gray-400 mb-3 opacity-0 animate-[loaderIn_1.2s_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:0.6s]">
              QUALITÀ
            </span>
            <div className="h-[2px] w-16 bg-red-500"></div>
          </div>

        </div>

      </div>
    </div>
  );
}