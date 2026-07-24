import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$NotFoundHero } from './NotFoundHero_C2fWdC3S.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';
import { N as NAV } from './nav_DcpAvAUt.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$404;
  Astro2.response.status = 404;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=3600, stale-while-revalidate=86400"
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `404 — Trang không tồn tại · ${SITE.brandName}`, "description": "Trang bạn đang tìm kiếm không tồn tại." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "NotFoundHero", $$NotFoundHero, { "heading": "Không tìm thấy trang", "homeLabel": "Về trang chủ", "homeHref": NAV.home, "contactLabel": "Liên hệ", "contactHref": NAV.contact })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/404.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
