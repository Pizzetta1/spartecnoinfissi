"use client"; 

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Link from "next/link";
import FadeIn from "./components/FadeIn";
import MagneticButton from "./components/MagneticButton";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "./components/Navbar";

const rooms = [
  {
    number: "01",
    title: "Infissi in legno",
    subtitle: "Luce, artigianalità e precisione",
    desc: "Finestre realizzate a mano nel nostro laboratorio...",
    href: "/infissi",
    img: "/infissi.png",
    cta: "Scopri gli infissi",
  },
  {
    number: "02",
    title: "Porte da interni",
    subtitle: "Design e continuità degli ambienti",
    desc: "Dalla porta tradizionale alla soluzione filo-muro...",
    href: "/porte",
    img: "/porte.png",
    cta: "Scopri le porte",
  },
  {
    number: "03",
    title: "Arredi",
    subtitle: "Spazi pensati su misura",
    desc: "Cucine, cabine armadio, librerie...",
    href: "/arredi",
    img: "/arredi.png",
    cta: "Scopri gli arredi",
  },
  {
    number: "04",
    title: "Pavimenti e rivestimenti",
    subtitle: "Superfici che definiscono l'ambiente",
    desc: "Parquet, pavimenti resinati e rivestimenti in gres per ogni stile abitativo.",
    href: "/pavimenti-rivestimenti",
    img: "/pavimenti.png",
    cta: "Scopri i pavimenti",
  },
  {
    number: "05",
    title: "Scale in legno",
    subtitle: "Elementi architettonici su misura",
    desc: "Scale a giorno, elicoidali e tradizionali realizzate interamente nel nostro laboratorio.",
    href: "/scale-legno",
    img: "/scale.png",
    cta: "Scopri le scale",
  },
];

function ShowroomSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <>
      {/* DESKTOP */}
      <div
        ref={containerRef}
        className="relative border-t border-black/5 hidden md:block"
        style={{ height: "500vh" }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-[#F5F5F5]">
          <motion.div className="flex h-full" style={{ width: "500%", x }}>
            {rooms.map((room, i) => (
              <div key={i} className="flex h-full" style={{ width: "20%" }}>
                <div className="w-[55%] relative overflow-hidden">
                  <img src={room.img} className="w-full h-full object-cover" />
                </div>

                <div className="w-[45%] flex flex-col justify-center px-16">
                  <p className="text-xs text-neutral-400 tracking-widest uppercase mb-6">{room.number}</p>
                  <h2 className="text-5xl font-serif mb-6">{room.title}</h2>
                  <p className="text-neutral-500 mb-6">{room.subtitle}</p>
                  <p className="text-neutral-600 mb-10">{room.desc}</p>

                  <Link href={room.href} className="group flex items-center gap-3">
                    <span>{room.cta}</span>
                    <span className="h-px w-8 bg-black group-hover:w-16 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col">
        {rooms.map((room, i) => (
          <div key={i} className="border-t border-black/10">
            <img src={room.img} className="w-full h-[260px] object-cover" />

            <div className="p-6">
              <p className="text-xs text-neutral-400 tracking-widest uppercase mb-3">{room.number}</p>
              <h2 className="text-2xl font-serif mb-3">{room.title}</h2>
              <p className="text-neutral-500 mb-3 text-sm">{room.subtitle}</p>

              <Link href={room.href} className="flex items-center gap-2 text-sm">
                <span>{room.cta}</span>
                <span className="h-px w-6 bg-black" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      if (window.scrollY > 50) setShowScroll(false);
      else setShowScroll(true);

      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.12}px) scale(1.06)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="flex flex-col text-[#0A0A0A] selection:bg-black selection:text-white">

      <Navbar />

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">

        <img
          ref={imageRef}
          src="/hero.png"
          className="w-full h-[110vh] md:h-[150vh] object-cover object-top transition-transform duration-300 ease-out"
          alt="hero"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center text-center text-white px-6">
          <div className="max-w-5xl">

            <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 transition-opacity duration-500 ${showScroll ? "opacity-100" : "opacity-0"}`}>
              <div className="w-[22px] h-[36px] border border-white/50 rounded-full flex items-start justify-center p-[4px]">
                <div className="w-[3px] h-[6px] bg-white/70 rounded-full animate-scroll"></div>
              </div>
              <span className="text-[10px] tracking-widest uppercase">Scroll</span>
            </div>

            <FadeIn>
              <h1 className="text-3xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
                Infissi e arredi
                <br />
                <span className="text-white/70">progettati per durare</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-base md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-2xl mx-auto leading-relaxed">
                Precisione tecnica, materiali selezionati e design contemporaneo
                per ogni spazio abitativo.
              </p>
            </FadeIn>

          </div>
        </div>

      </section>

      <div className="relative z-20 bg-[#F5F5F5]">

        <section className="py-20 md:py-32 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-end">

            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Progettiamo e realizziamo <em>infissi in legno su misura</em>,{" "}
                <em>porte da interni</em> e <em>arredi</em>.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-neutral-500 space-y-6">
                <p>Dal laboratorio di Santu Lussurgiu, serviamo privati e professionisti in tutta la Sardegna.</p>

                <Link href="/chi-siamo" className="group flex items-center gap-3">
                  <span>La nostra storia</span>
                  <span className="h-px w-8 bg-black group-hover:w-16 transition-all" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </section>

        <ShowroomSection />

        {/* ── I NOSTRI LAVORI ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif text-center mb-20">
                I nostri lavori
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Hotel Calabona, Alghero",
                  desc: "Finestre Minimal",
                  img: "/calabona.png",
                  hoverImg: "/calabona2.png",
                },
                {
                  title: "Villa Olivetta, Alghero",
                  desc: "Finestre Classiche",
                  img: "/villa_olivetta.png",
                  hoverImg: "/villa_olivetta2.png",
                },
                {
                  title: "Palazzina, Alghero",
                  desc: "Porte da interno e infissi in legno",
                  img: "/palazzo_rinaldi.png",
                  hoverImg: "/palazzo_rinaldi2.png",
                },
                {
                  title: "Piscine idromassaggio",
                  desc: "su misura",
                  img: "/piscina.png",
                  hoverImg: "/piscina2.png",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.2}>
                  <div className="relative h-[420px] overflow-hidden rounded-xl group cursor-pointer">

                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={item.img}
                        className="absolute inset-0 w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                        alt={item.title}
                      />
                      <img
                        src={item.hoverImg}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-[1200ms] ease-out group-hover:opacity-100 group-hover:scale-110"
                        alt={item.title}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-700"></div>

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-serif translate-y-6 group-hover:translate-y-0 transition duration-700 ease-out">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-200 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 delay-100">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ── NUMERI ── */}
        <section className="py-32 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { num: "50+", label: "Anni di esperienza" },
                { num: "500+", label: "Progetti realizzati" },
                { num: "10+", label: "Artigiani specializzati" },
                { num: "100%", label: "Produzione interna" },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div>
                    <p className="text-5xl font-serif tracking-tight">{stat.num}</p>
                    <p className="mt-3 text-gray-500 text-sm font-light tracking-wide">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0A0A] text-white py-44 text-center relative overflow-hidden">

          {/* LUCE CTA */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

          <FadeIn>
            <h2 className="text-4xl font-serif">
              Hai un progetto? Parliamone
            </h2>
            <p className="mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed text-base">
              Consulenza gratuita e preventivo su misura. Siamo a Santu Lussurgiu
              e operiamo in tutta la Sardegna.
            </p>

            <div className="mt-10">
              <MagneticButton>
                <Link href="/contatti" className="relative inline-block overflow-hidden px-10 py-4 border border-white group">

                  <span className="relative z-10 transition duration-500 group-hover:tracking-wide">
                    Contattaci
                  </span>

                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>

                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                    Contattaci
                  </span>

                </Link>
              </MagneticButton>
            </div>
          </FadeIn>

        </section>

      </div>

    </main>
  );
}
