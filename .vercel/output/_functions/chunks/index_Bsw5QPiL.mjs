import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DdRf1b8J.mjs';
import { g as getLangFromUrl, $ as $$BaseLayout, a as $$Header, b as $$Footer, u as useTranslatedPath } from './Footer_ChqZwDWP.mjs';
import { $ as $$UmbrellaHero, H as HOME, a as $$EcosystemShowcase, b as $$ValuesSection, c as $$IndustriesSection, d as $$NewsSection } from './home_DwGKycjs.mjs';
import { $ as $$CtaBand } from './CtaBand_B6DrexBv.mjs';
import { c as getPosts } from './wordpress_DHipz59k.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';
import { N as NAV } from './nav_DcpAvAUt.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=60, stale-while-revalidate=86400"
  );
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const seo = {
    title: `${SITE.brandName}: An AI ecosystem for Vietnamese business`,
    description: "VarenoAI builds AI products for Vietnamese businesses: ChatVareno for automated sales and support, ContentAI for content production."
  };
  let posts = [];
  try {
    posts = await getPosts(3, "en");
  } catch (e) {
    console.error("[en/index] Could not load posts:", e);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.title, "description": seo.description, "lang": "en" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "UmbrellaHero", $$UmbrellaHero, { "badgeText": HOME.hero.badge[lang], "titleLead": HOME.hero.titleLead[lang], "rotatingWords": HOME.hero.rotating.map((r) => r[lang]), "subtitle": HOME.hero.subtitle[lang], "imageAlt": HOME.hero.imageAlt[lang], "btn1Text": HOME.hero.primaryCta.label[lang], "btn1Link": translatePath(HOME.hero.primaryCta.href), "btn2Text": HOME.hero.secondaryCta.label[lang], "btn2Link": translatePath(HOME.hero.secondaryCta.href), "chips": HOME.platform.capabilities.map((c) => c[lang]) })} ${renderComponent($$result2, "EcosystemShowcase", $$EcosystemShowcase, { "title": HOME.showcase.title[lang], "subtitle": HOME.showcase.subtitle[lang] })} ${renderComponent($$result2, "ValuesSection", $$ValuesSection, { "title": HOME.values.title[lang], "titleAccent": HOME.values.titleAccent[lang], "subtitle": HOME.values.subtitle[lang], "pillars": HOME.values.pillars.map((p) => ({
    icon: p.icon,
    title: p.title[lang],
    desc: p.desc[lang],
    points: p.points.map((pt) => pt[lang])
  })) })} ${renderComponent($$result2, "IndustriesSection", $$IndustriesSection, { "title": HOME.industries.title[lang], "titleHighlight": HOME.industries.titleAccent[lang], "subtitle": HOME.industries.subtitle[lang], "industries": HOME.industries.items.map((it) => ({
    name: it.name[lang],
    blurb: it.blurb[lang],
    icon: it.icon,
    featured: it.featured ?? false,
    href: translatePath(HOME.industries.href)
  })) })} ${renderComponent($$result2, "NewsSection", $$NewsSection, { "title": HOME.news.title[lang], "subtitle": HOME.news.subtitle[lang], "posts": posts, "basePath": "/en/blog", "viewAllHref": translatePath(NAV.news), "viewAllLabel": HOME.news.viewAll[lang], "emptyText": HOME.news.empty[lang] })} ${renderComponent($$result2, "CtaBand", $$CtaBand, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/index.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
