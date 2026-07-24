// src/pages/sitemap-index.xml.ts
// ─── Sitemap Index (entry point) ─────────────────────────────
// robots.txt trỏ đến đây. Liệt kê tất cả sitemap con.
// Tự động đếm tổng số bài WP để biết cần bao nhiêu file sitemap-posts.

import type { APIRoute } from 'astro';

import { SITE as SITE_CONFIG } from '../config/site';

const SITE = SITE_CONFIG.siteUrl;
const WP_GRAPHQL_URL = SITE_CONFIG.graphqlUrl;
const PER_SITEMAP = 500; // Phải khớp với sitemap-posts.xml.ts

// ─── Đếm tổng số posts (tương thích mọi phiên bản WPGraphQL) ─
async function getTotalPostCount(): Promise<number> {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Fetch tất cả slugs (chỉ trường slug nhẹ) → đếm
        query: `query CountPosts {
          posts(first: 10000, where: { status: PUBLISH }) {
            nodes { slug }
          }
        }`,
      }),
    });
    if (!res.ok) return 0;
    const json = await res.json();
    return json?.data?.posts?.nodes?.length ?? 0;
  } catch (e) {
    console.error('[sitemap-index] count error:', e);
    return 0;
  }
}

function sitemapEntry(loc: string, lastmod: string) {
  return `  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  const totalPosts = await getTotalPostCount();

  // Tính số file posts cần thiết (tối thiểu 1 dù không có bài nào)
  const totalPostFiles = Math.max(1, Math.ceil(totalPosts / PER_SITEMAP));

  const entries: string[] = [
    // sitemap-0.xml: trang tĩnh + legal
    sitemapEntry(`${SITE}/sitemap-0.xml`, today),
    // sitemap-posts.xml, sitemap-posts-2.xml, ... (nếu > 500 bài)
    sitemapEntry(`${SITE}/sitemap-posts.xml`, today),
    ...Array.from({ length: totalPostFiles - 1 }, (_, i) =>
      sitemapEntry(`${SITE}/sitemap-posts-${i + 2}.xml`, today)
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</sitemapindex>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
