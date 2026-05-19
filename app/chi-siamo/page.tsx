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

const valori = [
  {
    title: "Artigianalità",
    desc: "Ogni manufatto nasce dalle mani di artigiani specializzati. Decenni di esperienza nella lavorazione del legno che nessuna macchina può sostituire.",
  },
  {
    title: "Precisione",
    desc: "Ogni millimetro conta. Le nostre attrezzature di ultima generazione ci permettono di lavorare con una precisione che fa la differenza nel risultato finale.",
  },
  {
    title: "Sostenibilità",
    desc: "Lavoriamo con legni certificati da foreste gestite responsabilmente e utilizziamo vernici e trattamenti a basso impatto ambientale.",
  },
  {
    title: "Fiducia",
    desc: "Il rapporto con il cliente non si esaurisce con la consegna. Siamo presenti prima, durante e dopo ogni progetto con assistenza diretta e personale.",
  },
];

export default function ChiSiamoPage() {
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
          IMMAGINE HERO CHI SIAMO
          → Sostituire questo <div> con:
          <img src="/images/chi-siamo-hero.jpg" className="w-full h-full object-cover" alt="Il team SP.AR. Tecnoinfissi" />
        */}
        <img
  src="/chisiamopage.png"
  className="w-full h-full object-cover"
  alt="Il team SP.AR. Tecnoinfissi"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              La nostra storia · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Tradizione artigianale
              <br />
              <span className="text-white/70">visione contemporanea</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-2xl leading-relaxed">
              Fondata da Spanu e Ardu a Santu Lussurgiu,
              dal 1970 : una storia di passione per il legno
              e per il lavoro ben fatto.
            </p>
          </FadeIn>
        </div>

      </section>

      {/* ════════════════════════════════════════
          CONTENUTO
      ════════════════════════════════════════ */}
      <div className="relative z-20 bg-[#F5F5F5]">

        {/* ── STORIA ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Chi siamo
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-8 text-gray-600 font-light leading-relaxed text-base">
                  SP.AR. Tecnoinfissi nasce nel 1970 a Santu Lussurgiu, nel cuore della Sardegna,
                  come espressione di una tradizione artigianale profondamente radicata nel territorio
                  sardo. L'azienda è fondata da due amici, imprenditori e artigiani uniti
                  dalla stessa visione: portare nella casa moderna la qualità e il calore del legno
                  lavorato a mano.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-5 text-gray-600 font-light leading-relaxed text-base">
                  Cresciuta nel tempo senza perdere la propria identità, oggi sono i figli dei fondatori 
                  a guidare l’azienda, che conta oltre 10 professionisti, portando avanti la tradizione 
                  con uno sguardo contemporaneo: un equilibrio tra esperienza e innovazione 
                  che definisce ogni lavoro.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-5 text-gray-600 font-light leading-relaxed text-base">
                  Il nostro punto di forza è la capacità di unire saperi antichi e tecnologie moderne:
                  utilizziamo macchinari di ultima generazione per le lavorazioni di precisione,
                  ma ogni finitura, ogni dettaglio, ogni installazione porta con sé la firma
                  inconfondibile dell'artigianato a misura d'uomo.
                </p>
              </FadeIn>
            </div>

            {/* IMMAGINE LABORATORIO */}
            <FadeIn delay={0.1}>
              {/*
                → Sostituire con:
                <img src="/images/laboratorio.jpg" className="w-full h-[600px] object-cover rounded-2xl" alt="Il nostro laboratorio" />
              */}
              <img
  src="/chisiamopage2.png"
  className="w-full aspect-[4/5] object-cover rounded-2xl"
  alt="Il nostro laboratorio"
