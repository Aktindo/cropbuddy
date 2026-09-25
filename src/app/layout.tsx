import type { Metadata } from "next";
import { Montserrat, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CropBuddy — Predict Crop Diseases Before They Strike",
  description:
    "An edge-native, offline-first predictive crop health engine for Indian smallholder farmers. INT8 vision transformers, no internet required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased bg-slate-950 text-slate-200">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
