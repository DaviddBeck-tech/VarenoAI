// ─────────────────────────────────────────────────────────────
//  CẤU HÌNH THƯƠNG HIỆU / SITE — NGUỒN SỰ THẬT DUY NHẤT
// ─────────────────────────────────────────────────────────────
//  Đây là nơi DUY NHẤT bạn cần sửa để đổi thương hiệu dự án.
//  Toàn bộ giá trị bên dưới hiện là PLACEHOLDER tạm ("BrandName",
//  "example.com"). Thay bằng thông tin thật của bạn.
//
//  Nhiều giá trị đọc từ biến môi trường (.env) trước, nếu không có
//  mới dùng giá trị mặc định ở đây. Xem file .env.example.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  // ── Tên thương hiệu hiển thị ──────────────────────────────
  /** Tên ngắn dùng trong tiêu đề, footer, og:site_name... */
  brandName: "VarenoAI",

  /** Slogan/mô tả ngắn (fallback khi WordPress chưa có nội dung) */
  tagline: {
    vi: "Mô tả ngắn về sản phẩm của bạn.",
    en: "A short tagline for your product.",
  },

  // ── Domain & kết nối ──────────────────────────────────────
  /** Domain frontend công khai (không có dấu / ở cuối) */
  siteUrl: import.meta.env.PUBLIC_SITE_URL || "https://example.com",

  /** Hostname của CMS WordPress (chỉ host, không protocol) */
  cmsDomain: import.meta.env.PUBLIC_CMS_DOMAIN || "cms.example.com",

  /** Endpoint WPGraphQL. Đổi qua .env: WORDPRESS_GRAPHQL_URL */
  graphqlUrl:
    import.meta.env.WORDPRESS_GRAPHQL_URL ||
    "http://localhost:8888/example/graphql",

  /** Base URL ảnh upload của WordPress (có dấu / ở cuối) */
  uploadsBaseUrl:
    import.meta.env.WP_UPLOADS_BASE_URL ||
    "https://cms.example.com/wp-content/uploads/",

  // ── Liên kết ngoài ────────────────────────────────────────
  // `appLoginUrl` đã bị xoá cùng nút CTA ở header. Nó chỉ có một consumer duy
  // nhất đó, và giá trị vẫn là placeholder https://app.example.com/login.
  // Khi có app thật, thêm lại ở đây rồi dựng nút đăng nhập.

  /** Email liên hệ (fallback) — ĐỔI SANG EMAIL THẬT trước khi lên production */
  contactEmail: "contact@example.com",

  /** Điện thoại liên hệ (fallback). Hai số cách nhau bằng " / " (KHÔNG dùng
      dấu gạch ngang – dễ hiểu nhầm là khoảng số). */
  contactPhone: "0902401079 / 0909967939",

  /** Địa chỉ liên hệ chính (fallback) — khớp dữ liệu trang Liên hệ */
  contactAddress:
    "P17, Đường Tôn Đức Thắng, KDT EcoCity Premia, P. Tân An, Tỉnh Đắk Lắk.",

  /** Mạng xã hội (footer) */
  social: {
    facebook: "https://www.facebook.com/yourpage",
    youtube: "https://www.youtube.com/@yourchannel",
    tiktok: "https://www.tiktok.com/@yourhandle",
    linkedin: "https://www.linkedin.com/company/yourcompany",
  },
} as const;

// Domain thuần (không protocol) — tiện cho image-proxy / widget
export const CMS_HOST = SITE.cmsDomain;
