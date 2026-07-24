// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// astro.config chạy trong Node TRƯỚC khi Vite nạp .env vào import.meta.env,
// nên phải dùng loadEnv để đọc cùng biến với src/config/site.ts.
// Giữ hai nơi này khớp nhau, nếu không canonical/sitemap sẽ lệch domain.
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

const SITE_URL = env.PUBLIC_SITE_URL || 'https://example.com';
const CMS_DOMAIN = env.PUBLIC_CMS_DOMAIN || 'cms.example.com';
const SITE_DOMAIN = new URL(SITE_URL).host;

// https://astro.build/config
// NOTE: @astrojs/sitemap đã bị loại bỏ vì dùng SSR mode + headless WordPress.
// Sitemap được tạo động qua src/pages/sitemap-0.xml.ts (query WP GraphQL mỗi request).
export default defineConfig({
  site: SITE_URL,
  output: 'server',
  adapter: vercel({
    imageService: true
  }),
  image: {
    domains: [SITE_DOMAIN, CMS_DOMAIN],
    remotePatterns: [{ protocol: 'https' }, { protocol: 'http' }]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
