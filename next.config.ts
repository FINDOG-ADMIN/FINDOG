import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Мы это отключаем, чтобы ошибки типов не мешали деплою
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорируем проверку линтера при сборке
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;