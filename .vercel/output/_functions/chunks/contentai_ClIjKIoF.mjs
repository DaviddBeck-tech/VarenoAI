import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
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
  const product = findProduct("contentai");
  const features = [
    {
      title: "Lên dàn ý tự động",
      description: "Nhập chủ đề, nhận dàn ý có cấu trúc chuẩn SEO trong vài giây.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Viết theo giọng thương hiệu",
      description: "Huấn luyện bằng nội dung sẵn có của bạn để giữ đúng giọng văn.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Tối ưu SEO ngay khi viết",
      description: "Gợi ý từ khoá, mật độ và cấu trúc heading theo thời gian thực.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Mô tả sản phẩm hàng loạt",
      description: "Sinh mô tả cho cả danh mục sản phẩm từ một file dữ liệu duy nhất.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Nội dung mạng xã hội",
      description: "Chuyển một bài viết dài thành chuỗi bài đăng cho từng nền tảng.",
      image: null,
      link: NAV.contact
    },
    {
      title: "Kiểm tra trước khi đăng",
      description: "Rà soát chính tả, trùng lặp và tính nhất quán trước khi xuất bản.",
      image: null,
      link: NAV.contact
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": product.seo.vi.title, "description": product.seo.vi.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="min-h-screen"> ${renderComponent($$result2, "HeroSection", $$HeroSection, { "badgeText": "SẮP RA MẮT", "titleMain": "Sản xuất nội dung bằng", "titleHighlight": "AI\nquy mô lớn\nđúng giọng văn", "subtitle": product.description.vi, "btn1Text": "Đăng ký nhận tin", "btn1Link": NAV.contact, "btn2Text": "Xem sản phẩm khác", "btn2Link": NAV.services })} ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, { "badge": "Tính năng", "title": "Mọi thứ bạn cần để", "titleHighlight": " sản xuất nội dung", "description": "ContentAI lo phần lặp đi lặp lại, để đội ngũ của bạn tập trung vào ý tưởng.", "button1Text": "Đăng ký nhận tin", "button1Url": NAV.contact, "button2Text": "Liên hệ", "button2Url": NAV.contact, "featuresList": features })} ${renderComponent($$result2, "PrivacySection", $$PrivacySection, { "title": "Nội dung của bạn không rời khỏi tầm kiểm soát", "description": "Bản thảo và dữ liệu huấn luyện của bạn không được dùng để huấn luyện mô hình công khai.", "linkText": "Đọc chính sách bảo mật", "linkUrl": "/legal/privacy-policy/" })} ${renderComponent($$result2, "CtaBand", $$CtaBand, { "title": "ContentAI sắp ra mắt", "subtitle": "Để lại thông tin để nhận thông báo sớm nhất khi sản phẩm mở đăng ký.", "buttonLabel": "Đăng ký nhận tin" })} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/contentai.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/contentai.astro";
const $$url = "/contentai";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contentai,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
