const SITE = {
  // ── Tên thương hiệu hiển thị ──────────────────────────────
  /** Tên ngắn dùng trong tiêu đề, footer, og:site_name... */
  brandName: "VarenoAI",
  /** Slogan/mô tả ngắn (fallback khi WordPress chưa có nội dung) */
  tagline: {
    vi: "Mô tả ngắn về sản phẩm của bạn.",
    en: "A short tagline for your product."
  },
  // ── Domain & kết nối ──────────────────────────────────────
  /** Domain frontend công khai (không có dấu / ở cuối) */
  siteUrl: "https://example.com",
  /** Hostname của CMS WordPress (chỉ host, không protocol) */
  cmsDomain: "cms.example.com",
  /** Endpoint WPGraphQL. Đổi qua .env: WORDPRESS_GRAPHQL_URL */
  graphqlUrl: "http://localhost:8888/example/graphql",
  /** Base URL ảnh upload của WordPress (có dấu / ở cuối) */
  uploadsBaseUrl: "https://cms.example.com/wp-content/uploads/",
  // ── Liên kết ngoài ────────────────────────────────────────
  // `appLoginUrl` đã bị xoá cùng nút CTA ở header. Nó chỉ có một consumer duy
  // nhất đó, và giá trị vẫn là placeholder https://app.example.com/login.
  // Khi có app thật, thêm lại ở đây rồi dựng nút đăng nhập.
  /** Email liên hệ (fallback) */
  contactEmail: "contact@example.com",
  /** Mạng xã hội (footer) */
  social: {
    facebook: "https://www.facebook.com/yourpage",
    youtube: "https://www.youtube.com/@yourchannel",
    tiktok: "https://www.tiktok.com/@yourhandle",
    linkedin: "https://www.linkedin.com/company/yourcompany"
  }
};

export { SITE as S };
