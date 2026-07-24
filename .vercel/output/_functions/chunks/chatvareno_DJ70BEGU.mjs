import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$FrameLayout } from './FrameLayout_C_26oLzO.mjs';
import { f as findProduct } from './products_B4dkJEK6.mjs';

const $$Chatvareno = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Chatvareno;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=86400"
  );
  const product = findProduct("chatvareno");
  const base = product.externalUrl ?? "";
  return renderTemplate`${renderComponent($$result, "FrameLayout", $$FrameLayout, { "iframeSrc": `${base}/en/`, "label": product.name, "title": product.seo.en.title, "description": product.seo.en.description, "lang": "en" })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/chatvareno.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/chatvareno.astro";
const $$url = "/en/chatvareno";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chatvareno,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
