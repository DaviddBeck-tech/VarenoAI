import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$PageHero } from './PageHero_BnnNppo3.mjs';
import { $ as $$ProductsGrid } from './ProductsGrid_C9HiAfp4.mjs';
import { $ as $$CtaBand } from './CtaBand_B6DrexBv.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Services;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=86400"
  );
  const seo = {
    title: `Dịch vụ — ${SITE.brandName}`,
    description: "Hệ sinh thái sản phẩm AI của VarenoAI: ChatVareno cho tư vấn & bán hàng, ContentAI cho sản xuất nội dung."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.title, "description": seo.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHero", $$PageHero, { "badge": "Dịch vụ", "title": "Sản phẩm AI của", "titleHighlight": " VarenoAI", "subtitle": "Mỗi sản phẩm giải quyết một bài toán cụ thể. Dùng riêng lẻ, hoặc kết hợp cùng nhau trên một nền tảng." })} ${renderComponent($$result2, "ProductsGrid", $$ProductsGrid, {})} ${renderComponent($$result2, "CtaBand", $$CtaBand, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/services.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
