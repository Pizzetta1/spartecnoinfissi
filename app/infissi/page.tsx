"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import MagneticButton from "../components/MagneticButton";

/* ─── Placeholder immagine ─── */
function ImgBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-neutral-200 flex flex-col items-center justify-center gap-3 text-neutral-400 ${className}`}
    >
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-xs uppercase tracking-widest">Immagine</span>
    </div>
  );
}

const windowTypes = [
  {
    num: "01",
    title: "Finestre Minimaliste",
    desc: "Profili sottili e linee nette per chi cerca purezza formale. Il telaio in legno si riduce all'essenziale, lasciando massimo spazio alla luce e alla vista.",
    detail: "Ideale per architetture moderne e contemporanee. Disponibili con vetrocamera triplo e trattamenti termoisolanti certificati.",
  },
  {
    num: "02",
    title: "Finestre a Battente",
    desc: "Il classico senza tempo: praticità d'uso e versatilità di design. Si adattano a qualsiasi stile architettonico, dal tradizionale al contemporaneo.",
    detail: "Apertura a una o due ante. Disponibili con ventilazione a ribalta incorporata. Massima accessibilità per la pulizia.",
  },
  {
    num: "03",
    title: "Finestre Scorrevoli",
    desc: "Per ottimizzare lo spazio e creare continuità tra interno ed esterno. Il legno scorre con fluidità su guide di precisione in alluminio anodizzato.",
    detail: "Sistema a scorrimento complanare o parallelo. Ottime prestazioni di tenuta all'acqua e all'aria con guarnizioni di qualità.",
  },
  {
    num: "04",
    title: "Finestre a Bilico",
    desc: "Rotazione sull'asse centrale orizzontale o verticale: una soluzione tecnica che diventa elemento di design distintivo e originale.",
    detail: "Facilità di pulizia da entrambi i lati. Ampia varietà di gradi di apertura. Eccellente ventilazione naturale controllata.",
  },
];

export default function InfissiPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="flex flex-col text-[#0A0A0A] selection:bg-black selection:text-white">

      {/* ════════════════════════════════════════
          PAGE HERO
      ════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">

        {/*
          IMMAGINE HERO INFISSI
          → Sostituire questo <div> con:
          <img src="/images/infissi-hero.jpg" className="w-full h-full object-cover" alt="Infissi in legno" />
        */}
        <img
  src="/infissipage.png"
  className="w-full h-full object-cover"
  alt="Infissi in legno"
/>

        {/* GRADIENTE PROFONDO */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>

        {/* LUCE CENTRALE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

        {/* VIGNETTA */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        {/* TESTO */}
        <div className="absolute inset-0 flex items-end pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              Serramenti · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Infissi in Legno
              <br />
              <span className="text-white/70">su Misura</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-2xl leading-relaxed">
              Dalle finestre minimaliste ai serramenti tradizionali: ogni infisso
              nasce nel nostro laboratorio di Santu Lussurgiu e viene installato
              in tutta la Sardegna.
            </p>
          </FadeIn>
        </div>

      </section>

      {/* ════════════════════════════════════════
          CONTENUTO
      ════════════════════════════════════════ */}
      <div className="relative z-20 bg-[#F5F5F5]">

        {/* ── INTRO ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Il legno è una scelta
                  <br />che dura nel tempo
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-8 text-gray-600 font-light leading-relaxed text-base">
                  Gli infissi in legno non sono solo un elemento funzionale: sono parte
                  dell'identità di una casa. Il calore naturale del legno, le sue proprietà
                  isolanti e la durabilità con la giusta manutenzione ne fanno la scelta
                  ideale per chi vuole il meglio.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-5 text-gray-600 font-light leading-relaxed text-base">
                  Nel nostro laboratorio, ogni finestra è costruita con attenzione al
                  millimetro: dall'essenza selezionata alle vernici certificate, fino
                  alla ferramenta di precisione. Produciamo internamente e installiamo
                  in tutta la provincia di Oristano e la Sardegna.
                </p>
              </FadeIn>
            </div>

            {/* IMMAGINE LATERALE */}
            <FadeIn delay={0.1}>
              {/*
                → Sostituire con:
                <img src="/images/infissi-detail.jpg" className="w-full h-[500px] object-cover rounded-2xl" alt="..." />
              */}
              <img
  src="/infissipage2.png"
  className="w-full h-[500px] object-cover rounded-2xl"
  alt="Infissi dettaglio"
/>
            </FadeIn>

          </div>
        </section>

        {/* ── TIPOLOGIE ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif mb-24 tracking-tight">
                Tipologie di Finestre
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {windowTypes.map((w, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-2 gap-0 border-t border-black/10 py-16 items-center">

                    {/* testo alternato */}
                    <div className={i % 2 === 0 ? "md:pr-20" : "md:order-2 md:pl-20"}>
                      <span className="text-xs tracking-[0.3em] uppercase text-gray-400">{w.num}</span>
                      <h3 className="mt-3 text-3xl font-serif tracking-tight">{w.title}</h3>
                      <p className="mt-5 text-gray-600 font-light leading-relaxed">{w.desc}</p>
                      <p className="mt-4 text-gray-500 text-sm font-light leading-relaxed">{w.detail}</p>
                    </div>

                    {/* immagine alternata */}
                    <div className={i % 2 === 0 ? "" : "md:order-1"}>
                      {/*
                        → Sostituire con:
                        <img src={`/images/finestra-${w.num}.jpg`} className="w-full h-[340px] object-cover rounded-2xl" alt={w.title} />
                      */}
                      <img
  src={
    i === 0 ? "/infissipage3.png" :
    i === 1 ? "/infissipage4.png" :
    i === 2 ? "/infissipage5.png" :
    "/infissipage6.png"
  }
  className="w-full h-[340px] object-cover rounded-2xl"
  alt={w.title}
/>
                    </div>

                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-black/10"></div>
            </div>

          </div>
        </section>

        {/* ── PROCESSO ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif text-center mb-24">
                Come lavoriamo
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Consulenza", desc: "Incontro per capire esigenze, misurare gli spazi e trovare la soluzione più adatta al tuo progetto." },
                { step: "02", title: "Progettazione", desc: "I nostri artigiani sviluppano il progetto su misura: essenze, finiture e accessori scelti insieme a te." },
                { step: "03", title: "Lavorazione", desc: "Ogni infisso nasce nel nostro laboratorio di Santu Lussurgiu con controllo qualità in ogni fase." },
                { step: "04", title: "Installazione", desc: "Il nostro team si occupa della posa professionale e garantisce assistenza post-vendita in tutta la Sardegna." },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="text-center">
                    <div className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center mx-auto mb-6 text-sm font-light tracking-widest text-gray-500">
                      {p.step}
                    </div>
                    <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-4 text-gray-600 text-sm font-light leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ── GALLERIA ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif mb-20">
                Alcuni lavori
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Finestre minimaliste",
                "Serramento a battente",
                "Finestre scorrevoli",
              ].map((title, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="relative h-[360px] overflow-hidden rounded-xl group cursor-pointer">
                    {/*
                      → Sostituire con:
                      <img src={`/images/infissi-lavoro-${i+1}.jpg`} className="w-full h-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:-translate-y-2" alt={title} />
                    */}
                    <div className="w-full h-full bg-neutral-300 transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:-translate-y-2">
                      <ImgBox className="w-full h-full" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-700"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-serif translate-y-4 group-hover:translate-y-0 transition duration-700 ease-out">{title}</h3>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0A0A] text-white py-44 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
          <FadeIn>
            <h2 className="text-4xl font-serif">
              Vuoi un preventivo per le tue finestre?
            </h2>
            <p className="mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed">
              Consulenza gratuita. Misuriamo, progettiamo e installiamo
              le tue finestre in legno su misura in tutta la Sardegna.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link href="/contatti" className="relative inline-block overflow-hidden px-10 py-4 border border-white group">
                  <span className="relative z-10 transition duration-500 group-hover:tracking-wide">Richiedi preventivo</span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-500 z-10">Richiedi preventivo</span>
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </section>

      </div>

    </main>
  );
}
