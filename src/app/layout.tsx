import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { localeFromCountry } from "@/i18n/detect";
import { I18nProvider } from "@/i18n/I18nProvider";
import AppShell from "@/components/AppShell";

export const runtime = "edge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FINDOG.NET",
  description: "10 seconds to bring a friend back home.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <I18nProvider initialLocaleFromCountry={initialLocaleFromCountry}>
          <AppShell>{children}</AppShell>
        </I18nProvider>
      </body>
    </html>
  );
}
