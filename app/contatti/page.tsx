"use client";

import { useEffect, useState, type FormEvent } from "react";
import Lenis from "lenis";
import Navbar from "../components/Navbar";
import FadeIn from "../components/FadeIn";
import MagneticButton from "../components/MagneticButton";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    servizio: "",
    messaggio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Richiesta da ${formData.nome} — ${formData.servizio || "Informazioni generali"}`
    );
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefono: ${formData.telefono}\nServizio: ${formData.servizio}\n\nMessaggio:\n${formData.messaggio}`
    );
    window.open(`mailto:spartecnoinfissisnc@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const inputCls =
    "w-full border-b border-black/20 bg-transparent py-3 text-[#0A0A0A] placeholder-gray-400 text-sm font-light outline-none focus:border-black/60 transition-colors duration-300";

  const labelCls = "block text-xs tracking-[0.2em] uppercase text-gray-500 mb-2";

  return (
    <main className="flex flex-col text-[#0A0A0A] selection:bg-black selection:text-white">

      <Navbar />

      {/* ════════════════════════════════════════
          PAGE HERO
      ════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">

        {/*
          IMMAGINE HERO CONTATTI
          → Sostituire questo <div> con:
          <img src="/images/contatti-hero.jpg" className="w-full h-full object-cover" alt="Contattaci" />
        */}
        <div className="w-full h-full bg-neutral-800"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7))]"></div>

        <div className="absolute inset-0 flex items-end pb-24 px-6 md:px-16 text-white">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">
              Parliamo insieme · SP.AR. Tecnoinfissi
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] tracking-[-0.02em]">
              Contattaci
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-300 font-light tracking-[0.02em] max-w-2xl leading-relaxed">
              Raccontaci il tuo progetto. Rispondiamo entro 24 ore per fissare
              una consulenza gratuita e senza impegno.
            </p>
          </FadeIn>
        </div>

      </section>

      {/* ════════════════════════════════════════
          CONTENUTO
      ════════════════════════════════════════ */}
      <div className="relative z-20 bg-[#F5F5F5]">

        {/* ── FORM + INFO ── */}
        <section className="py-44 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

            {/* INFO */}
            <div>
              <FadeIn>
                <h2 className="text-4xl font-serif mb-16 tracking-tight">
                  Siamo a Santu Lussurgiu
                </h2>
              </FadeIn>

              <div className="space-y-10">
                {[
                  {
                    label: "Indirizzo",
                    value: "Via Ziu Frasu 21, 09075 Santu Lussurgiu (OR), Sardegna",
                    href: "https://maps.google.com/?q=Via+Ziu+Frasu+21+Santu+Lussurgiu+OR",
                  },
                  {
                    label: "Telefono",
                    value: "+39 351 470 8713",
                    href: "tel:+393514708713",
                  },
                  {
                    label: "Email",
                    value: "spartecnoinfissisnc@gmail.com",
                    href: "mailto:spartecnoinfissisnc@gmail.com",
                  },
                  {
                    label: "WhatsApp",
                    value: "Scrivi su WhatsApp",
                    href: "https://wa.me/393514708713",
                  },
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="border-b border-black/10 pb-8">
                      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">{item.label}</p>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base font-light text-[#0A0A0A] hover:opacity-50 transition-opacity break-all"
                      >
                        {item.value}
                      </a>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.4}>
                <div className="mt-10 border-b border-black/10 pb-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2">Orari</p>
                  <p className="text-base font-light text-gray-600 leading-relaxed">
                    Lunedì – Venerdì: 08:00 – 13:30 / 15:00 – 18:00<br />
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* FORM */}
            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-16 h-16 border border-black/20 rounded-full flex items-center justify-center mb-8">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif mb-4">Messaggio inviato!</h3>
                  <p className="text-gray-500 font-light leading-relaxed max-w-sm">
                    Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nome: "", email: "", telefono: "", servizio: "", messaggio: "" });
                    }}
                    className="mt-10 text-sm underline text-gray-500 hover:text-black transition"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10" noValidate>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="nome" className={labelCls}>
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        required
                        placeholder="Mario Rossi"
                        className={inputCls}
                        value={formData.nome}
                        onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="mario@email.com"
                        className={inputCls}
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="telefono" className={labelCls}>
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        placeholder="+39 000 000 0000"
                        className={inputCls}
                        value={formData.telefono}
                        onChange={(e) => setFormData((p) => ({ ...p, telefono: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="servizio" className={labelCls}>
                        Sono interessato a
                      </label>
                      <select
                        id="servizio"
                        className={`${inputCls} cursor-pointer`}
                        value={formData.servizio}
                        onChange={(e) => setFormData((p) => ({ ...p, servizio: e.target.value }))}
                      >
                        <option value="">Seleziona...</option>
                        <option value="Infissi in legno">Infissi in legno</option>
                        <option value="Porte da interni">Porte da interni</option>
                        <option value="Arredi su misura">Arredi su misura</option>
                        <option value="Pavimenti e rivestimenti">Pavimenti e rivestimenti</option>
                        <option value="Scale in legno">Scale in legno</option>
                        <option value="Informazioni generali">Informazioni generali</option>
                        <option value="Porte da interni">Porte da interni</option>
                        <option value="Infissi + Porte">Infissi + Porte</option>
                        <option value="Informazioni generali">Informazioni generali</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className={labelCls}>
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      required
                      rows={5}
                      placeholder="Descrivici il tuo progetto: dimensioni, tipologia, eventuali esigenze particolari..."
                      className={`${inputCls} resize-none`}
                      value={formData.messaggio}
                      onChange={(e) => setFormData((p) => ({ ...p, messaggio: e.target.value }))}
                    />
                  </div>

                  <div>
                    <MagneticButton>
                      <button
                        type="submit"
                        className="relative overflow-hidden px-10 py-4 border border-black group"
                      >
                        <span className="relative z-10 text-sm transition duration-500 group-hover:tracking-wide group-hover:text-white">
                          Invia messaggio
                        </span>
                        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-700 ease-out"></span>
                      </button>
                    </MagneticButton>
                    <p className="mt-4 text-xs text-gray-400 font-light">
                      I tuoi dati non vengono ceduti a terzi. Inviando accetti la privacy policy.
                    </p>
                  </div>

                </form>
              )}
            </FadeIn>

          </div>
        </section>

        {/* ── QUICK ACTIONS ── */}
        <section className="py-32 px-6 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📞",
                  title: "Chiamaci",
                  desc: "Disponibili lunedì-sabato mattina",
                  href: "tel:+393514708713",
                  label: "+39 351 470 8713",
                },
                {
                  icon: "💬",
                  title: "WhatsApp",
                  desc: "Rispondiamo velocemente anche via chat",
                  href: "https://wa.me/393514708713",
                  label: "Scrivi ora",
                },
                {
                  icon: "📍",
                  title: "Vieni a trovarci",
                  desc: "Via Ziu Frasu 21, Santu Lussurgiu",
                  href: "https://maps.google.com/?q=Via+Ziu+Frasu+21+Santu+Lussurgiu+OR",
                  label: "Apri su Maps",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block border border-black/10 p-10 rounded-2xl bg-white/50 backdrop-blur-sm transition duration-500 hover:border-black/30 hover:-translate-y-1 text-center"
                  >
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-gray-500 text-sm font-light">{item.desc}</p>
                    <p className="mt-4 text-sm font-light">{item.label}</p>
                    <div className="mt-6 h-[1px] w-0 bg-black/80 mx-auto transition-all duration-700 ease-out group-hover:w-16"></div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </div>

    </main>
  );
}
