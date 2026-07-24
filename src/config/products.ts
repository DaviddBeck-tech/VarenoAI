// ─────────────────────────────────────────────────────────────
//  REGISTRY SẢN PHẨM — NGUỒN SỰ THẬT DUY NHẤT
// ─────────────────────────────────────────────────────────────
//  Nuôi cùng lúc: dropdown "Dịch vụ" ở Header, trang /services/,
//  grid sản phẩm ở trang chủ umbrella, cột sản phẩm ở Footer, và sitemap.
//
//  Thêm một sản phẩm mới = thêm MỘT object ở dưới. Không phải sửa
//  Header/Footer/sitemap.
//
//  Vì sao nội dung song ngữ nằm ở ĐÂY mà không phải i18n/ui.ts?
//  ui.ts là Record<string,string> phẳng với `as const`, và t() ép kiểu
//  key = keyof ui['vi'] ⇒ mỗi key phải có mặt ở cả hai khối. Một sản phẩm
//  cần 8+ key (tagline, description, seo.title, seo.description...) × 2 ngôn
//  ngữ = 16 dòng rải rác. Dùng Record<Lang, string> ngay trong Product thì
//  thêm sản phẩm chỉ là một object, và TypeScript tự bắt lỗi nếu thiếu ngôn ngữ.
//  ui.ts chỉ giữ chuỗi khung (nav, footer, cta).
// ─────────────────────────────────────────────────────────────

export type Lang = "vi" | "en";
export type Localized<T = string> = Record<Lang, T>;

/**
 * CỐ Ý là `string` chứ không phải union các id đã biết.
 * Union buộc phải sửa type mỗi lần thêm sản phẩm — đúng thứ registry này
 * sinh ra để tránh. Đổi lại ta mất kiểm tra lúc compile của findProduct(),
 * nhưng hàm đó đã `throw` lúc chạy nếu id sai.
 */
export type ProductId = string;

export interface Product {
  /** Khoá ổn định: dùng cho key vòng lặp, analytics, tra cứu icon */
  id: ProductId;
  /** Đoạn URL — GIỐNG NHAU cho vi & en (xem bất biến trong nav.ts) */
  slug: string;
  /** Tên thương hiệu — không bao giờ dịch */
  name: string;
  /** Nhãn ngắn cho chỗ chật (mega-menu). Bỏ trống thì dùng `name`. */
  shortLabel?: string;
  /** Một dòng ngắn (≤60 ký tự) — hiện ở dòng 2 trong dropdown */
  tagline: Localized;
  /** 1–2 câu — dùng cho card ở /services/ và trang chủ */
  description: Localized;
  /**
   * Điểm chính, CHỈ hiện khi thẻ ở trang chủ được mở rộng.
   *
   * Mỗi mục là một mệnh đề đã có sẵn trong `description`, tách ra cho đọc quét
   * được. Cố ý không bịa năng lực mới và không có con số: sản phẩm chưa chạy
   * thật thì mọi "chính xác 94%" đều là văn nói.
   * Bỏ trống vẫn chạy — thẻ mở rộng khi đó chỉ hiện `description`.
   */
  highlights?: Localized<readonly string[]>;
  /** SEO riêng của trang /<slug>/ và /en/<slug>/ */
  seo: Localized<{ title: string; description: string }>;
  /**
   * KHOÁ icon, không phải SVG thô — <ProductIcon name={...}/> tự giải.
   * `string` chứ không phải union: khoá lạ sẽ rơi về glyph mặc định thay vì
   * làm vỡ build.
   */
  icon: string;
  /** Thứ tự ở mega-menu, /services/, footer, sitemap. Không đặt thì xếp cuối. */
  order?: number;
  /** Gom nhóm trong mega-menu khi hệ sinh thái vượt ~6 sản phẩm. Chưa dùng. */
  group?: string;
  /** Nhãn tuỳ ý ngoài coming-soon, ví dụ { vi: "Mới", en: "New" } */
  badge?: Localized;

  // Không có trường `accent`: toàn trang dùng MỘT màu thương hiệu (--primary),
  // sản phẩm phân biệt nhau bằng icon, trạng thái và độ đậm bề mặt, không bằng
  // hue. (Trường `accent: "primary" | "accent"` cũ là code chết — global.css
  // đặt --accent BẰNG --primary nên hai giá trị cho ra cùng một màu xanh.)
  // Muốn mỗi sản phẩm một màu: thêm `accentHsl: "265 70% 60%"` vào đây, rồi đổi
  // `hsl(var(--primary))` thành `hsl(var(--p-accent))` trong thẻ sản phẩm.

