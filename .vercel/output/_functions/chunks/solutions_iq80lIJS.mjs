import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
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
  const seo = {
    title: `Giải pháp — ${SITE.brandName}`,
    description: "Giải pháp AI theo từng ngành nghề và bài toán kinh doanh cụ thể."
  };
  const solutions = [
    {
      title: "Bán lẻ & Thương mại điện tử",
      description: "Tư vấn sản phẩm, kiểm tra tồn kho và chốt đơn ngay trong hội thoại.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Giáo dục & Đào tạo",
      description: "Trả lời câu hỏi tuyển sinh, hướng dẫn học viên và thu thập thông tin đăng ký.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Bất động sản",
      description: "Sàng lọc khách tiềm năng, gửi thông tin dự án và đặt lịch xem nhà tự động.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Dịch vụ & Chăm sóc khách hàng",
      description: "Giảm tải cho tổng đài bằng cách tự động xử lý các câu hỏi lặp lại.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Marketing & Nội dung",
      description: "Sản xuất bài viết, mô tả sản phẩm và nội dung mạng xã hội ở quy mô lớn.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Doanh nghiệp nhiều chi nhánh",
      description: "Quản lý tập trung, phân quyền theo chi nhánh và báo cáo hợp nhất.",
      image: null,
      link: NAV.contact
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seo.title, "description": seo.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHero", $$PageHero, { "badge": "Giải pháp", "title": "Giải pháp AI theo", "titleHighlight": " từng ngành", "subtitle": "Cùng một nền tảng, cấu hình khác nhau cho từng bài toán kinh doanh. Nội dung chi tiết đang được hoàn thiện." })} ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, { "badge": "Theo ngành nghề", "title": "Chúng tôi đã triển khai cho", "titleHighlight": " nhiều lĩnh vực", "description": "Chọn lĩnh vực gần nhất với bạn, hoặc liên hệ để chúng tôi tư vấn giải pháp riêng.", "button1Text": "Liên hệ tư vấn", "button1Url": NAV.contact, "button2Text": "Xem sản phẩm", "button2Url": NAV.services, "featuresList": solutions })} ${renderComponent($$result2, "CtaBand", $$CtaBand, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/solutions.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
