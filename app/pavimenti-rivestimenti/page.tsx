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

const tipologie = [
  {
    num: "01",
    title: "Parquet e Pavimenti in Legno",
    desc: "Il parquet porta calore, eleganza e naturalezza in ogni ambiente. Lavoriamo con essenze certificate — rovere, noce, castagno — in posa tradizionale, a spina di pesce o a correre, per un risultato sempre unico.",
    detail: "Disponibile in versione massello, multistrato o flottante. Finiture oliate, verniciate o spazzolate. Possibilità di restauro e levigatura di parquet esistenti.",
  },
  {
    num: "02",
    title: "Rivestimenti Resinati",
    desc: "La resina trasforma pareti e pavimenti in superfici continue, senza fughe, eleganti e modernissime. Ideale per bagni, cucine e living contemporanei che richiedono pulizia estetica e facilità di manutenzione.",
    detail: "Microcemento e resina epossidica in infinite tonalità. Effetto satinato, lucido o mat. Resistenza all'acqua, alle macchie e all'abrasione certificata.",
  },
  {
    num: "03",
    title: "Erba Sintetica",
    desc: "Per terrazze, giardini, bordi piscina e aree esterne: erba sintetica di ultima generazione con aspetto naturale, resistente ai raggi UV e alle intemperie. Zero manutenzione, massima resa estetica tutto l'anno.",
    detail: "Altezza pelo da 20 a 45 mm. Drenaggio integrato per aree esterne. Certificata per uso intensivo, adatta ad ambienti residenziali e commerciali.",
  },
];

const finiture = [
  { name: "Rovere Naturale", desc: "Il classico del parquet italiano. Caldo, nobile, versatile in ogni ambiente." },
  { name: "Rovere Spazzolato", desc: "Lavorazione a mano che esalta la venatura. Effetto vissuto e contemporaneo al tempo stesso." },
  { name: "Noce Scuro", desc: "Intenso e prezioso. Ideale per ambienti di rappresentanza e soggiorni di pregio." },
  { name: "Castagno Rustico", desc: "Carattere autentico con nodi e venature irregolari. Perfetto per stili country e tradizionali." },
  { name: "Resina Cemento", desc: "Superficie continua effetto industrial o contemporaneo. Disponibile in grigio, beige, bianco e colori custom." },
  { name: "Resina Lucida", desc: "Alta brillantezza per ambienti moderni. Riflette la luce e amplifica la percezione dello spazio." },
];

