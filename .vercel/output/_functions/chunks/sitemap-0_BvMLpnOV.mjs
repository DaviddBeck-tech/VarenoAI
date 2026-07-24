import { S as SITE$1 } from './site_xhkTMlR1.mjs';
import { N as NAV } from './nav_DcpAvAUt.mjs';
import { n as navProducts, p as productPath } from './products_B4dkJEK6.mjs';

const SITE = SITE$1.siteUrl;
const WP_GRAPHQL_URL = SITE$1.graphqlUrl;
const EXCLUDED_SLUGS = /* @__PURE__ */ new Set([
  // VI
  "home",
  "bai-viet",
  "blog",
  "lien-he",
  "contact",
  "pricing",
  "bang-gia",
  "features",
  "tinh-nang",
  "about",
  "ve-chung-toi",
  "integrations",
  "tich-hop",
  "docs",
  "help",
  "api",
  // EN variants (WP pages dùng làm data source)
  "home-en",
  "blog-en",
  "contact-en",
  "pricing-en",
  "features-en",
  "about-en",
  "integrations-en",
  "docs-en",
  "help-en",
  "api-en",
  // Trang tĩnh mới của umbrella — không bao giờ là trang legal
  "about-us",
  "about-us-en",
  "services",
  "services-en",
  "solutions",
  "solutions-en",
  "chatvareno",
  "chatvareno-en",
  "contentai",
  "contentai-en"
]);
const LEGAL_KEYWORDS = [
  "privacy",
  "terms",
  "cookie",
  "security",
  "community",
  "dmca",
  "refund",
  "disclaimer",
  "imprint",
  "accessibility",
  "legal",
  "policy",
  "conduct",
  "license"
];
function isLegalPage(slug) {
  if (EXCLUDED_SLUGS.has(slug)) return false;
  const base = slug.replace(/-(?:vi|en)$/, "").toLowerCase();
  return LEGAL_KEYWORDS.some((kw) => base.includes(kw));
}
async function getLegalPages() {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query SitemapPages {
          pages(first: 200, where: { status: PUBLISH }) {
            nodes { slug modified }
          }
        }`
      })
    });
    if (!res.ok) return [];
    const json = await res.json();
    const allPages = json?.data?.pages?.nodes ?? [];
    const legalPages = allPages.filter((p) => isLegalPage(p.slug));
    const seen = /* @__PURE__ */ new Map();
    for (const page of legalPages) {
      const baseSlug = page.slug.replace(/-(?:vi|en)$/, "");
      const existing = seen.get(baseSlug);
      if (!existing || page.modified > existing.modified) {
        seen.set(baseSlug, { slug: baseSlug, modified: page.modified });
      }
    }
    return Array.from(seen.values());
  } catch (e) {
    console.error("[sitemap-0] legal pages fetch error:", e);
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
const GET = async () => {
  const legalPages = await getLegalPages();
  const PATH_META = [
    { path: NAV.home, priority: "1.0", changefreq: "daily" },
    { path: NAV.services, priority: "0.9", changefreq: "weekly" },
    // Loại sản phẩm nhúng site ngoài: trang /<slug>/ là noindex, canonical
    // trỏ về domain riêng → không đưa vào sitemap của VarenoAI (tránh trùng lặp).
    ...navProducts().filter((p) => !p.externalUrl).map((p) => ({
      path: productPath(p),
      priority: "0.9",
      changefreq: "weekly"
    })),
    { path: NAV.solutions, priority: "0.8", changefreq: "weekly" },
    { path: NAV.about, priority: "0.7", changefreq: "monthly" },
    { path: NAV.news, priority: "0.9", changefreq: "daily" },
    { path: NAV.contact, priority: "0.7", changefreq: "monthly" },
    { path: NAV.pricing, priority: "0.8", changefreq: "weekly" }
  ];
  const enPath = (p) => p === "/" ? "/en/" : `/en${p}`;
  const staticEntries = PATH_META.flatMap(({ path, priority, changefreq }) => [
    urlEntry(`${SITE}${path}`, void 0, priority, changefreq),
    urlEntry(`${SITE}${enPath(path)}`, void 0, priority, changefreq)
  ]);
  const legalEntries = legalPages.flatMap(({ slug, modified }) => [
    urlEntry(`${SITE}/legal/${slug}`, modified, "0.5", "monthly"),
    urlEntry(`${SITE}/en/legal/${slug}`, modified, "0.5", "monthly")
  ]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${[...staticEntries, ...legalEntries].join("\n")}
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
