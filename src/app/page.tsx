import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 overflow-x-hidden">
      
      {/* Контейнер по центру */}
      <div className="max-w-md w-full text-center space-y-8 z-10">
        
        {/* Логотип */}
        <div className="space-y-4 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter break-words">
            FINDOG<span className="text-red-600">.NET</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-medium px-2">
            10 секунд, чтобы вернуть друга домой.
          </p>
        </div>

        {/* Главные кнопки */}
        <div className="flex flex-col gap-6 pt-8">
          
          {/* Кнопка НАШЕЛ - Красная и пульсирующая */}
          <Link 
            href="/found"
            className="group relative w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-2xl text-2xl shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500 transition-all active:scale-95"
          >
            Я НАШЕЛ СОБАКУ
          </Link>

          {/* Кнопка РЕГИСТРАЦИЯ - Спокойная */}
          <Link 
            href="/register"
            className="w-full bg-transparent border-2 border-white/20 hover:border-white text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all"
          >
            Зарегистрировать питомца
          </Link>
        </div>

        {/* Футер */}
        <div className="pt-12 text-sm text-gray-600">
          <p>Бесплатный международный реестр безопасности</p>
          <p className="mt-2 text-xs opacity-40">v.0.1.0 Beta • Novi Sad Edition 🇷🇸</p>
        </div>

      </div>
    </main>
  );
}