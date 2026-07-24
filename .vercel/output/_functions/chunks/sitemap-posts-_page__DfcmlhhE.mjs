import { S as SITE$1 } from './site_xhkTMlR1.mjs';

const SITE = SITE$1.siteUrl;
const WP_GRAPHQL_URL = SITE$1.graphqlUrl;
const PER_SITEMAP = 500;
async function getCursorAtPage(targetPage) {
  let cursor = null;
  const batchSize = PER_SITEMAP;
  const skipBatches = targetPage - 1;
  for (let i = 0; i < skipBatches; i++) {
    try {
      const res = await fetch(WP_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query GetCursor($first: Int!, $after: String) {
            posts(first: $first, after: $after, where: { status: PUBLISH }) {
              pageInfo { hasNextPage endCursor }
            }
          }`,
          variables: { first: batchSize, after: cursor }
        })
      });
      if (!res.ok) return null;
      const json = await res.json();
      const pageInfo = json?.data?.posts?.pageInfo;
      if (!pageInfo?.hasNextPage) return null;
      cursor = pageInfo.endCursor;
    } catch {
      return null;
    }
  }
  return cursor;
}
async function getPostsBatch(after) {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query SitemapPostsBatch($first: Int!, $after: String) {
          posts(first: $first, after: $after, where: { status: PUBLISH }) {
            nodes { slug modified }
          }
        }`,
        variables: { first: PER_SITEMAP, after }
      })
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data?.posts?.nodes ?? [];
  } catch (e) {
    console.error("[sitemap-posts-N] fetch error:", e);
    return [];
  }
}
function urlEntry(loc, lastmod, priority = "0.8", changefreq = "weekly") {
  return [
    `  <url>`,
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod.split("T")[0]}</lastmod>` : "",
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    `  </url>`
  ].filter(Boolean).join("\n");
}
const GET = async ({ params }) => {
  const pageNum = parseInt(params.page ?? "2", 10);
  if (isNaN(pageNum) || pageNum < 2) {
    return new Response("Not found", { status: 404 });
  }
  const cursor = await getCursorAtPage(pageNum);
  if (cursor === null) {
    return new Response("Not found", { status: 404 });
  }
  const posts = await getPostsBatch(cursor);
  if (posts.length === 0) {
    return new Response("Not found", { status: 404 });
  }
  const entries = posts.flatMap(({ slug, modified }) => [
    urlEntry(`${SITE}/blog/${slug}`, modified, "0.8", "weekly"),
    urlEntry(`${SITE}/en/blog/${slug}`, modified, "0.7", "weekly")
  ]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${entries.join("\n")}
</urlset>`;
  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
