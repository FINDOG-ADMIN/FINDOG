"use client";

import React from 'react';

export default function DashboardPage() {
  const pets = []; 

  return (
    <div className="animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">
            Мои <span className="text-red-600">питомцы</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium text-lg">
            Управление цифровыми профилями и защитными решениями
          </p>
        </div>
        
        <button className="group relative bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-2xl shadow-red-600/30 uppercase text-sm tracking-widest flex items-center gap-3">
          <span className="text-xl group-hover:scale-125 transition-transform">+</span>
          Добавить питомца
        </button>
      </header>

      {pets.length === 0 ? (
        <div className="relative overflow-hidden border border-white/5 rounded-[40px] p-20 text-center bg-white/[0.02] backdrop-blur-sm">
          <div className="relative">
            {/* Меняем иконку на более нейтральную или оставляем лапку */}
            <div className="text-8xl mb-8 opacity-40 grayscale text-white">🐾</div>
            <h2 className="text-2xl font-bold mb-4 text-white">У вас пока нет зарегистрированных питомцев</h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed text-lg">
              Создайте первый цифровой паспорт, чтобы активировать <span className="text-white font-semibold">QR-код</span>, <span className="text-white font-semibold">NFC-метку</span> и настроить систему защиты.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Место для карточек */}
        </div>
      )}

      <footer className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50">
        <div className="border-l border-white/10 pl-6">
          <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Цифровой ID</h4>
          <p className="text-sm text-gray-400">Уникальный адрес в системе FINDOG для каждого подопечного.</p>
        </div>
        <div className="border-l border-white/10 pl-6">
          <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Безопасность</h4>
          <p className="text-sm text-gray-400">Мгновенный доступ к контактам владельца при сканировании метки.</p>
        </div>
        <div className="border-l border-white/10 pl-6">
          <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Глобальная сеть</h4>
          <p className="text-sm text-gray-400">Ваш питомец под защитой в любой точке мира, где есть интернет.</p>
        </div>
      </footer>
    </div>
  );
}