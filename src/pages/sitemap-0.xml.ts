// src/pages/sitemap-0.xml.ts
// ─── Static Pages + Legal Pages Sitemap ─────────────────────
// Chứa: trang tĩnh chính + trang legal từ WordPress
// Blog posts được tách riêng sang sitemap-posts.xml.ts

import type { APIRoute } from 'astro';

import { SITE as SITE_CONFIG } from '../config/site';
import { NAV } from '../config/nav';
import { navProducts, productPath } from '../config/products';

const SITE = SITE_CONFIG.siteUrl;
const WP_GRAPHQL_URL = SITE_CONFIG.graphqlUrl;

interface SlugModified { slug: string; modified: string; }

// ─── Trang chính cần loại trừ khỏi legal ─────────────────────
const EXCLUDED_SLUGS = new Set([
  // VI
  'home', 'bai-viet', 'blog', 'lien-he', 'contact',
  'pricing', 'bang-gia', 'features', 'tinh-nang',
  'about', 've-chung-toi', 'integrations', 'tich-hop',
  'docs', 'help', 'api',
  // EN variants (WP pages dùng làm data source)
  'home-en', 'blog-en', 'contact-en', 'pricing-en',
  'features-en', 'about-en', 'integrations-en',
  'docs-en', 'help-en', 'api-en',
  // Trang tĩnh mới của umbrella — không bao giờ là trang legal
  'about-us', 'about-us-en',
  'services', 'services-en',
  'solutions', 'solutions-en',
  'chatvareno', 'chatvareno-en',
  'contentai', 'contentai-en',
]);

// ─── Keyword nhận diện trang legal hợp lệ ────────────────────
const LEGAL_KEYWORDS = [
  'privacy', 'terms', 'cookie', 'security',
  'community', 'dmca', 'refund', 'disclaimer',
  'imprint', 'accessibility', 'legal', 'policy',
  'conduct', 'license',
];

function isLegalPage(slug: string): boolean {
  if (EXCLUDED_SLUGS.has(slug)) return false;
  const base = slug.replace(/-(?:vi|en)$/, '').toLowerCase();
  return LEGAL_KEYWORDS.some(kw => base.includes(kw));
}

// ─── Lấy legal pages từ WP + deduplicate ─────────────────────
async function getLegalPages(): Promise<SlugModified[]> {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query SitemapPages {
          pages(first: 200, where: { status: PUBLISH }) {
            nodes { slug modified }
          }
        }`,
      }),
    });
    if (!res.ok) return [];
    const json = await res.json();
    const allPages: SlugModified[] = json?.data?.pages?.nodes ?? [];

    // Lọc chỉ lấy trang legal hợp lệ
    const legalPages = allPages.filter(p => isLegalPage(p.slug));

    // Deduplicate: "security" + "security-en" → chỉ giữ slug gốc "security"
    const seen = new Map<string, SlugModified>();
    for (const page of legalPages) {
      const baseSlug = page.slug.replace(/-(?:vi|en)$/, '');
      const existing = seen.get(baseSlug);
      // Giữ cái có modified mới nhất
      if (!existing || page.modified > existing.modified) {
        seen.set(baseSlug, { slug: baseSlug, modified: page.modified });
      }
    }
    return Array.from(seen.values());
  } catch (e) {
    console.error('[sitemap-0] legal pages fetch error:', e);
    return [];
  }
}

// ─── Helper ───────────────────────────────────────────────────
function urlEntry(loc: string, lastmod?: string, priority = '0.8', changefreq = 'weekly') {
  return [
    `  <url>`,
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod.split('T')[0]}</lastmod>` : '',
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    `  </url>`,
  ].filter(Boolean).join('\n');
}

// ─── Handler ──────────────────────────────────────────────────
export const GET: APIRoute = async () => {
  const legalPages = await getLegalPages();

  // Sinh từ NAV + PRODUCTS: thêm sản phẩm/trang mới không phải sửa file này.
  // Mỗi path phát ra 2 URL (vi + en) vì slug hai ngôn ngữ giống hệt nhau.
  const PATH_META = [
    { path: NAV.home, priority: '1.0', changefreq: 'daily' },
    { path: NAV.services, priority: '0.9', changefreq: 'weekly' },
    // Loại sản phẩm nhúng site ngoài: trang /<slug>/ là noindex, canonical
    // trỏ về domain riêng → không đưa vào sitemap của VarenoAI (tránh trùng lặp).
    ...navProducts()
      .filter((p) => !p.externalUrl)
      .map((p) => ({
        path: productPath(p),
        priority: '0.9',
        changefreq: 'weekly',
      })),
    { path: NAV.solutions, priority: '0.8', changefreq: 'weekly' },
    { path: NAV.about, priority: '0.7', changefreq: 'monthly' },
    { path: NAV.news, priority: '0.9', changefreq: 'daily' },
    { path: NAV.contact, priority: '0.7', changefreq: 'monthly' },
    { path: NAV.pricing, priority: '0.8', changefreq: 'weekly' },
  ];

  const enPath = (p: string) => (p === '/' ? '/en/' : `/en${p}`);

  const staticEntries = PATH_META.flatMap(({ path, priority, changefreq }) => [
    urlEntry(`${SITE}${path}`, undefined, priority, changefreq),
    urlEntry(`${SITE}${enPath(path)}`, undefined, priority, changefreq),
  ]);

  const legalEntries = legalPages.flatMap(({ slug, modified }) => [
    urlEntry(`${SITE}/legal/${slug}`,    modified, '0.5', 'monthly'),
    urlEntry(`${SITE}/en/legal/${slug}`, modified, '0.5', 'monthly'),
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${[...staticEntries, ...legalEntries].join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
