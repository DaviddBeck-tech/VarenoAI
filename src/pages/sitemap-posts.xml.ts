// src/pages/sitemap-posts.xml.ts
// ─── Blog Posts Sitemap (trang 1, bài 1-500) ─────────────────
// Chứa 500 bài đầu (VI + EN). Nếu có hơn 500 bài,
// sitemap-posts-2.xml.ts sẽ chứa các bài tiếp theo.
// Xem sitemap-index.xml.ts để biết cách quản lý nhiều file.

import type { APIRoute } from 'astro';

import { SITE as SITE_CONFIG } from '../config/site';

const SITE = SITE_CONFIG.siteUrl;
const WP_GRAPHQL_URL = SITE_CONFIG.graphqlUrl;
const PER_SITEMAP = 500; // Số bài/file

interface PostSlug { slug: string; modified: string; }

async function getPostsBatch(after?: string): Promise<{ nodes: PostSlug[]; hasNextPage: boolean; endCursor: string }> {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query SitemapPostsBatch($first: Int!, $after: String) {
          posts(first: $first, after: $after, where: { status: PUBLISH }) {
            pageInfo { hasNextPage endCursor }
            nodes { slug modified }
          }
        }`,
        variables: { first: PER_SITEMAP, after: after ?? null },
      }),
    });
    if (!res.ok) return { nodes: [], hasNextPage: false, endCursor: '' };
    const json = await res.json();
    const posts = json?.data?.posts;
    return {
      nodes: posts?.nodes ?? [],
      hasNextPage: posts?.pageInfo?.hasNextPage ?? false,
      endCursor: posts?.pageInfo?.endCursor ?? '',
    };
  } catch (e) {
    console.error('[sitemap-posts] fetch error:', e);
    return { nodes: [], hasNextPage: false, endCursor: '' };
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

export const GET: APIRoute = async () => {
  // Lấy 500 bài đầu tiên
  const { nodes: posts } = await getPostsBatch();

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
