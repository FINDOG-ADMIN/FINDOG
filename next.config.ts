import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Подключаем платформу Cloudflare (включая D1) для локальной разработки
if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

const nextConfig: NextConfig = {
  // Если у вас тут были какие-то настройки (например, reactStrictMode: true),
  // их можно будет вернуть сюда позже. Пока оставляем пустым для надежности.
};

export default nextConfig;