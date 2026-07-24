// ─────────────────────────────────────────────────────────────
//  ĐƯỜNG DẪN CHUẨN — NGUỒN SỰ THẬT DUY NHẤT CHO ROUTE
// ─────────────────────────────────────────────────────────────
//  Header, Footer, sitemap và hreflang đều đọc từ đây.
//  Không hardcode slug ở bất kỳ chỗ nào khác.
//
//  ⚠️ BẤT BIẾN BẮT BUỘC
//  Mọi path trong NAV (và mọi productPath()) PHẢI tồn tại ở CẢ HAI:
//      src/pages/<x>.astro   VÀ   src/pages/en/<x>.astro
//
//  Lý do: LanguageSwitcher.astro suy ra URL ngôn ngữ kia bằng regex
//  thuần trên pathname (thêm/bỏ tiền tố "/en"). Nó KHÔNG biết route
//  nào thực sự tồn tại. Thiếu bản /en/ ⇒ nút đổi ngôn ngữ tạo link
//  chết (404) một cách âm thầm.
//
//  Hệ quả: slug tiếng Việt và tiếng Anh phải GIỐNG HỆT NHAU.
//  Vì vậy slug dùng tiếng Anh, còn nhãn hiển thị dịch qua i18n/ui.ts.
// ─────────────────────────────────────────────────────────────

export const NAV = {
  home: "/",
  services: "/services/",
  about: "/about/",
  solutions: "/solutions/",
  /** "Tin tức" chỉ là NHÃN — route vẫn là /blog/ (giữ SEO + URL bài viết) */
  news: "/blog/",
  contact: "/contact/",
  /** Còn route, nhưng đã bỏ khỏi nav — được link từ trang sản phẩm */
  pricing: "/pricing/",
} as const;

export type NavKey = keyof typeof NAV;
export type NavPath = (typeof NAV)[NavKey];