export default function PavimentiRivestimentiPage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="flex flex-col text-[#0A0A0A] selection:bg-black selection:text-white">

      <Navbar />

      {/* PAGE HERO */}
      <section className="relative h-screen overflow-hidden">

        {/*
          IMMAGINE HERO PAVIMENTI
          → Sostituire questo <div> con:
          <img src="/images/pavimenti-hero.jpg" className="w-full h-full object-cover" alt="Pavimenti e rivestimenti" />
        */}
        <img
  src="/pavimentipage.png"
  className="w-full h-full object-cover"
  alt="Pavimenti e rivestimenti"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              Pavimenti · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Pavimenti e
              <br />
              <span className="text-white/70">Rivestimenti</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-2xl leading-relaxed">
              Parquet in legno naturale, rivestimenti resinati ed erba sintetica:
              soluzioni di qualità per trasformare ogni superficie in un elemento
              di design e comfort.
            </p>
          </FadeIn>
        </div>

      </section>

      {/* CONTENUTO */}
      <div className="relative z-20 bg-[#F5F5F5]">

        {/* INTRO */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            <FadeIn>
              {/*
                → Sostituire con:
                <img src="/images/pavimenti-intro.jpg" className="w-full h-[500px] object-cover rounded-2xl" alt="Parquet in legno" />
              */}
              <img
  src="/pavimentipage2.png"
  className="w-full aspect-[16/9] object-cover rounded-2xl"
  alt="Parquet in legno"
/>
            </FadeIn>

            <div>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight tracking-tight">
                  Il pavimento giusto
                  <br />cambia tutto
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-gray-600 font-light leading-relaxed text-base">
                  Il pavimento è la quinta parete di ogni ambiente: definisce il tono,
                  la temperatura visiva e il carattere di uno spazio. Lavoriamo con
                  materiali selezionati — legno naturale, resina, erba sintetica —
                  per offrire soluzioni di qualità su misura per ogni progetto.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-5 text-gray-600 font-light leading-relaxed text-base">
                  Dalla posa del parquet in rovere alla stesura di microcemento resinato,
                  il nostro team si occupa di tutto: sopralluogo, preparazione del fondo,
                  installazione e finitura. Operiamo in tutta la provincia di Oristano
                  e la Sardegna.
                </p>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* TIPOLOGIE */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif mb-24 tracking-tight">
                Le nostre soluzioni
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {tipologie.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-2 gap-0 border-t border-black/10 py-16 items-center">

                    <div className={i % 2 === 0 ? "md:pr-20" : "md:order-2 md:pl-20"}>
                      <span className="text-xs tracking-[0.3em] uppercase text-gray-400">{t.num}</span>
                      <h3 className="mt-3 text-3xl font-serif tracking-tight">{t.title}</h3>
                      <p className="mt-5 text-gray-600 font-light leading-relaxed">{t.desc}</p>
                      <p className="mt-4 text-gray-500 text-sm font-light leading-relaxed">{t.detail}</p>
                    </div>

                    <div className={i % 2 === 0 ? "" : "md:order-1"}>
                      {/*
                        → Sostituire con:
                        <img src={`/images/pavimento-${t.num}.jpg`} className="w-full h-[340px] object-cover rounded-2xl" alt={t.title} />
                      */}
                      <img
  src={`/pavimentipage${i + 3}.png`}
  className="w-full h-[340px] object-cover rounded-2xl"
  alt={t.title}
/>
                    </div>

                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-black/10"></div>
            </div>

          </div>
        </section>

        {/* FINITURE */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif mb-4 tracking-tight">
                Finiture e Colori
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-500 font-light max-w-lg mb-20">
                Un'ampia gamma di superfici e finiture per adattarsi a ogni stile
                e a ogni progetto d'interni.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {finiture.map((f, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group border border-black/10 p-8 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1">
                    <div className="h-[1px] w-8 bg-black mb-6 transition-all duration-700 group-hover:w-16"></div>
                    <h3 className="text-xl font-medium tracking-tight">{f.name}</h3>
                    <p className="mt-4 text-gray-600 text-sm font-light leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        {/* PROCESSO */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif text-center mb-24">
                Come lavoriamo
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Sopralluogo", desc: "Valutiamo lo stato del fondo, le condizioni ambientali e le esigenze estetiche per scegliere il materiale più adatto." },
                { step: "02", title: "Preventivo", desc: "Forniamo un preventivo dettagliato con costi di materiale, manodopera e tempi di esecuzione senza sorprese." },
                { step: "03", title: "Preparazione", desc: "Prepariamo il sottofondo con cura: livellamento, impermeabilizzazione e primer per garantire una posa duratura." },
                { step: "04", title: "Posa e Finitura", desc: "Eseguiamo la posa con precisione artigianale e applichiamo la finitura scelta, con assistenza post-lavoro garantita." },
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

        {/* GALLERIA */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">

            <FadeIn>
              <h2 className="text-4xl font-serif mb-20">Alcuni lavori</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Parquet in rovere a spina di pesce", desc: "Soggiorno, villa privata Oristano" },
                { title: "Rivestimento resinato grigio", desc: "Bagno e cucina, appartamento Cagliari" },
                { title: "Parquet naturale oliato", desc: "Camera da letto, ristrutturazione Sardegna" },
                { title: "Erba sintetica per terrazza", desc: "Terrazza privata, Costa Sarda" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.15}>
                  <div className="relative h-[420px] overflow-hidden rounded-xl group cursor-pointer">
                    {/*
                      → Sostituire con:
                      <img src={`/images/pavimenti-lavoro-${i+1}.jpg`} className="w-full h-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:-translate-y-2" alt={item.title} />
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

        {/* CTA */}
        <section className="bg-[#0A0A0A] text-white py-44 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
          <FadeIn>
            <h2 className="text-4xl font-serif">Trasformiamo i tuoi spazi</h2>
            <p className="mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed">
              Sopralluogo gratuito e preventivo senza impegno.
              Possiamo in tutta la Sardegna.
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
