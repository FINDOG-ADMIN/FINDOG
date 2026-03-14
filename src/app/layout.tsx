import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { localeFromCountry } from "@/i18n/detect";
import { I18nProvider } from "@/i18n/I18nProvider";
import AppShell from "@/components/AppShell";

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
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <I18nProvider initialLocaleFromCountry={initialLocaleFromCountry}>
          <AppShell>{children}</AppShell>
        </I18nProvider>
      </body>
    </html>
  );
}
