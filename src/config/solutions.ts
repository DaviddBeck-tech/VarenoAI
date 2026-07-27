// ─────────────────────────────────────────────────────────────
//  NỘI DUNG TRANG GIẢI PHÁP (/solutions/ và /en/solutions/) — SONG NGỮ
// ─────────────────────────────────────────────────────────────
//  Trục tổ chức: THEO BÀI TOÁN (không theo ngành) — vì trang chủ đã có lưới
//  ngành (IndustriesSection) trỏ về đây; trang này đi SÂU vào từng bài toán:
//  Vấn đề → AI làm gì → Kênh. Trình bày dạng HÀNG XEN KẼ (SolutionRows).
//
//  Nguyên tắc: KHÔNG bịa số liệu, KHÔNG khẳng định "đã có nhiều khách". Bài
//  toán nào chưa có sản phẩm chạy thật (ContentAI: coming-soon) thì gắn nhãn
//  "Sắp ra mắt" và KHÔNG dựng ảnh giao diện giả — chỉ dùng ảnh thật của sản
//  phẩm (ContentAI dùng chung Layout_1.png với EcosystemShowcase ở trang chủ).
//
//  Ảnh nằm trong SolutionRows.astro (map theo `imageKey`), không nhét vào đây:
//  config là dữ liệu thuần — giống products.ts / EcosystemShowcase.
// ─────────────────────────────────────────────────────────────

import type { Localized } from "./products";

interface SolutionRow {
  /** Tên sản phẩm — không dịch */
  product: string;
  /** Khoá icon (ProductIcon): message-circle | pen-line ... */
  icon: string;
  /** Khoá ảnh trong SolutionRows.SHOTS; null ⇒ hiện slot "Sắp ra mắt" */
  imageKey: string | null;
  title: Localized;
  /** Nỗi đau của khách — một câu */
  problem: Localized;
  /** AI làm gì — 2–3 gạch đầu dòng */
  points: Localized<readonly string[]>;
  /** Chip kênh (không dịch). Bỏ trống với bài toán không gắn kênh. */
  channels?: readonly string[];
  /** Nhãn cho bài toán chưa chạy thật (ví dụ ContentAI) */
  badge?: Localized;
  imageAlt?: Localized;
}

interface DeployStep {
  title: Localized;
  desc: Localized;
}