  /** 'coming-soon' vẫn có trang thật + vào sitemap, chỉ khác badge */
  status: "live" | "coming-soon";
  /** Bật/tắt ở dropdown, /services/, footer và sitemap */
  showInNav: boolean;
  /**
   * Nếu có: trang /<slug>/ KHÔNG dựng nội dung nội bộ mà NHÚNG (iframe)
   * site thật ở URL này — URL trình duyệt vẫn giữ /<slug>/ local.
   * Bản tiếng Anh tự nối "/en/". Bỏ trống nếu là trang nội bộ bình thường.
   * Sản phẩm có externalUrl bị loại khỏi sitemap của VarenoAI (nội dung
   * chính đã nằm trên domain riêng, tránh trùng lặp).
   */
  externalUrl?: string;
}

export const PRODUCTS: readonly Product[] = [
  {
    id: "chatvareno",
    slug: "chatvareno",
    name: "ChatVareno",
    tagline: {
      vi: "Trợ lý tư vấn & bán hàng bằng AI Agent",
      en: "AI Agent for sales and customer support",
    },
    description: {
      vi: "Tự động tư vấn, trả lời và chốt đơn 24/7 trên Website, Zalo OA và Messenger. Thu thập thông tin khách hàng và bàn giao cho nhân viên khi cần.",
      en: "Advises, answers and closes deals 24/7 across your website, Zalo OA and Messenger. Captures leads and hands off to a human when needed.",
    },
    highlights: {
      vi: [
        "Tư vấn, trả lời và chốt đơn 24/7",
        "Chạy trên Website, Zalo OA và Messenger",
        "Tự động thu thập thông tin khách hàng",
        "Bàn giao cho nhân viên khi cần",
      ],
      en: [
        "Advises, answers and closes deals 24/7",
        "Runs on your website, Zalo OA and Messenger",
        "Captures customer details automatically",
        "Hands off to a human when needed",
      ],
    },
    seo: {
      vi: {
        title: "ChatVareno: Trợ lý AI tư vấn & bán hàng 24/7",
        description:
          "Nền tảng AI Agent giúp doanh nghiệp Việt tư vấn, chốt đơn và chăm sóc khách hàng tự động trên đa kênh.",
      },
      en: {
        title: "ChatVareno: AI Sales & Support Agent, 24/7",
        description:
          "An AI Agent platform that helps businesses advise, sell and support customers automatically across every channel.",
      },
    },
    icon: "message-circle",
    order: 1,
    status: "live",
    showInNav: true,
    // ChatVareno là site riêng đang chạy thật → /chatvareno/ nhúng nó (giữ URL local)
    externalUrl: "https://chatvareno.com",
  },
  {
    id: "contentai",
    slug: "contentai",
    name: "ContentAI",
    tagline: {
      vi: "Sản xuất nội dung tự động bằng AI",
      en: "Automated AI content production",
    },
    description: {
      vi: "Lên dàn ý, viết và tối ưu SEO cho bài blog, mô tả sản phẩm và nội dung mạng xã hội, đúng giọng văn thương hiệu của bạn.",
      en: "Outlines, writes and SEO-optimises blog posts, product descriptions and social content, in your brand's own voice.",
    },
    highlights: {
      vi: [
        "Lên dàn ý rồi viết bản nháp đầu tiên",
        "Tối ưu SEO ngay trong lúc viết",
        "Bài blog, mô tả sản phẩm, nội dung mạng xã hội",
        "Giữ đúng giọng văn thương hiệu của bạn",
      ],
      en: [
        "Outlines, then drafts the first version",
        "Optimises for SEO while it writes",
        "Blog posts, product copy, social content",
        "Keeps your brand's own voice",
      ],
    },
    seo: {
      vi: {
        title: "ContentAI: Sản xuất nội dung tự động bằng AI",
        description:
          "Công cụ AI giúp lên dàn ý, viết và tối ưu SEO nội dung theo giọng văn thương hiệu.",
      },
      en: {
        title: "ContentAI: Automated AI Content Production",
        description:
          "An AI tool that outlines, writes and SEO-optimises content in your brand's voice.",
      },
    },
    icon: "pen-line",
    order: 2,
    status: "coming-soon",
    showInNav: true,
  },
];

/**
 * Nơi DUY NHẤT slug biến thành đường dẫn.
 * Lưu ý: KHÔNG có tiền tố /en ở đây — người gọi phải bọc translatePath().
 * (Nếu lưu sẵn `href` trong Product thì sớm muộn cũng có người quên /en.)
 */
export const productPath = (p: Product): string => `/${p.slug}/`;

/**
 * Sản phẩm hiện trong mega-menu / /services/ / footer / sitemap.
 * Sắp xếp TẠI ĐÂY để mọi consumer thừa hưởng cùng một thứ tự — thêm sản phẩm
 * mới chỉ cần đặt `order`, không phải sửa từng component.
 * `.slice()` vì PRODUCTS là readonly và `.sort()` sửa tại chỗ.
 */
export const navProducts = (): readonly Product[] =>
  PRODUCTS.filter((p) => p.showInNav)
    .slice()
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const findProduct = (id: ProductId): Product => {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) throw new Error(`[products] Không tìm thấy sản phẩm: ${id}`);
  return p;
};