/>
            </FadeIn>

          </div>
        </section>

        {/* ── NUMERI ── */}
        <section className="py-32 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { num: "50+", label: "Anni di attività" },
                { num: "10+", label: "Artigiani specializzati" },
                { num: "500+", label: "Progetti completati" },
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

        {/* ── VALORI ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif mb-24 tracking-tight">I nostri valori</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
              {valori.map((v, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="group border border-black/10 p-10 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1">
                    <h3 className="text-2xl font-medium tracking-tight">{v.title}</h3>
                    <p className="mt-5 text-gray-600 text-sm font-light leading-relaxed">{v.desc}</p>
                    <div className="mt-8 h-[1px] w-0 bg-black/80 transition-all duration-700 ease-out group-hover:w-full"></div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif mb-24 tracking-tight">Il team</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "Gianluca Spanu",
                  role: "Montatore e coordinatore cantieri",
                  desc: "Artigiano del legno con oltre vent'anni di esperienza. Coordina i cantieri di installazione in tutta la Sardegna.",
                },
                {
                  name: "Massimiliano Spanu",
                  role: "Progettista e responsabile tecnico",
                  desc: "Responsabile della qualità e dei rapporti con i clienti. Gestisce la progettazione e la produzione nel laboratorio di Santu Lussurgiu.",
                },
              ].map((person, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="flex gap-8 items-start">
                    {/*
                      → Sostituire con:
                      <img src={`/images/team-${i+1}.jpg`} className="w-28 h-28 rounded-full object-cover flex-shrink-0" alt={person.name} />
                    */}
                    <img
  src={`/chisiamopage${i + 3}.png`}
  className="w-28 h-28 rounded-full object-cover flex-shrink-0"
  alt={person.name}
/>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight">{person.name}</h3>
                      <p className="text-sm text-gray-500 tracking-widest uppercase mt-1">{person.role}</p>
                      <p className="mt-4 text-gray-600 text-sm font-light leading-relaxed">{person.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* ── DOVE SIAMO ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            <div>
              <FadeIn>
                <h2 className="text-4xl font-serif mb-8 tracking-tight">Dove siamo</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  Il nostro laboratorio e showroom si trova nella zona industriale di Santu Lussurgiu,
                  un borgo di grande tradizione artigianale nel cuore della Sardegna.
                  Siamo facilmente raggiungibili da tutta l'isola.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-4 text-gray-700 text-sm">
                  <div className="flex gap-4">
                    <span className="text-base">📍</span>
                    <span>Via Ziu Frasu 21, 09075 Santu Lussurgiu (OR)</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-base">📞</span>
                    <a href="tel:+393514708713" className="hover:underline">+39 351 470 8713</a>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-base">✉️</span>
                    <a href="mailto:spartecnoinfissisnc@gmail.com" className="hover:underline break-all">spartecnoinfissisnc@gmail.com</a>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <span className="text-base">🕐</span>
                    <span className="text-gray-500">
                      Lun–Ven 07:00–13:00 / 15:30–18:30<br />
                      Sabato 07:00–13:00
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* MAPPA PLACEHOLDER */}
            <FadeIn delay={0.1}>
              {/*
                → Sostituire con una mappa Google Maps embed o una foto del laboratorio:
                <iframe
                  src="https://maps.google.com/maps?q=Via+Ziu+Frasu+21,+Santu+Lussurgiu&output=embed"
                  className="w-full h-[400px] rounded-2xl border-0"
                />
              */}
              <div className="w-full h-[400px] rounded-2xl bg-neutral-200 flex flex-col items-center justify-center gap-3 text-neutral-400">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-xs uppercase tracking-widest">Mappa da inserire</span>
                <a
                  href="https://maps.google.com/?q=Via+Ziu+Frasu+21+Santu+Lussurgiu+OR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline text-neutral-500 hover:text-neutral-700 mt-1"
                >
                  Apri su Google Maps
                </a>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0A0A0A] text-white py-44 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
          <FadeIn>
            <h2 className="text-4xl font-serif">Parliamo del tuo progetto</h2>
            <p className="mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed">
              Siamo disponibili per una consulenza gratuita, in laboratorio
              o direttamente nel tuo cantiere.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link href="/contatti" className="relative inline-block overflow-hidden px-10 py-4 border border-white group">
                  <span className="relative z-10 transition duration-500 group-hover:tracking-wide">Contattaci</span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-500 z-10">Contattaci</span>
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </section>

      </div>

    </main>
  );
}
