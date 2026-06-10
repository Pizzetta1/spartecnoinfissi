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

const categorie = [
  {
    num: "01",
    title: "Cucine su Misura",
    desc: "Ogni cucina nasce da un progetto unico: ascoltiamo le tue abitudini, misuriamo gli spazi e progettiamo una soluzione che unisce funzionalità e bellezza. Legno massello, laccato o impiallacciato, nelle finiture che preferisci.",
    detail: "Piani in legno massiccio, pietra o laminato. Top con lavello integrato, colonne frigo e pensili su disegno. Completa personalizzazione di colori e maniglie.",
  },
  {
    num: "02",
    title: "Zona Notte",
    desc: "Letti, comodini, cabine armadio e cassettiere realizzati su misura per sfruttare ogni centimetro dello spazio. Il legno porta calore e naturalezza nella stanza più intima della casa.",
    detail: "Cabine armadio con anta battente, scorrevole o open space. Testate letto in legno massello o imbottite. Cassettiere e complementi coordinati.",
  },
  {
    num: "03",
    title: "Living e Soggiorni",
    desc: "Librerie, pareti attrezzate, mappe TV e consolle per arredare il salotto con personalità. Ogni elemento è progettato in armonia con l'architettura dello spazio e le tue esigenze.",
    detail: "Pareti attrezzate con vano camino o illuminazione integrata. Librerie a tutta altezza con scala scorrevole. Mappe TV con passacavi nascosti.",
  },
  {
    num: "04",
    title: "Bagni e Complementi",
    desc: "Mobili bagno, specchiere e complementi in legno che portano raffinatezza in ogni ambiente. Materiali trattati per resistere all'umidità senza perdere il carattere del legno naturale.",
    detail: "Basi sospese e a terra in legno idrorepellente. Top con lavabo integrato in ceramica o pietra. Specchiere con illuminazione LED su misura.",
  },
];

const materiali = [
  { name: "Rovere Naturale", desc: "Venatura pronunciata e tonalità calde. Il materiale più richiesto per arredi di pregio, elegante in ogni ambiente." },
  { name: "Noce Canaletto", desc: "Colore intenso e venatura scura. Sinonimo di lusso e raffinatezza senza tempo." },
  { name: "Laccato Opaco", desc: "Superficie uniforme e contemporanea. Disponibile in tutte le tonalità RAL per abbinarsi a qualsiasi palette." },
  { name: "Castagno Sardo", desc: "Essenza locale dalle venature caratteristiche. Rustico e autentico, perfetto per ambienti caldi e tradizionali." },
  { name: "Frassino Termo", desc: "Legno trattato termicamente per maggiore stabilità e resistenza. Tono scuro e aspetto contemporaneo." },
  { name: "Laminato Premium", desc: "Superfici moderne con effetto legno, pietra o tinta unita. Resistenti e facili da mantenere." },
];

