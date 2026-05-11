import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        <div>
          <h3 className="text-2xl font-serif">SP.AR. Tecnoinfissi</h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Infissi, porte e arredi su misura in Sardegna.
            Qualità artigianale e design contemporaneo dal laboratorio di Santu Lussurgiu.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/SP.AR.Tecnoinfissi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition text-xs tracking-widest uppercase"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sp.ar.tecnoinfissi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition text-xs tracking-widest uppercase"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/393514708713"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition text-xs tracking-widest uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Prodotti</h4>
          <ul className="space-y-3 text-gray-300 text-sm font-light">
            <li><Link href="/infissi" className="hover:text-white transition">Infissi in legno</Link></li>
            <li><Link href="/porte" className="hover:text-white transition">Porte da interni</Link></li>
            <li><Link href="/arredi" className="hover:text-white transition">Arredi su misura</Link></li>
            <li><Link href="/pavimenti-rivestimenti" className="hover:text-white transition">Pavimenti e rivestimenti</Link></li>
            <li><Link href="/scale-legno" className="hover:text-white transition">Scale in legno</Link></li>
          </ul>
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4 mt-8">Azienda</h4>
          <ul className="space-y-3 text-gray-300 text-sm font-light">
            <li><Link href="/chi-siamo" className="hover:text-white transition">Chi siamo</Link></li>
            <li><Link href="/contatti" className="hover:text-white transition">Contatti</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Contatti</h4>
          <ul className="space-y-4 text-gray-300 text-sm font-light">
            <li>
              <span className="block text-xs text-gray-500 mb-1">Indirizzo</span>
              <a
                href="https://maps.google.com/?q=Via+Ziu+Frasu+21+Santu+Lussurgiu+OR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Via Ziu Frasu 21, 09075 Santu Lussurgiu (OR)
              </a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 mb-1">Telefono</span>
              <a href="tel:+393514708713" className="hover:text-white transition">+39 351 470 8713</a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 mb-1">Email</span>
              <a href="mailto:spartecnoinfissisnc@gmail.com" className="hover:text-white transition break-all">
                spartecnoinfissisnc@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-xs text-gray-500 mb-1">Orari</span>
              <span className="text-gray-400 leading-relaxed">
                Lun–Ven 07:00–13:00 / 15:30–18:30<br />
                Sabato 07:00–13:00
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-xs tracking-wide">
        © {new Date().getFullYear()} SP.AR. Tecnoinfissi — Tutti i diritti riservati
      </div>
    </footer>
  );
}
