import { S as SITE$1 } from './site_xhkTMlR1.mjs';

const SITE = SITE$1.siteUrl;
const WP_GRAPHQL_URL = SITE$1.graphqlUrl;
const PER_SITEMAP = 500;
async function getPostsBatch(after) {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query SitemapPostsBatch($first: Int!, $after: String) {
          posts(first: $first, after: $after, where: { status: PUBLISH }) {
            pageInfo { hasNextPage endCursor }
            nodes { slug modified }
          }
        }`,
        variables: { first: PER_SITEMAP, after: after ?? null }
      })
    });
    if (!res.ok) return { nodes: [], hasNextPage: false, endCursor: "" };
    const json = await res.json();
    const posts = json?.data?.posts;
    return {
      nodes: posts?.nodes ?? [],
      hasNextPage: posts?.pageInfo?.hasNextPage ?? false,
      endCursor: posts?.pageInfo?.endCursor ?? ""
    };
  } catch (e) {
    console.error("[sitemap-posts] fetch error:", e);
    return { nodes: [], hasNextPage: false, endCursor: "" };
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
const GET = async () => {
  const { nodes: posts } = await getPostsBatch();
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
