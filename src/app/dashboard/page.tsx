"use client";

import React from 'react';

export default function DashboardPage() {
  const entities = []; // Переименовали pets в объекты (сущности)

  return (
    <div className="animate-in fade-in duration-700 max-w-6xl mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase text-[#EDEDED]">
            SECURED <span className="text-red-600">ENTITIES</span>
          </h1>
          <p className="text-gray-500 mt-2 font-mono text-xs uppercase tracking-widest opacity-70">
            Observation Gate: Inbound Monitoring & Relay System
          </p>
        </div>
        
        <button className="group relative bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-2xl shadow-red-600/20 uppercase text-[10px] tracking-[0.2em] flex items-center gap-3">
          <span className="text-xl group-hover:rotate-90 transition-transform">+</span>
          Establish New Link
        </button>
      </header>

      {entities.length === 0 ? (
        <div className="relative overflow-hidden border border-white/5 rounded-[40px] p-20 text-center bg-white/[0.01] backdrop-blur-md">
          {/* Верхняя линия-индикатор */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
          
          <div className="relative">
            <div className="text-5xl mb-8 opacity-20 text-white font-mono">
              [ NO_DATA ]
            </div>
            <h2 className="text-xl font-bold mb-4 text-[#EDEDED] uppercase tracking-tight">
              Система мониторинга пуста
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed text-xs font-mono opacity-80 uppercase">
              Добавьте первый <span className="text-red-500">Объект наблюдения</span>, чтобы активировать фильтрацию входящих данных и получить QR/NFC идентификаторы.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Здесь будут карточки объектов */}
        </div>
      )}

      <footer className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-red-600">Digital ID</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-mono uppercase">Уникальный зашифрованный адрес в системе FINDOG.NET для каждого узла.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#EDEDED]">Relay Service</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-mono uppercase">Мгновенная пересылка данных владельцу при активации внешней метки.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-[#EDEDED]">Global Protocol</h4>
          <p className="text-[11px] text-gray-500 leading-relaxed font-mono uppercase">Защита объекта и фильтрация контактов активна в глобальной сети 24/7.</p>
        </div>
      </footer>
    </div>
  );
}