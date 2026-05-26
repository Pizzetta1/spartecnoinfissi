import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "SP.AR. Tecnoinfissi — Infissi e Porte su Misura in Sardegna",
    template: "%s | SP.AR. Tecnoinfissi",
  },
  description:
    "Infissi in legno su misura e porte da interni artigianali. Precisione tecnica, materiali selezionati e design contemporaneo nella provincia di Oristano, Sardegna.",
  keywords: ["infissi in legno", "finestre su misura", "porte da interni", "falegnameria", "Oristano", "Sardegna", "Santu Lussurgiu"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#F5F5F5] text-[#0A0A0A] md:cursor-none">

        {/* LOADER */}
        <Loader />

        {/* CURSORE */}
        <div className="hidden md:block">
  <CustomCursor />
</div>

        {/* CONTENUTO */}
        {children}

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
