import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DdRf1b8J.mjs';
import { u as useTranslatedPath, g as getLangFromUrl, $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$HeroSection } from './HeroSection_BnktJPtW.mjs';
import { $ as $$FeaturesSection } from './FeaturesSection_9lzE-53N.mjs';
import { $ as $$PrivacySection } from './PrivacySection_B8VGNPQH.mjs';
import { $ as $$CtaBand } from './CtaBand_B6DrexBv.mjs';
import { N as NAV } from './nav_DcpAvAUt.mjs';
import { f as findProduct } from './products_B4dkJEK6.mjs';

const $$Contentai = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Contentai;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=86400"
  );
  const translatePath = useTranslatedPath(getLangFromUrl(Astro2.url));
  const product = findProduct("contentai");
  const features = [
    {
      title: "Automatic outlines",
      description: "Enter a topic, get an SEO-structured outline in seconds.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Writes in your brand voice",
      description: "Trained on your existing content so the tone stays yours.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "SEO optimised as you write",
      description: "Real-time suggestions for keywords, density and headings.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Bulk product descriptions",
      description: "Generate copy for an entire catalogue from a single data file.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Social content",
      description: "Turn one long article into a series of platform-native posts.",
      image: null,
      link: translatePath(NAV.contact)
    },
    {
      title: "Pre-publish checks",
      description: "Catch typos, duplication and inconsistency before you ship.",
      image: null,
      link: translatePath(NAV.contact)
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": product.seo.en.title, "description": product.seo.en.description, "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="min-h-screen"> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "badgeText": "COMING SOON", "titleMain": "Produce content with", "titleHighlight": "AI\nat scale\nin your voice", "subtitle": product.description.en, "btn1Text": "Get notified", "btn1Link": translatePath(NAV.contact), "btn2Text": "See other products", "btn2Link": translatePath(NAV.services) })} ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, { "badge": "Features", "title": "Everything you need to", "titleHighlight": " produce content", "description": "ContentAI handles the repetitive part so your team can focus on ideas.", "button1Text": "Get notified", "button1Url": translatePath(NAV.contact), "button2Text": "Contact", "button2Url": translatePath(NAV.contact), "featuresList": features })} ${renderComponent($$result2, "PrivacySection", $$PrivacySection, { "title": "Your content stays under your control", "description": "Your drafts and training data are never used to train public models.", "linkText": "Read the privacy policy", "linkUrl": "/en/legal/privacy-policy/" })} ${renderComponent($$result2, "CtaBand", $$CtaBand, { "title": "ContentAI is coming soon", "subtitle": "Leave your details and we will let you know the moment sign-ups open.", "buttonLabel": "Get notified" })} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/contentai.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/contentai.astro";
const $$url = "/en/contentai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contentai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
