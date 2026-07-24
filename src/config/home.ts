// ─────────────────────────────────────────────────────────────
//  NỘI DUNG TRANG CHỦ — NGUỒN SỰ THẬT DUY NHẤT
// ─────────────────────────────────────────────────────────────
//  Trước đây copy trang chủ nằm rải ở ba nơi: props inline trong
//  src/pages/index.astro, bản sao chép tay trong src/pages/en/index.astro,
//  và các mảng hardcode bên trong từng component. Sửa một tiêu đề phải
//  sửa hai file, và vi/en lệch nhau lúc nào không hay.
//
//  Giờ cả hai file page đọc chung object này. `satisfies HomeContent` ép
//  TypeScript báo lỗi nếu thiếu `vi` hoặc `en` ở bất kỳ chuỗi nào — cùng cơ
//  chế bảo vệ mà src/config/products.ts đang dùng.
//
//  Thêm SẢN PHẨM MỚI không chạm file này: lưới sản phẩm đọc từ products.ts.
//  Tên thương hiệu lấy từ site.ts qua placeholder {brand}.
//
//  Vì sao nằm ở config/ mà không phải content/? `src/content/` là thư mục Astro
//  dành riêng cho content collections; đặt một file thường ở đó khiến mỗi lần
//  dev/build đều kêu "[WARN] Content config not loaded". products.ts ngay cạnh
//  cũng chứa nội dung song ngữ, nên config/ là chỗ nhất quán.
// ─────────────────────────────────────────────────────────────

import type { Localized } from "./products";
import { NAV } from "./nav";

interface Cta {
  label: Localized;
  /** Đường dẫn GỐC (không có /en). Người gọi phải bọc translatePath(). */
  href: string;
}

interface Pillar {
  /** Khoá icon, giải trong ValuesSection.astro */
  icon: string;
  title: Localized;
  desc: Localized;
  /**
   * 2–3 điểm cụ thể hoá lời hứa ở `desc`. Diễn giải, KHÔNG con số: đây là cam
   * kết nguyên tắc, không phải bảng thông số. Bỏ trống vẫn chạy (card chỉ hiện
   * desc). Hiện trong chồng card scroll-stacking ở ValuesSection.
   */
  points: readonly Localized[];
}

