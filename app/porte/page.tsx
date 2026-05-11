"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import MagneticButton from "../components/MagneticButton";

function ImgBox({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-neutral-200 flex flex-col items-center justify-center gap-3 text-neutral-400 ${className}`}>
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-xs uppercase tracking-widest">Immagine</span>
    </div>
  );
}

const doorTypes = [
  {
    num: "01",
    title: "Porte a Battente",
    desc: "La soluzione classica per eccellenza. La porta a battente in legno massello garantisce isolamento acustico superiore e un'estetica senza tempo, adatta a ogni stile abitativo.",
    detail: "Disponibili a una o due ante, con diverse tipologie di pannellatura e vetrate. Massima personalizzazione di dimensioni e finiture.",
  },
  {
    num: "02",
    title: "Porte Scorrevoli",
    desc: "Ideali per ottimizzare gli spazi: scompaiono nel muro o scorrono a vista su binari di design. Funzionalità e leggerezza visiva in perfetto equilibrio.",
    detail: "Sistema a scomparsa o con guide esterne in alluminio o acciaio inox. Possibilità di vetrate satinate, decorate o trasparenti.",
  },
  {
    num: "03",
    title: "Porte a Filo Muro",
    desc: "La scelta contemporanea per chi ama le linee pulite: la porta si integra perfettamente nella parete, creando una superficie continua e minimalista.",
    detail: "Tecnologia di precisione per complanarità perfetta. Design minimalista adatto agli ambienti più moderni e ricercati.",
  },
  {
    num: "04",
    title: "Porte Laccate e Decorate",
    desc: "Colori, texture e decorazioni per esprimere la propria personalità. Il legno come tela per soluzioni d'arredo uniche e personalizzate.",
    detail: "Laccature opache o lucide in qualsiasi tonalità RAL. Intagli, mosaici lignei e decorazioni artigianali su richiesta.",
  },
];

const essenze = [
  { name: "Rovere", desc: "Resistente e versatile, dal tono caldo e caratteristico. Il più richiesto per porte di pregio." },
  { name: "Noce", desc: "Venatura intensa e colore profondo. Sinonimo di eleganza e lusso artigianale." },
  { name: "Castagno", desc: "Essenza locale dalle tonalità calde. Rustico e raffinato al tempo stesso." },
  { name: "Abete", desc: "Leggerezza e naturalezza. Ideale per ambienti in stile nordico o minimal." },
  { name: "Frassino", desc: "Nervatura decisa e resistenza meccanica elevata. Perfetto per porte di grande formato." },
  { name: "MDF Laccato", desc: "Soluzione moderna con finitura a scelta. Economica e di grande effetto estetico." },
];

export default function PortePage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="flex flex-col text-[#0A0A0A] selection:bg-black selection:text-white">

      <Navbar />

      {/* ════════════════════════════════════════
          PAGE HERO
      ════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">

        {/*
          IMMAGINE HERO PORTE
          → Sostituire questo <div> con:
          <img src="/images/porte-hero.jpg" className="w-full h-full object-cover" alt="Porte da interni" />
        */}
        <img
  src="/portepage.png"
  className="w-full h-full object-cover"
  alt="Porte da interni"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              Porte interne · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Porte da Interni
              <br />
              <span className="text-white/70">su Misura</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-2xl leading-relaxed">
              Dalle antiche porte in legno, vere espressioni di artigianalità e tradizione,
              alle moderne soluzioni high-tech. Ogni porta è un'opera su misura.
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

            {/* IMMAGINE */}
            <FadeIn>
              {/*
                → Sostituire con:
                <img src="/images/porte-intro.jpg" className="w-full h-[500px] object-cover rounded-2xl" alt="Porte da interni" />
              */}
              <img
  src="/portepage2.png"
  className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl"
  alt="Porte da interni"
/>
            </FadeIn>

            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Tradizione e modernità
                  <br />in ogni anta
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-gray-600 font-light leading-relaxed text-base">
                  Una porta non è solo un passaggio: definisce lo spazio, crea atmosfera
                  e racconta la personalità di chi abita quella casa. Per questo ogni
                  nostra porta da interni viene realizzata con cura sartoriale, unendo
                  la sapienza artigianale sarda alle migliori tecnologie di lavorazione.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-5 text-gray-600 font-light leading-relaxed text-base">
                  Dalla scelta dell'essenza alla vernice, dai cernieri alle maniglie:
                  ogni dettaglio è curato per garantire un risultato che superi
                  le aspettative e duri nel tempo.
                </p>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* ── TIPOLOGIE ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif mb-24 tracking-tight">
                Tipologie di Porte
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {doorTypes.map((d, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-2 gap-0 border-t border-black/10 py-16 items-center">

                    <div className={i % 2 === 0 ? "md:pr-20" : "md:order-2 md:pl-20"}>
                      <span className="text-xs tracking-[0.3em] uppercase text-gray-400">{d.num}</span>
                      <h3 className="mt-3 text-3xl font-serif tracking-tight">{d.title}</h3>
                      <p className="mt-5 text-gray-600 font-light leading-relaxed">{d.desc}</p>
                      <p className="mt-4 text-gray-500 text-sm font-light leading-relaxed">{d.detail}</p>
                    </div>

                    <div className={i % 2 === 0 ? "" : "md:order-1"}>
                      {/*
                        → Sostituire con:
                        <img src={`/images/porta-${d.num}.jpg`} className="w-full h-[340px] object-cover rounded-2xl" alt={d.title} />
                      */}
                      <img
  src={`/portepage${i + 3}.png`}
  className={`w-full h-[340px] object-cover rounded-2xl ${
    i === 0
      ? "object-[50%_55%]"   // portepage3.png
      : i === 1
      ? "object-[50%_10%]"   // portepage4.png
      : i === 2
      ? "object-[50%_45%]"   // portepage5.png
      : "object-[50%_40%]"   // portepage6.png
  }`}
  alt={d.title}
/>
                    </div>

                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-black/10"></div>
            </div>

          </div>
        </section>

        {/* ── ESSENZE ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif mb-4 tracking-tight">
                Le Essenze del Legno
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-500 font-light max-w-lg mb-20">
                La scelta del legno giusto è la prima e più importante decisione.
                Ecco le essenze con cui lavoriamo con maggiore frequenza.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {essenze.map((e, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group border border-black/10 p-8 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1">
                    <div className="h-[1px] w-8 bg-black mb-6 transition-all duration-700 group-hover:w-16"></div>
                    <h3 className="text-xl font-medium tracking-tight">{e.name}</h3>
                    <p className="mt-4 text-gray-600 text-sm font-light leading-relaxed">{e.desc}</p>
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
              <h2 className="text-4xl font-serif mb-20">Alcuni lavori</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Porta a battente in rovere", desc: "Ristrutturazione a Oristano" },
                { title: "Porte scorrevoli minimal", desc: "Appartamento a Cagliari" },
                { title: "Porta a filo muro", desc: "Villa privata, Sardegna" },
                { title: "Porte laccate", desc: "Ristrutturazione, Nuoro" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="relative h-[420px] overflow-hidden rounded-xl group cursor-pointer">
                    {/*
                      → Sostituire con:
                      <img src={`/images/porte-lavoro-${i+1}.jpg`} className="w-full h-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:-translate-y-2" alt={item.title} />
                    */}
                    <div className="w-full h-full bg-neutral-300 transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:-translate-y-2">
                      <ImgBox className="w-full h-full" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-700"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-serif translate-y-6 group-hover:translate-y-0 transition duration-700 ease-out">{item.title}</h3>
                      <p className="text-sm text-gray-200 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-700 delay-100">{item.desc}</p>
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
            <h2 className="text-4xl font-serif">Progettiamo la porta perfetta per te</h2>
            <p className="mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed">
              Vieni a trovarci nel nostro showroom o contattaci:
              troveremo insieme la soluzione giusta per ogni ambiente.
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
