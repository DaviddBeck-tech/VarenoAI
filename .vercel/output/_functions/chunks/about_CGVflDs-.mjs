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
    title: `Giới thiệu — ${SITE.brandName}`,
    description: "VarenoAI xây dựng các sản phẩm AI dành riêng cho doanh nghiệp Việt Nam."
  };
  const stats = [
    { value: "2", label: "Sản phẩm AI", icon: "sparkles" },
    { value: "24/7", label: "Vận hành liên tục", icon: "clock" },
    { value: "3", label: "Kênh tích hợp", icon: "zap" },
    { value: "100%", label: "Tiếng Việt bản địa", icon: "shield" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.title, "description": seo.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHero", $$PageHero, { "badge": "Giới thiệu", "title": "Chúng tôi xây dựng AI cho", "titleHighlight": " doanh nghiệp Việt", "subtitle": "VarenoAI tạo ra những công cụ AI hiểu tiếng Việt, hiểu cách người Việt kinh doanh — và triển khai được trong vài giờ, không cần đội kỹ thuật riêng." })} ${renderComponent($$result2, "SocialProof", $$SocialProof, { "title": "Nền tảng được xây dựng cho thị trường Việt Nam", "stats": stats })} ${renderComponent($$result2, "PrivacySection", $$PrivacySection, { "title": "Dữ liệu của bạn thuộc về bạn", "description": "Chúng tôi không dùng dữ liệu khách hàng của bạn để huấn luyện mô hình công khai. Mọi kết nối đều được mã hoá, và bạn có thể xoá dữ liệu bất cứ lúc nào.", "linkText": "Đọc chính sách bảo mật", "linkUrl": "/legal/privacy-policy/" })} ${renderComponent($$result2, "CtaBand", $$CtaBand, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/about.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
