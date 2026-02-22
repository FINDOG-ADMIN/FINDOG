"use client";

import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex">
      
      {/* Боковое меню */}
      <aside className="w-64 border-r border-white/10 p-6 flex flex-col">
        <div className="mb-12">
          <h2 className="text-2xl font-black tracking-tighter uppercase">
            FIN<span className="text-red-600">DOG</span>
          </h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1 font-bold">
            Центр управления
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          <a href="/dashboard" className="block px-4 py-3 bg-white/10 rounded-xl font-bold text-white transition">
            🐾 Мои питомцы
          </a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition font-medium">
            🏷️ Умные метки
          </a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition font-medium">
            📍 Радар (Локация)
          </a>
          <a href="#" className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition font-medium">
            ⚙️ Профиль и Приватность
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <button className="flex items-center text-gray-400 hover:text-red-500 transition w-full px-4 py-2 font-medium">
            🚪 Выйти
          </button>
        </div>
      </aside>

      {/* Контентная часть */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-4xl">
          {children}
        </div>
      </main>

    </div>
  );
}