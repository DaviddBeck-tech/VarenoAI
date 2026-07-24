import { S as SITE$1 } from './site_xhkTMlR1.mjs';

const SITE = SITE$1.siteUrl;
const WP_GRAPHQL_URL = SITE$1.graphqlUrl;
const PER_SITEMAP = 500;
async function getTotalPostCount() {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Fetch tất cả slugs (chỉ trường slug nhẹ) → đếm
        query: `query CountPosts {
          posts(first: 10000, where: { status: PUBLISH }) {
            nodes { slug }
          }
        }`
      })
    });
    if (!res.ok) return 0;
    const json = await res.json();
    return json?.data?.posts?.nodes?.length ?? 0;
  } catch (e) {
    console.error("[sitemap-index] count error:", e);
    return 0;
  }
}
function sitemapEntry(loc, lastmod) {
  return `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`;
}
const GET = async () => {
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const totalPosts = await getTotalPostCount();
  const totalPostFiles = Math.max(1, Math.ceil(totalPosts / PER_SITEMAP));
  const entries = [
    // sitemap-0.xml: trang tĩnh + legal
    sitemapEntry(`${SITE}/sitemap-0.xml`, today),
    // sitemap-posts.xml, sitemap-posts-2.xml, ... (nếu > 500 bài)
    sitemapEntry(`${SITE}/sitemap-posts.xml`, today),
    ...Array.from(
      { length: totalPostFiles - 1 },
      (_, i) => sitemapEntry(`${SITE}/sitemap-posts-${i + 2}.xml`, today)
    )
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</sitemapindex>`;
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
