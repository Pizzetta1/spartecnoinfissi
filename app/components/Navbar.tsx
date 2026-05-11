"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const prodotti = [
  { label: "Infissi in legno", href: "/infissi" },
  { label: "Porte da interni", href: "/porte" },
  { label: "Arredi", href: "/arredi" },
  { label: "Pavimenti e rivestimenti", href: "/pavimenti-rivestimenti" },
  { label: "Scale in legno", href: "/scale-legno" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Chiude il menu mobile al cambio pagina
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chiude dropdown al click fuori
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled || mobileOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="font-serif text-lg">
            Spar Tecnoinfissi
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-sans">

            <Link href="/" className="opacity-80 hover:opacity-100 transition">
              Home
            </Link>

            {/* DROPDOWN PRODOTTI */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 opacity-80 hover:opacity-100 transition"
              >
                Prodotti
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* MENU DROPDOWN */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white text-black shadow-xl rounded-xl overflow-hidden transition-all duration-300 origin-top ${
                  dropdownOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                {prodotti.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 text-sm hover:bg-neutral-50 transition border-b border-black/5 last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/chi-siamo" className="opacity-80 hover:opacity-100 transition">
              Chi siamo
            </Link>

            <Link href="/contatti" className="opacity-80 hover:opacity-100 transition">
              Contatti
            </Link>

          </div>

          {/* HAMBURGER MOBILE */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>

        </div>
      </nav>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center px-10 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8 text-3xl font-serif">

          <Link href="/" className="hover:opacity-60 transition">Home</Link>

          {/* PRODOTTI MOBILE */}
          <div>
            <button
              onClick={() => setMobileProductsOpen((v) => !v)}
              className="flex items-center gap-3 hover:opacity-60 transition"
            >
              Prodotti
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                mobileProductsOpen ? "max-h-[400px] mt-4" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-4 pl-4 border-l border-black/10">
                {prodotti.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xl font-sans font-light text-neutral-600 hover:text-black transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/chi-siamo" className="hover:opacity-60 transition">Chi siamo</Link>
          <Link href="/contatti" className="hover:opacity-60 transition">Contatti</Link>

        </div>
      </div>
    </>
  );
}
