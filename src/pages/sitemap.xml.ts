// src/pages/sitemap.xml.ts
// ─── Alias: /sitemap.xml → trỏ về sitemap-index.xml ─────────
// Convention chuẩn nhất (giống Next.js, Nuxt, WordPress...):
// Google Search Console chỉ cần submit: https://example.com/sitemap.xml
// File này redirect sang sitemap-index.xml để tránh trùng nội dung.

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(null, {
    status: 301,
    headers: {
      Location: '/sitemap-index.xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