export const SOLUTIONS = {
  hero: {
    badge: { vi: "Giải pháp", en: "Solutions" },
    titleLead: { vi: "Một nền tảng, cấu hình cho", en: "One platform, configured for" },
    titleAccent: { vi: " đúng bài toán của bạn", en: " your exact problem" },
    subtitle: {
      vi: "Cùng một nền tảng AI, cấu hình khác nhau cho từng bài toán — tư vấn bán hàng, chăm sóc khách hàng, thu lead hay sản xuất nội dung. Lên sóng trong vài giờ, không cần đội kỹ thuật.",
      en: "One AI platform, configured differently for each problem — sales, customer care, lead capture or content. Live in hours, no engineering team needed.",
    },
  },

  rowsHead: {
    eyebrow: { vi: "Theo bài toán", en: "By problem" },
    heading: {
      vi: "Bạn đang cần giải quyết điều gì?",
      en: "What are you trying to solve?",
    },
    subheading: {
      vi: "Chọn bài toán gần nhất với bạn — mỗi cái là một cấu hình sẵn của cùng một nền tảng.",
      en: "Pick the problem closest to yours — each is a ready configuration of the same platform.",
    },
  },

  rows: [
    {
      product: "ChatVareno",
      icon: "message-circle",
      imageKey: "sales",
      title: { vi: "Tư vấn & chốt đơn tự động", en: "Automated advice & closing" },
      problem: {
        vi: "Khách nhắn hỏi giá, tồn kho hay tư vấn lúc nửa đêm — nhân viên không trực kịp, thế là mất đơn.",
        en: "Customers ask about price, stock or advice at midnight — no one is on shift, and the sale slips away.",
      },
      points: {
        vi: [
          "Tư vấn sản phẩm và kiểm tồn kho ngay trong hội thoại",
          "Báo giá và chốt đơn 24/7, không để khách chờ",
          "Hiểu tiếng Việt bản địa, cả tiếng lóng và viết tắt",
        ],
        en: [
          "Advises on products and checks stock inside the chat",
          "Quotes and closes orders 24/7, no waiting",
          "Understands native Vietnamese, slang and shorthand",
        ],
      },
      channels: ["Website", "Zalo OA", "Messenger"],
      imageAlt: {
        vi: "Khung chat ChatVareno đang tư vấn khách trên website",
        en: "The ChatVareno chat widget advising a customer on a website",
      },
    },
    {
      product: "ChatVareno",
      icon: "message-circle",
      imageKey: "support",
      title: { vi: "Chăm sóc khách hàng 24/7", en: "24/7 customer support" },
      problem: {
        vi: "Tổng đài quá tải vì những câu hỏi lặp đi lặp lại; khách chờ lâu rồi bỏ đi.",
        en: "Your support desk is swamped by repetitive questions; customers wait, then leave.",
      },
      points: {
        vi: [
          "Tự trả lời câu hỏi thường gặp, tức thì",
          "Tiếp nhận và phân loại yêu cầu hỗ trợ",
          "Bàn giao cho nhân viên thật ngay khi cần",
        ],
        en: [
          "Answers common questions instantly",
          "Receives and triages support requests",
          "Hands off to a human the moment it's needed",
        ],
      },
      channels: ["Website", "Zalo OA", "Messenger"],
      imageAlt: {
        vi: "Bảng kết nối đa kênh của ChatVareno: Website, Messenger, Zalo",
        en: "ChatVareno multi-channel connections: Website, Messenger, Zalo",
      },
    },
    {
      product: "ChatVareno",
      icon: "message-circle",
      imageKey: "leads",
      title: { vi: "Thu thập & nuôi dưỡng lead", en: "Capture & nurture leads" },
      problem: {
        vi: "Thông tin khách rơi rớt khắp nơi, không ai theo tiếp — cơ hội bán hàng trôi mất.",
        en: "Customer details scatter everywhere and no one follows up — opportunities are lost.",
      },
      points: {
        vi: [
          "Lọc nhu cầu và thu thông tin khách một cách tự nhiên",
          "Đồng bộ về CRM và Google Sheets",
          "Đặt lịch hẹn tự động và nhắc lịch giúp bạn",
        ],
        en: [
          "Qualifies intent and captures details naturally",
          "Syncs to your CRM and Google Sheets",
          "Books appointments and sends reminders for you",
        ],
      },
      channels: ["Website", "Zalo OA", "Messenger"],
      imageAlt: {
        vi: "Bảng phân tích hội thoại của ChatVareno",
        en: "The ChatVareno conversation analytics dashboard",
      },
    },
    {
      product: "ContentAI",
      icon: "pen-line",
      // Cùng ảnh với thẻ ContentAI ở EcosystemShowcase (trang chủ): một sản
      // phẩm chỉ nên có một hình trên toàn site.
      imageKey: "content",
      badge: { vi: "Sắp ra mắt", en: "Coming soon" },
      title: { vi: "Sản xuất nội dung đều đặn", en: "Consistent content production" },
      problem: {
        vi: "Không đủ người và thời gian để viết bài blog, mô tả sản phẩm hay nội dung mạng xã hội đều đặn.",
        en: "Not enough people or time to keep writing blogs, product copy and social content.",
      },
      points: {
        vi: [
          "Lên dàn ý rồi viết bản nháp đầu tiên",
          "Tối ưu SEO ngay trong lúc viết",
          "Giữ đúng giọng văn thương hiệu của bạn",
        ],
        en: [
          "Outlines, then drafts the first version",
          "Optimises for SEO as it writes",
          "Keeps your brand's own voice",
        ],
      },
      imageAlt: {
        vi: "Giao diện soạn thảo nội dung của ContentAI",
        en: "The ContentAI content editor interface",
      },
    },
  ] as readonly SolutionRow[],

  deploy: {
    eyebrow: { vi: "Triển khai", en: "Getting started" },
    heading: {
      vi: "Lên sóng trong vài giờ, không cần lập trình",
      en: "Live in hours, without any coding",
    },
    subheading: {
      vi: "Ba bước, làm hoàn toàn bằng giao diện. Thiết lập một lần, dùng chung cho mọi bài toán.",
      en: "Three steps, entirely through the UI. Set it up once, use it across every problem.",
    },
    steps: [
      {
        title: { vi: "Chọn bài toán", en: "Pick your problem" },
        desc: {
          vi: "Cho chúng tôi biết mục tiêu: tư vấn bán hàng, chăm sóc khách hàng hay thu lead.",
          en: "Tell us the goal: sales, customer care or capturing leads.",
        },
      },
      {
        title: { vi: "Nạp dữ liệu & cấu hình", en: "Load data & configure" },
        desc: {
          vi: "Nạp tài liệu hoặc website, chỉnh giọng trả lời và kết nối kênh — không viết dòng code nào.",
          en: "Upload a document or website, tune the voice and connect a channel — no code at all.",
        },
      },
      {
        title: { vi: "Lên sóng đa kênh", en: "Go live everywhere" },
        desc: {
          vi: "Chạy thật trên Website, Zalo OA và Messenger ngay trong ngày.",
          en: "Go live on your website, Zalo OA and Messenger the same day.",
        },
      },
    ] as readonly DeployStep[],
  },

  // Header cho FeaturesSection (dùng bộ năng lực mặc định song ngữ của nó).
  capabilities: {
    badge: { vi: "Năng lực dùng chung", en: "Shared capabilities" },
    title: { vi: "Mọi giải pháp đều có sẵn", en: "Every solution comes with" },
    titleAccent: { vi: "năng lực nền tảng", en: "the platform's core" },
    description: {
      vi: "Dù bạn chọn bài toán nào, nền tảng đều mang theo những năng lực này — không phải mua thêm.",
      en: "Whichever problem you pick, the platform brings these along — nothing extra to buy.",
    },
  },
} as const;
