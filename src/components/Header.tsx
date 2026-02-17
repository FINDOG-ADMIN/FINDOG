"use client";

import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-black tracking-tight text-white">
          FINDOG<span className="text-red-600">.NET</span>
        </Link>

        <LanguageSelector />
      </div>
    </header>
  );
}

