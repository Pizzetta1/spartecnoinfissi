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
    title: "Scale a Giorno",
    desc: "Struttura aperta, gradini a sbalzo e ringhiere di design: la scala a giorno è un elemento architettonico che definisce lo spazio e porta luce in verticale. Realizziamo sia strutture in legno massello che ibride legno-acciaio.",
    detail: "Gradini in rovere, noce o castagno con spessori da 60 a 100 mm. Ringhiere in acciaio inox, ferro verniciato o legno. Disponibili con o senza alzate.",
  },
  {
    num: "02",
    title: "Scale a Chiocciola",
    desc: "Eleganza e risparmio di spazio: la scala a chiocciola è la soluzione ideale per soppalchi, accessi a terrazze o per connettere livelli in spazi ridotti. Struttura in legno massello su palo centrale in acciaio.",
    detail: "Diametri da 120 a 200 cm. Palo centrale in acciaio inox o verniciato. Gradini e ringhiera in legno massello nelle essenze richieste.",
  },
  {
    num: "03",
    title: "Scale con Struttura Tradizionale",
    desc: "La scala classica con alzate chiuse, parapetto pieno e corrimano in legno sagomato: robusta, sicura e dal carattere senza tempo. Perfetta per abitazioni tradizionali o ristrutturazioni che vogliono valorizzare l'architettura storica.",
    detail: "Struttura portante in legno lamellare o massello. Pedate e alzate in essenza a scelta. Parapetto con balaustrini torniti o moderni. Personalizzabile in ogni dettaglio.",
  },
  {
    num: "04",
    title: "Scale Esterne e da Giardino",
    desc: "Per terrazze, giardini e accessi esterni: scale in legno trattato per resistere all'umidità, ai raggi UV e alle variazioni termiche. Robuste e sicure, mantengono la bellezza naturale del legno nel tempo.",
    detail: "Legni certificati per uso esterno: castagno, iroko, teak o larice. Trattamenti protettivi idrorepellenti e anti-UV. Disponibili con corrimano integrato.",
  },
];

const finiture = [
  { name: "Rovere Naturale", desc: "Elegante e nobile. Il materiale più richiesto per scale di pregio in ambienti moderni e contemporanei." },
  { name: "Noce Americano", desc: "Colore caldo e scuro, venatura morbida. Perfetto per scale di rappresentanza." },
  { name: "Castagno Sardo", desc: "Essenza locale robusta e caratteristica. Ideale per contesti rustici e ristrutturazioni." },
  { name: "Abete Lamellare", desc: "Leggerezza e resistenza per strutture di grande formato. Tono chiaro e aspetto naturale." },
  { name: "Rovere Termo", desc: "Trattato termicamente per maggiore durabilità. Colore scuro e aspetto contemporaneo." },
  { name: "Legno + Acciaio", desc: "Combinazione ibrida per un risultato industriale e moderno. Gradini in legno su struttura portante in acciaio." },
];

