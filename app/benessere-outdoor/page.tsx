"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Link from "next/link";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import MagneticButton from "../components/MagneticButton";

function ImgBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-neutral-200 flex flex-col items-center justify-center gap-3 text-neutral-400 ${className}`}
    >
      <svg
        width="36"
        height="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-xs uppercase tracking-widest">Immagine</span>
    </div>
  );
}

const soluzioni = [
  {
    num: "01",
    title: "Piscine Idromassaggio",
    desc: "Soluzioni dedicate al benessere quotidiano, progettate per integrarsi con eleganza in ambienti interni ed esterni. Dalla mini-piscina compatta alla vasca idromassaggio da terrazza o giardino, selezioniamo prodotti affidabili e di alta gamma.",
    detail:
      "Installazione, consulenza e supporto nella scelta di modelli, rivestimenti e accessori. Ideali per abitazioni private, terrazze panoramiche e spazi hospitality.",
  },
  {
    num: "02",
    title: "Pergole Bioclimatiche",
    desc: "Strutture moderne pensate per vivere al meglio gli spazi outdoor in ogni stagione. Le lame orientabili regolano luce e ventilazione naturale, trasformando terrazze, giardini e dehors in ambienti confortevoli e protetti.",
    detail:
      "Disponibili con illuminazione integrata, chiusure laterali, tende zip e sensori automatici. Design essenziale e massima personalizzazione.",
  },
  {
    num: "03",
    title: "Vetrate Panoramiche",
    desc: "Trasparenza, protezione e continuità visiva tra interno ed esterno. Le vetrate panoramiche valorizzano terrazze, pergole e verande, offrendo comfort e luminosità senza appesantire l’architettura.",
    detail:
      "Sistemi scorrevoli o impacchettabili, profili minimali e vetri di sicurezza. Ideali per chiudere spazi outdoor mantenendo vista e leggerezza.",
  },
];

const plus = [
  {
    title: "Comfort tutto l’anno",
    desc: "Soluzioni progettate per vivere gli spazi esterni in ogni stagione, con protezione, ventilazione e massima fruibilità.",
  },
  {
    title: "Estetica coordinata",
    desc: "Ogni elemento viene scelto per dialogare con l’architettura della casa e con i materiali già presenti.",
  },
  {
    title: "Progettazione su misura",
    desc: "Ogni intervento viene valutato in base allo spazio disponibile, all’esposizione e alle esigenze concrete del cliente.",
  },
  {
    title: "Installazione qualificata",
    desc: "Seguiamo il progetto dalla consulenza iniziale fino alla posa finale, con attenzione ai dettagli e finiture curate.",
  },
  {
    title: "Materiali selezionati",
    desc: "Lavoriamo solo con soluzioni affidabili, durevoli e adatte a un utilizzo reale nel tempo.",
  },
  {
    title: "Valore per la casa",
    desc: "Pergole, vetrate e aree benessere aumentano la qualità della vita e valorizzano l’immobile.",
  },
];

export default function BenessereOutdoorPage() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    let lenis: Lenis | null = null;

    if (!isMobile) {
      lenis = new Lenis({ duration: 1.2, smoothWheel: true });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => lenis?.destroy();
  }, []);

  return (
    <main className="flex flex-col text-[#0A0A0A] selection:bg-black selection:text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[100svh] md:h-screen overflow-hidden">
        <img
          src="/outdoor.png"
          className="w-full h-full object-cover"
          alt="Benessere & Outdoor"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-14 md:pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-gray-400 mb-4 md:mb-5">
              Benessere & Outdoor · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Benessere
              <br />
              <span className="text-white/70">& Outdoor</span>
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-xl md:max-w-2xl leading-relaxed">
              Piscine idromassaggio, pergole bioclimatiche e vetrate panoramiche
              per vivere gli spazi esterni con comfort, design e funzionalità
              in ogni stagione.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="relative z-20 bg-[#F5F5F5]">
        {/* INTRO */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif leading-tight tracking-tight">
                  Spazi da vivere,
                  <br />
                  non solo da arredare
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-6 md:mt-8 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  Il benessere domestico passa anche da ciò che accade fuori:
                  una terrazza protetta, una zona relax in giardino, una veranda
                  luminosa da vivere ogni giorno. Con le nostre soluzioni outdoor
                  trasformiamo gli spazi esterni in ambienti funzionali,
                  raffinati e accoglienti.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-4 md:mt-5 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  Dalla consulenza iniziale alla posa finale, seguiamo ogni progetto
                  con attenzione sartoriale. Selezioniamo sistemi affidabili,
                  curiamo l’integrazione con l’architettura esistente e lavoriamo
                  per ottenere un risultato coerente, durevole e di forte impatto estetico.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <ImgBox className="w-full h-[280px] sm:h-[360px] md:h-[500px] rounded-2xl" />
            </FadeIn>
          </div>
        </section>

        {/* SOLUZIONI */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-14 md:mb-24 tracking-tight">
                Le nostre soluzioni
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {soluzioni.map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-0 border-t border-black/10 py-10 md:py-16 items-center">
                    <div className={i % 2 === 0 ? "md:pr-20" : "md:order-2 md:pl-20"}>
                      <span className="text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-gray-400">
                        {s.num}
                      </span>
                      <h3 className="mt-3 text-2xl md:text-3xl font-serif tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-4 md:mt-5 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                        {s.desc}
                      </p>
                      <p className="mt-3 md:mt-4 text-gray-500 text-sm font-light leading-relaxed">
                        {s.detail}
                      </p>
                    </div>

                    <div className={i % 2 === 0 ? "" : "md:order-1"}>
                      <ImgBox className="w-full h-[240px] sm:h-[280px] md:h-[340px] rounded-2xl" />
                    </div>
                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-black/10"></div>
            </div>
          </div>
        </section>

        {/* PLUS */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">
                Perché scegliere Benessere & Outdoor
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-500 font-light max-w-lg mb-12 md:mb-20 text-sm md:text-base leading-relaxed">
                Un approccio progettuale che mette insieme funzionalità, comfort
                e coerenza estetica, per valorizzare davvero gli spazi esterni.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {plus.map((p, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group border border-black/10 p-6 md:p-8 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1">
                    <div className="h-[1px] w-8 bg-black mb-5 md:mb-6 transition-all duration-700 group-hover:w-16"></div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 md:mt-4 text-gray-600 text-sm font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-14 md:mb-24">
                Come lavoriamo
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
              {[
                {
                  step: "01",
                  title: "Sopralluogo",
                  desc: "Analizziamo lo spazio, l’esposizione e le esigenze funzionali per individuare la soluzione più adatta.",
                },
                {
                  step: "02",
                  title: "Progetto",
                  desc: "Definiamo configurazione, dimensioni, materiali e integrazione estetica con l’architettura esistente.",
                },
                {
                  step: "03",
                  title: "Selezione",
                  desc: "Ti guidiamo nella scelta di modelli, finiture e optional per ottenere un risultato coerente e personalizzato.",
                },
                {
                  step: "04",
                  title: "Installazione",
                  desc: "Coordiniamo la posa e la messa in opera con attenzione ai dettagli, alle finiture e alla piena funzionalità.",
                },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="text-center max-w-sm mx-auto">
                    <div className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 text-sm font-light tracking-widest text-gray-500">
                      {p.step}
                    </div>
                    <h3 className="text-base md:text-lg font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 md:mt-4 text-gray-600 text-sm font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERIA */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-14 md:mb-20">
                Alcuni progetti
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Area relax outdoor",
                  desc: "Pergola bioclimatica con chiusure laterali",
                },
                {
                  title: "Spa privata",
                  desc: "Piscina idromassaggio in terrazza panoramica",
                },
                {
                  title: "Veranda luminosa",
                  desc: "Vetrate panoramiche per outdoor living",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="relative h-[300px] md:h-[380px] overflow-hidden rounded-xl group cursor-pointer">
                    <div className="w-full h-full bg-neutral-300 transition duration-[1400ms] ease-out md:group-hover:scale-110 md:group-hover:-translate-y-2">
                      <ImgBox className="w-full h-full" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 md:opacity-70 md:group-hover:opacity-90 transition duration-700"></div>
                    <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white">
                      <h3 className="text-xl font-serif translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition duration-700 ease-out">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-200 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition duration-700 delay-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0A0A0A] text-white py-24 md:py-44 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif">
              Progettiamo il tuo spazio outdoor
            </h2>
            <p className="mt-4 md:mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed text-sm md:text-base">
              Raccontaci il tuo progetto: troviamo insieme la soluzione migliore
              per trasformare i tuoi esterni in uno spazio di benessere e design.
            </p>
            <div className="mt-8 md:mt-10">
              <MagneticButton>
                <Link
                  href="/contatti"
                  className="relative inline-block overflow-hidden px-8 md:px-10 py-3.5 md:py-4 border border-white group"
                >
                  <span className="relative z-10 transition duration-500 group-hover:tracking-wide">
                    Richiedi una consulenza
                  </span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                    Richiedi una consulenza
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