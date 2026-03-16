import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { localeFromCountry } from "@/i18n/detect";
import { I18nProvider } from "@/i18n/I18nProvider";
import AppShell from "@/components/AppShell";
import Header from "@/components/Header";

export const runtime = 'edge';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FINDOG.NET",
  description: "Filtering Inbound Data & Observation Gate.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const country = hdrs.get("cf-ipcountry");
  const initialLocaleFromCountry = localeFromCountry(country);

  return (
    /* ИЗМЕНЕНИЕ: bg-white вместо bg-black */
    <html lang="en" className="bg-white scroll-smooth">
      {/* ИЗМЕНЕНИЕ: bg-white и text-black для всей системы */}
      <body className={`${inter.variable} antialiased bg-white text-black min-h-screen font-sans`}>
        <I18nProvider initialLocaleFromCountry={initialLocaleFromCountry}>
          <Header /> 
          <AppShell>
            {children}
          </AppShell>
        </I18nProvider>
      </body>
    </html>
  );
}