export default function ScaleLegnoPage() {
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
          src="/scalepage.png"
          className="w-full h-full object-cover"
          alt="Scale in legno su misura"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-14 md:pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-gray-400 mb-4 md:mb-5">
              Scale · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Scale in Legno
              <br />
              <span className="text-white/70">su Misura</span>
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-xl md:max-w-2xl leading-relaxed">
              Soluzioni personalizzate per ogni ambiente: scale a giorno, a chiocciola,
              tradizionali ed esterne. Ogni scala è un progetto architettonico
              realizzato con artigianalità sarda.
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
                <h2 className="text-3xl md:text-5xl font-serif leading-tight tracking-tight">
                  Una scala non è
                  <br />solo un collegamento
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-6 md:mt-8 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  La scala è spesso il centro visivo di un'abitazione: percorre verticalmente
                  lo spazio e ne determina il carattere. Per questo ogni nostra scala
                  viene progettata come un elemento architettonico, non come un accessorio.
                  Dal disegno alla posa, tutto avviene nel nostro laboratorio.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-4 md:mt-5 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  Lavoriamo con essenze pregiate in legno massello, strutture ibride
                  legno-acciaio e soluzioni per interni ed esterni. Ogni scala è unica,
                  progettata sulle misure dell'ambiente e sulle preferenze estetiche del cliente.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <img
                src="/scalepage2.png"
                className="w-full h-[280px] sm:h-[360px] md:aspect-[16/9] md:h-auto object-cover rounded-2xl"
                alt="Scala in legno su misura"
              />
            </FadeIn>
          </div>
        </section>

        {/* TIPOLOGIE */}
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-14 md:mb-24 tracking-tight">
                Tipologie di Scale
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {tipologie.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-0 border-t border-black/10 py-10 md:py-16 items-center">
                    <div className={i % 2 === 0 ? "md:pr-20" : "md:order-2 md:pl-20"}>
                      <span className="text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-gray-400">
                        {t.num}
                      </span>
                      <h3 className="mt-3 text-2xl md:text-3xl font-serif tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-4 md:mt-5 text-gray-600 font-light leading-relaxed text-sm md:text-base">
                        {t.desc}
                      </p>
                      <p className="mt-3 md:mt-4 text-gray-500 text-sm font-light leading-relaxed">
                        {t.detail}
                      </p>
                    </div>

                    <div className={i % 2 === 0 ? "" : "md:order-1"}>
                      <img
                        src={`/scalepage${i + 3}.png`}
                        className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover rounded-2xl"
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
        <section className="py-20 md:py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">
                Essenze e Strutture
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-gray-500 font-light max-w-lg mb-12 md:mb-20 text-sm md:text-base leading-relaxed">
                La scelta del legno e della struttura portante determina l'estetica
                e la durabilità della scala nel tempo. Ecco le soluzioni più richieste.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {finiture.map((f, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group border border-black/10 p-6 md:p-8 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1">
                    <div className="h-[1px] w-8 bg-black mb-5 md:mb-6 transition-all duration-700 group-hover:w-16"></div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight">{f.name}</h3>
                    <p className="mt-3 md:mt-4 text-gray-600 text-sm font-light leading-relaxed">{f.desc}</p>
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
                { step: "01", title: "Rilievo", desc: "Misuriamo con precisione il vano scala, le altezze di piano e le condizioni strutturali per progettare la soluzione ideale." },
                { step: "02", title: "Progetto", desc: "Realizziamo il progetto tecnico con calcolo delle alzate, pedate e ringhiere, e un render visivo per la tua approvazione." },
                { step: "03", title: "Produzione", desc: "Ogni componente — struttura, gradini, ringhiere — è lavorato nel nostro laboratorio con macchine CNC e finitura a mano." },
                { step: "04", title: "Montaggio", desc: "Montiamo in opera con cura, garantendo stabilità strutturale e finitura impeccabile. Assistenza post-installazione inclusa." },
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
                { title: "Scala a giorno in rovere e acciaio", desc: "Villa moderna, Oristano" },
                { title: "Scala a chiocciola", desc: "Soppalco, appartamento Cagliari" },
                { title: "Scala tradizionale in castagno", desc: "Casa storica, Santu Lussurgiu" },
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
            <h2 className="text-3xl md:text-4xl font-serif">Progettiamo la tua scala</h2>
            <p className="mt-4 md:mt-6 text-gray-400 font-light max-w-md mx-auto leading-relaxed text-sm md:text-base">
              Rilievo gratuito e preventivo su misura. Realizziamo e installiamo
              scale in tutta la Sardegna.
            </p>
            <div className="mt-8 md:mt-10">
              <MagneticButton>
                <Link href="/contatti" className="relative inline-block overflow-hidden px-8 md:px-10 py-3.5 md:py-4 border border-white group">
                  <span className="relative z-10 transition duration-500 group-hover:tracking-wide">
                    Richiedi un preventivo
                  </span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                    Richiedi un preventivo
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