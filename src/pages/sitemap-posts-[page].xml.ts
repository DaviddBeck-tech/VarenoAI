// src/pages/sitemap-posts-[page].xml.ts
// ─── Paginated Blog Posts Sitemap ────────────────────────────
// Xử lý các trang bài viết từ trang 2 trở đi.
// URL pattern: /sitemap-posts-2.xml, /sitemap-posts-3.xml, ...
// Mỗi file chứa tối đa 500 bài (VI + EN).

import type { APIRoute } from 'astro';

import { SITE as SITE_CONFIG } from '../config/site';

const SITE = SITE_CONFIG.siteUrl;
const WP_GRAPHQL_URL = SITE_CONFIG.graphqlUrl;
const PER_SITEMAP = 500;

interface PostSlug { slug: string; modified: string; }
interface PageInfo { hasNextPage: boolean; endCursor: string; }

// ─── Lấy cursor của trang trước để offset ────────────────────
// WP GraphQL dùng cursor-based pagination, không phải offset.
// Để lấy trang N, ta cần endCursor của trang N-1.
async function getCursorAtPage(targetPage: number): Promise<string | null> {
  // targetPage = 2 → bỏ qua 500 bài đầu → lấy endCursor của batch 1
  let cursor: string | null = null;
  const batchSize = PER_SITEMAP;
  const skipBatches = targetPage - 1; // số lần fetch cần skip

  for (let i = 0; i < skipBatches; i++) {
    try {
      const res = await fetch(WP_GRAPHQL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `query GetCursor($first: Int!, $after: String) {
            posts(first: $first, after: $after, where: { status: PUBLISH }) {
              pageInfo { hasNextPage endCursor }
            }
          }`,
          variables: { first: batchSize, after: cursor },
        }),
      });
      if (!res.ok) return null;
      const json = await res.json();
      const pageInfo: PageInfo = json?.data?.posts?.pageInfo;
      if (!pageInfo?.hasNextPage) return null; // Không còn trang nào
      cursor = pageInfo.endCursor;
    } catch {
      return null;
    }
  }
  return cursor;
}

// ─── Lấy batch bài viết dùng cursor ──────────────────────────
async function getPostsBatch(after: string | null): Promise<PostSlug[]> {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query SitemapPostsBatch($first: Int!, $after: String) {
          posts(first: $first, after: $after, where: { status: PUBLISH }) {
            nodes { slug modified }
          }
        }`,
        variables: { first: PER_SITEMAP, after },
      }),
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.posts?.nodes ?? [];
  } catch (e) {
    console.error('[sitemap-posts-N] fetch error:', e);
    return [];
  }
}

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

export const GET: APIRoute = async ({ params }) => {
  const pageNum = parseInt(params.page ?? '2', 10);

  // Validate: trang phải >= 2 (trang 1 là sitemap-posts.xml)
  if (isNaN(pageNum) || pageNum < 2) {
    return new Response('Not found', { status: 404 });
  }

  // Lấy cursor của trang trước để fetch đúng vị trí
  const cursor = await getCursorAtPage(pageNum);

  // Nếu không có cursor nghĩa là trang này không tồn tại
  if (cursor === null) {
    return new Response('Not found', { status: 404 });
  }

  const posts = await getPostsBatch(cursor);

  if (posts.length === 0) {
    return new Response('Not found', { status: 404 });
  }

  const entries = posts.flatMap(({ slug, modified }) => [
    urlEntry(`${SITE}/blog/${slug}`,    modified, '0.8', 'weekly'),
    urlEntry(`${SITE}/en/blog/${slug}`, modified, '0.7', 'weekly'),
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
