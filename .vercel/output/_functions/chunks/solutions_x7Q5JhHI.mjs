import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { u as useTranslatedPath, g as getLangFromUrl, $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$PageHero } from './PageHero_BnnNppo3.mjs';
import { $ as $$FeaturesSection } from './FeaturesSection_9lzE-53N.mjs';
import { $ as $$CtaBand } from './CtaBand_B6DrexBv.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';
import { N as NAV } from './nav_DcpAvAUt.mjs';

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Solutions;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=86400"
  );
  const translatePath = useTranslatedPath(getLangFromUrl(Astro2.url));
  const seo = {
    title: `Solutions — ${SITE.brandName}`,
    description: "AI solutions tailored to your industry and business problem."
  };
  const solutions = [
    {
      title: "Retail & E-commerce",
      description: "Recommend products, check stock and close orders inside the conversation.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Education & Training",
      description: "Answer admissions questions, guide students and capture sign-ups.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Real Estate",
      description: "Qualify leads, share listings and book viewings automatically.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Services & Customer Care",
      description: "Take load off your support desk by resolving repetitive questions.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Marketing & Content",
      description: "Produce articles, product copy and social content at scale.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Multi-branch Businesses",
      description: "Centralised control, per-branch permissions and consolidated reporting.",
      image: null,
      link: translatePath(NAV.contact)
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.title, "description": seo.description, "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHero", $$PageHero, { "badge": "Solutions", "title": "AI solutions for", "titleHighlight": " every industry", "subtitle": "One platform, configured differently for each business problem. Detailed content is on the way." })} ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, { "badge": "By industry", "title": "We have deployed across", "titleHighlight": " many sectors", "description": "Pick the closest fit, or talk to us and we will tailor a solution.", "button1Text": "Talk to us", "button1Url": translatePath(NAV.contact), "button2Text": "See products", "button2Url": translatePath(NAV.services), "featuresList": solutions })} ${renderComponent($$result2, "CtaBand", $$CtaBand, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/solutions.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/solutions.astro";
const $$url = "/en/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
