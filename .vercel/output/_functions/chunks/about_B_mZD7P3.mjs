import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$PageHero } from './PageHero_BnnNppo3.mjs';
import { $ as $$SocialProof } from './SocialProof_DgFfNwNF.mjs';
import { $ as $$PrivacySection } from './PrivacySection_B8VGNPQH.mjs';
import { $ as $$CtaBand } from './CtaBand_B6DrexBv.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=86400"
  );
  const seo = {
    title: `About — ${SITE.brandName}`,
    description: "VarenoAI builds AI products made for Vietnamese businesses."
  };
  const stats = [
    { value: "2", label: "AI products", icon: "sparkles" },
    { value: "24/7", label: "Always on", icon: "clock" },
    { value: "3", label: "Channels integrated", icon: "zap" },
    { value: "100%", label: "Native Vietnamese", icon: "shield" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.title, "description": seo.description, "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHero", $$PageHero, { "badge": "About", "title": "We build AI for", "titleHighlight": " Vietnamese businesses", "subtitle": "VarenoAI creates AI tools that understand Vietnamese — the language and the way business is done — and that ship in hours, without a dedicated engineering team." })} ${renderComponent($$result2, "SocialProof", $$SocialProof, { "title": "A platform built for the Vietnamese market", "stats": stats })} ${renderComponent($$result2, "PrivacySection", $$PrivacySection, { "title": "Your data belongs to you", "description": "We never use your customer data to train public models. Every connection is encrypted, and you can delete your data at any time.", "linkText": "Read the privacy policy", "linkUrl": "/en/legal/privacy-policy/" })} ${renderComponent($$result2, "CtaBand", $$CtaBand, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/about.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