interface HomeContent {
  hero: {
    badge: Localized;
    /** Dòng đầu tiêu đề, đứng yên */
    titleLead: Localized;
    /**
     * Các cụm từ xoay ở dòng hai, stagger từng ký tự.
     * Xoay LĨNH VỰC sản phẩm, không phải tính từ. Bề rộng hệ sinh thái do lớp
     * thẻ trôi quanh hero gánh, nên ô xoay chỉ cần hiện một lĩnh vực mỗi lượt.
     */
    rotating: readonly Localized[];
    /** Tối đa 20 từ: hero phải vừa một màn hình, CTA không bị đẩy xuống dưới */
    subtitle: Localized;
    imageAlt: Localized;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  showcase: {
    title: Localized;
    subtitle: Localized;
  };
  platform: {
    /** Chỉ còn một consumer: các chip trôi quanh UmbrellaHero. */
    capabilities: readonly Localized[];
  };
  values: {
    title: Localized;
    titleAccent: Localized;
    subtitle: Localized;
    pillars: readonly Pillar[];
  };
  industries: {
    title: Localized;
    titleAccent: Localized;
    subtitle: Localized;
    /**
     * Mỗi ngành là một THẺ BENTO: icon + tên + một dòng use-case ngắn.
     * `featured: true` cho đúng MỘT mục — nó chiếm ô lớn (2×2) dẫn hướng mắt;
     * các mục còn lại là ô nhỏ 1×1. `icon` là khoá trong ProductIcon.astro.
     */
    items: readonly {
      name: Localized;
      /** Use-case ngắn (≤25 từ), diễn giải AI làm gì cho ngành đó */
      blurb: Localized;
      icon: string;
      featured?: boolean;
    }[];
    href: string;
  };
  news: {
    title: Localized;
    subtitle: Localized;
    viewAll: Localized;
    empty: Localized;
  };
}

export const HOME = {
  hero: {
    badge: {
      vi: "Hệ sinh thái AI cho doanh nghiệp Việt",
      en: "An AI ecosystem for Vietnamese business",
    },
    titleLead: {
      vi: "Doanh nghiệp Việt bắt đầu với",
      en: "Vietnamese business starts with",
    },
    rotating: [
      { vi: "tư vấn bán hàng", en: "sales conversations" },
      { vi: "sản xuất nội dung", en: "content production" },
      { vi: "tự động hoá", en: "automation" },
    ],
    // Không nhắc lại ba lĩnh vực đã xoay ở tiêu đề.
    subtitle: {
      vi: "Chung một tài khoản, một nguồn dữ liệu khách hàng và một bảng điều khiển.",
      en: "One account, one source of customer data, one dashboard.",
    },
    imageAlt: {
      vi: "Giao diện các sản phẩm trong hệ sinh thái VarenoAI",
      en: "The product interfaces across the VarenoAI ecosystem",
    },
    primaryCta: {
      label: { vi: "Khám phá dịch vụ", en: "Explore services" },
      href: NAV.services,
    },
    // Nhãn PHẢI trùng cta.button trong i18n/ui.ts: cùng một ý định thì
    // chỉ được có một nhãn trên toàn trang.
    secondaryCta: {
      label: { vi: "Liên hệ tư vấn", en: "Talk to us" },
      href: NAV.contact,
    },
  },

  showcase: {
    title: {
      vi: "Một nền tảng. Nhiều sản phẩm AI.",
      en: "One platform. Many AI products.",
    },
    subtitle: {
      vi: "Mỗi sản phẩm chạy độc lập, nhưng dùng chung nền tảng dữ liệu và một tài khoản đăng nhập.",
      en: "Each product stands on its own, but they share one data platform and one login.",
    },
  },

  // `label` và `blurb` đã bị xoá cùng dải nền tảng dưới EcosystemShowcase.
  // Thông điệp "một nền tảng" giờ do tiêu đề + phụ đề của section đó gánh.
  platform: {
    capabilities: [
      { vi: "Một tài khoản đăng nhập", en: "One login" },
      { vi: "Dữ liệu khách hàng dùng chung", en: "Shared customer data" },
      { vi: "Bảng điều khiển hợp nhất", en: "Unified dashboard" },
      { vi: "Bảo mật cấp doanh nghiệp", en: "Enterprise-grade security" },
    ],
  },

  values: {
    // Con số trong tiêu đề PHẢI khớp số phần tử `pillars` bên dưới. Đang là 4.
    title: { vi: "Bốn nguyên tắc chúng tôi", en: "Four principles we" },
    titleAccent: { vi: " không đánh đổi", en: " do not trade away" },
    subtitle: {
      vi: "Không chạy theo tính năng. Chúng tôi bám vào những điều quan trọng nhất với doanh nghiệp Việt: dữ liệu, tiếng Việt, tốc độ và vai trò của con người.",
      en: "We do not chase features. We hold to what matters most for Vietnamese businesses: your data, your language, speed, and the human in the loop.",
    },
    pillars: [
      {
        icon: "lock",
        title: {
          vi: "Dữ liệu của bạn là của bạn",
          en: "Your data belongs to you",
        },
        desc: {
          vi: "Không bao giờ dùng dữ liệu khách hàng của bạn để huấn luyện mô hình công khai. Mọi kết nối đều mã hoá, và bạn toàn quyền xuất hay xoá bất cứ lúc nào.",
          en: "We never use your customer data to train public models. Every connection is encrypted, and you can export or delete it at any time.",
        },
        points: [
          { vi: "Mã hoá đầu-cuối mọi kết nối", en: "End-to-end encryption on every connection" },
          {
            vi: "Không huấn luyện mô hình công khai bằng dữ liệu của bạn",
            en: "No public model is trained on your data",
          },
          { vi: "Xuất và xoá dữ liệu bất cứ lúc nào", en: "Export and delete your data anytime" },
        ],
      },
      {
        icon: "globe",
        title: { vi: "Tiếng Việt bản địa", en: "Native Vietnamese" },
        desc: {
          vi: "Tinh chỉnh cho ngữ cảnh, cách xưng hô và văn hoá kinh doanh Việt Nam, không phải bản dịch của một công cụ nước ngoài.",
          en: "Tuned for Vietnamese context, forms of address and business culture, not a translation of a foreign tool.",
        },
        points: [
          { vi: "Hiểu cách xưng hô theo vai vế", en: "Understands Vietnamese forms of address" },
          {
            vi: "Nắm ngữ cảnh và thói quen mua sắm của người Việt",
            en: "Knows local context and buying habits",
          },
          { vi: "Trả lời tự nhiên, không cứng như máy dịch", en: "Replies naturally, not like a translator" },
        ],
      },
      {
        icon: "zap",
        title: { vi: "Triển khai trong vài giờ", en: "Live in hours" },
        desc: {
          vi: "Cấu hình hoàn toàn bằng giao diện, không cần đội kỹ thuật riêng. Thiết lập một lần rồi dùng chung cho mọi sản phẩm trong hệ sinh thái.",
          en: "Configure it entirely through the UI, no dedicated engineering team. Set it up once and share it across every product in the ecosystem.",
        },
        points: [
          { vi: "Cấu hình hoàn toàn bằng giao diện", en: "Configure everything through the UI" },
          { vi: "Không cần lập trình hay đội IT riêng", en: "No coding or dedicated IT team" },
          { vi: "Thiết lập một lần, dùng cho mọi sản phẩm", en: "Set up once, use across every product" },
        ],
      },
      {
        icon: "users",
        title: { vi: "Con người luôn nắm quyền", en: "Humans stay in control" },
        desc: {
          vi: "AI lo phần lặp đi lặp lại, còn quyết định vẫn ở bạn. Luôn có nút bàn giao cho nhân viên thật ngay khi cuộc trò chuyện cần đến con người.",
          en: "AI handles the repetitive work; the decisions stay with you. A human handoff is one step away whenever a conversation needs a real person.",
        },
        points: [
          { vi: "AI đề xuất, nhân viên quyết định", en: "AI suggests, your team decides" },
          { vi: "Bàn giao cho người thật chỉ bằng một bước", en: "Hand off to a human in one step" },
          {
            vi: "Xem lại và chỉnh câu trả lời trước khi gửi",
            en: "Review and edit replies before they go out",
          },
        ],
      },
    ],
  },

  industries: {
    title: { vi: "Phù hợp với", en: "A fit for" },
    titleAccent: { vi: " nhiều lĩnh vực", en: " many sectors" },
    subtitle: {
      vi: "Cùng một nền tảng, cấu hình khác nhau cho từng bài toán kinh doanh.",
      en: "One platform, configured differently for each business problem.",
    },
    items: [
      {
        name: { vi: "Bán lẻ & TMĐT", en: "Retail & E-commerce" },
        blurb: {
          vi: "Tư vấn size, kiểm tồn kho và chốt đơn 24/7 ngay trên Website, Zalo OA và Messenger.",
          en: "Advises on sizing, checks stock and closes orders 24/7 right on your website, Zalo OA and Messenger.",
        },
        icon: "shopping-bag",
        featured: true,
      },
      {
        name: { vi: "Giáo dục & Đào tạo", en: "Education & Training" },
        blurb: {
          vi: "Giải đáp học phí, tư vấn tuyển sinh và nhắc lịch học tự động.",
          en: "Answers tuition questions, guides admissions and reminds students of schedules.",
        },
        icon: "graduation-cap",
        featured: false,
      },
      {
        name: { vi: "Bất động sản", en: "Real Estate" },
        blurb: {
          vi: "Lọc nhu cầu, gửi bảng hàng phù hợp và đặt lịch xem nhà.",
          en: "Qualifies interest, sends matching listings and books property viewings.",
        },
        icon: "building",
        featured: false,
      },
      {
        name: { vi: "Dịch vụ & CSKH", en: "Services & Support" },
        blurb: {
          vi: "Trả lời câu hỏi thường gặp, tiếp nhận và phân loại yêu cầu hỗ trợ.",
          en: "Answers common questions, receives and triages support requests.",
        },
        icon: "headset",
        featured: false,
      },
      {
        name: { vi: "Marketing & Nội dung", en: "Marketing & Content" },
        blurb: {
          vi: "Viết bài blog, mô tả sản phẩm và nội dung mạng xã hội đúng giọng thương hiệu.",
          en: "Writes blog posts, product descriptions and social content in your brand voice.",
        },
        icon: "megaphone",
        featured: false,
      },
      {
        name: { vi: "Chuỗi nhiều chi nhánh", en: "Multi-branch Chains" },
        blurb: {
          vi: "Một cấu hình dùng chung, dữ liệu và hội thoại tách riêng theo từng chi nhánh.",
          en: "One shared setup, with data and conversations separated per branch.",
        },
        icon: "store",
        featured: false,
      },
    ],
    href: NAV.solutions,
  },

  news: {
    title: { vi: "Cập nhật mới nhất", en: "Latest updates" },
    subtitle: {
      vi: "Sản phẩm mới, hướng dẫn và câu chuyện từ đội ngũ của chúng tôi.",
      en: "New products, guides and stories from our team.",
    },
    viewAll: { vi: "Xem tất cả", en: "View all" },
    empty: {
      vi: "Sắp có bài viết mới. Ghé lại sau nhé!",
      en: "Fresh articles are on the way. Check back soon!",
    },
  },
} as const satisfies HomeContent;