export default function ArrediPage() {
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

      {/* PAGE HERO */}
      <section className="relative h-[100svh] md:h-screen overflow-hidden">
        <img
          src="/arredipage.png"
          className="w-full h-full object-cover"
          alt="Arredi su misura"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-14 md:pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-gray-400 mb-4 md:mb-5">
              Arredamenti · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Arredi su Misura
              <br />
              <span className="text-white/70">per ogni ambiente</span>
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-xl md:max-w-2xl leading-relaxed">
              Cucine, zone notte, living e complementi progettati e realizzati
              nel nostro laboratorio di Santu Lussurgiu. Ogni pezzo adattato
              perfettamente al tuo spazio e alla tua vita.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTENUTO */}
      <div className="relative z-20 bg-[#F5F5F5]">
        {/* INTRO */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif leading-tight tracking-tight max-w-xl">
                  Il legno che si adatta
                  <br />alla tua casa
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-6 md:mt-8 text-gray-600 font-light leading-relaxed text-sm md:text-base max-w-xl">
                  Realizziamo arredi su misura per ogni stanza: cucine, camere da letto, soggiorni
                  e bagni. Ogni progetto parte dall'ascolto del cliente e dalla misurazione
                  degli spazi — nulla è standardizzato, tutto è pensato per te.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-4 md:mt-5 text-gray-600 font-light leading-relaxed text-sm md:text-base max-w-xl">
                  Il nostro laboratorio a Santu Lussurgiu produce internamente ogni componente,
                  dalla struttura alla finitura. Utilizziamo essenze pregiate certificate e
                  vernici atossiche, per arredi belli e sicuri che durano nel tempo.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <img
                src="/arredipage2.png"
                className="w-full h-[250px] sm:h-[320px] md:aspect-[16/9] md:h-auto object-cover rounded-2xl"
                alt="Arredo su misura"
              />
            </FadeIn>
          </div>
        </section>

        {/* CATEGORIE */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-14 md:mb-24 tracking-tight">
                Le nostre categorie
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {categorie.map((c, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-0 border-t border-black/10 py-10 md:py-16 items-center">
                    <div className={i % 2 === 0 ? "md:pr-20" : "md:order-2 md:pl-20"}>
                      <span className="text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-gray-400">
                        {c.num}
                      </span>
                      <h3 className="mt-3 text-2xl md:text-3xl font-serif tracking-tight">
                        {c.title}
                      </h3>
                      <p className="mt-4 md:mt-5 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                        {c.desc}
                      </p>
                      <p className="mt-3 md:mt-4 text-gray-500 text-sm font-light leading-relaxed">
                        {c.detail}
                      </p>
                    </div>

                    <div className={i % 2 === 0 ? "" : "md:order-1"}>
                      <img
                        src={`/arredipage${i + 3}.png`}
                        className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover rounded-2xl"
                        alt={c.title}
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-black/10"></div>
            </div>
          </div>
        </section>

        {/* MATERIALI */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">
                Materiali e Finiture
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-500 font-light max-w-lg mb-12 md:mb-20 text-sm md:text-base leading-relaxed">
                La qualità di un arredo parte dalla scelta del materiale giusto.
                Lavoriamo con le migliori essenze e finiture, selezionate per durabilità ed estetica.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-5 md:gap-8">
              {materiali.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group border border-black/10 p-6 md:p-8 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1">
                    <div className="h-[1px] w-8 bg-black mb-5 md:mb-6 transition-all duration-700 group-hover:w-16"></div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight">{m.name}</h3>
                    <p className="mt-3 md:mt-4 text-gray-600 text-sm font-light leading-relaxed">{m.desc}</p>
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
                { step: "01", title: "Sopralluogo", desc: "Veniamo a casa tua per misurare gli spazi, capire le tue esigenze e valutare le soluzioni più adatte all'ambiente." },
                { step: "02", title: "Progetto 3D", desc: "Sviluppiamo un progetto dettagliato con rendering che ti permette di visualizzare il risultato finale prima di iniziare." },
                { step: "03", title: "Produzione", desc: "Ogni componente è realizzato nel nostro laboratorio con macchine di precisione CNC e lavorazioni artigianali a mano." },
                { step: "04", title: "Montaggio", desc: "Il nostro team si occupa del montaggio in opera e della sistemazione finale, con garanzia su tutti i lavori eseguiti." },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="text-center max-w-sm mx-auto">
                    <div className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 text-sm font-light tracking-widest text-gray-500">
                      {p.step}
                    </div>
                    <h3 className="text-base md:text-lg font-medium tracking-tight">{p.title}</h3>
                    <p className="mt-3 md:mt-4 text-gray-600 text-sm font-light leading-relaxed">{p.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-serif mb-14 md:mb-20">Alcuni lavori</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Cucina in rovere naturale", desc: "Abitazione privata, Oristano" },
                { title: "Cabina armadio su misura", desc: "Villa, Sardegna" },
                { title: "Living con libreria a tutta altezza", desc: "Appartamento, Santu Lussurgiu" },
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
            <h2 className="text-3xl md:text-4xl font-serif">Progettiamo insieme il tuo arredo</h2>
            <p className="mt-4 md:mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed text-sm md:text-base">
              Sopralluogo gratuito. Progettiamo, produciamo e montiamo
              i tuoi arredi su misura in tutta la Sardegna.
            </p>
            <div className="mt-8 md:mt-10">
              <MagneticButton>
                <Link href="/contatti" className="relative inline-block overflow-hidden px-8 md:px-10 py-3.5 md:py-4 border border-white group">
                  <span className="relative z-10 transition duration-500 group-hover:tracking-wide">
                    Richiedi un sopralluogo
                  </span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                    Richiedi un sopralluogo
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
