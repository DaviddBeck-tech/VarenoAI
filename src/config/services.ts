// ─────────────────────────────────────────────────────────────
//  NỘI DUNG TRANG DỊCH VỤ (/services/ và /en/services/) — SONG NGỮ
// ─────────────────────────────────────────────────────────────
//  Phần lưới sản phẩm vẫn đọc từ products.ts (ProductsGrid). File này CHỈ chứa
//  dữ liệu BẢNG GIÁ theo sản phẩm cho component tab ProductPricing.
//
//  ⚠️ GIÁ LÀ NỘI DUNG TẠM. ChatVareno là sản phẩm thật (chatvareno.com) — hãy
//  thay số dưới đây bằng GIÁ THẬT trước khi lên production, hoặc đồng bộ từ
//  chatvareno.com. Đây là scaffold giống defaultPlans trong PricingSection và
//  các placeholder trong site.ts, KHÔNG phải cam kết giá.
//
//  ContentAI đang coming-soon (products.ts) ⇒ KHÔNG có bảng giá; tab của nó
//  hiện trạng thái "Sắp ra mắt". Component tự suy ra điều này từ `status`, nên
//  ở đây chỉ cần cung cấp tiers cho sản phẩm đã chạy thật.
// ─────────────────────────────────────────────────────────────

import type { Localized } from "./products";
import { NAV } from "./nav";

interface Tier {
  name: Localized;
  /** TẠM — thay bằng giá thật. "Miễn phí"/"Liên hệ" cũng hợp lệ. */
  price: Localized;
  period: Localized;
  desc: Localized;
  features: Localized<readonly string[]>;
  /** Đúng MỘT tier nên đặt true (ô nổi bật). */
  highlighted?: boolean;
  ctaLabel: Localized;
  /** Đường dẫn GỐC (không /en) — trang bọc translatePath khi cần. */
  ctaHref: string;
}

export const SERVICES = {
  pricing: {
    eyebrow: { vi: "Bảng giá", en: "Pricing" },
    heading: {
      vi: "Chọn gói theo từng sản phẩm",
      en: "Pricing, by product",
    },
    subheading: {
      vi: "Bấm vào từng sản phẩm để xem bảng giá tương ứng. Không phí ẩn, huỷ bất cứ lúc nào.",
      en: "Switch product to see its pricing. No hidden fees, cancel anytime.",
    },
    note: {
      vi: "* Bảng giá đang là nội dung tạm — sẽ thay bằng giá chính thức.",
      en: "* Pricing shown is placeholder — final prices coming soon.",
    },

    // Trạng thái cho sản phẩm coming-soon (ContentAI).
    comingSoon: {
      title: { vi: "Bảng giá sắp ra mắt", en: "Pricing coming soon" },
      desc: {
        vi: "ContentAI đang trong giai đoạn hoàn thiện. Để lại thông tin để nhận báo giá và ưu đãi sớm ngay khi ra mắt.",
        en: "ContentAI is being finalised. Leave your details to get pricing and early-bird offers as soon as it launches.",
      },
      ctaLabel: { vi: "Đăng ký nhận tin", en: "Notify me" },
      ctaHref: NAV.contact,
    },

    // Bảng giá theo id sản phẩm. Chỉ sản phẩm đã chạy thật mới có tiers.
    tiers: {
      chatvareno: [
        {
          name: { vi: "Dùng thử", en: "Trial" },
          price: { vi: "Miễn phí", en: "Free" },
          period: { vi: "14 ngày", en: "14 days" },
          desc: {
            vi: "Trải nghiệm đầy đủ trước khi quyết định.",
            en: "Try everything before you decide.",
          },
          features: {
            vi: [
              "1 trợ lý AI",
              "100 hội thoại/tháng",
              "Kết nối 1 kênh",
              "Hỗ trợ qua cộng đồng",
            ],
            en: [
              "1 AI assistant",
              "100 conversations/month",
              "1 channel connected",
              "Community support",
            ],
          },
          ctaLabel: { vi: "Bắt đầu miễn phí", en: "Start free" },
          ctaHref: NAV.contact,
        },
        {
          name: { vi: "Chuyên nghiệp", en: "Pro" },
          price: { vi: "299.000đ", en: "$19" },
          period: { vi: "/tháng", en: "/month" },
          desc: {
            vi: "Cho cửa hàng và đội nhỏ bán hàng đa kênh.",
            en: "For shops and small teams selling across channels.",
          },
          features: {
            vi: [
              "3 trợ lý AI",
              "Hội thoại không giới hạn",
              "Đa kênh: Website, Zalo OA, Messenger",
              "Thu lead + đồng bộ CRM",
              "Phân tích hội thoại",
            ],
            en: [
              "3 AI assistants",
              "Unlimited conversations",
              "Omnichannel: Website, Zalo OA, Messenger",
              "Lead capture + CRM sync",
              "Conversation analytics",
            ],
          },
          highlighted: true,
          ctaLabel: { vi: "Chọn gói này", en: "Choose Pro" },
          ctaHref: NAV.contact,
        },
        {
          name: { vi: "Doanh nghiệp", en: "Enterprise" },
          price: { vi: "Liên hệ", en: "Custom" },
          period: { vi: "báo giá riêng", en: "let's talk" },
          desc: {
            vi: "Cho chuỗi nhiều chi nhánh, cần phân quyền và hỗ trợ riêng.",
            en: "For multi-branch chains needing roles and dedicated support.",
          },
          features: {
            vi: [
              "Mọi tính năng gói Chuyên nghiệp",
              "Không giới hạn trợ lý AI",
              "Quản lý đa chi nhánh, phân quyền",
              "Hỗ trợ riêng và cam kết SLA",
            ],
            en: [
              "Everything in Pro",
              "Unlimited AI assistants",
              "Multi-branch management and roles",
              "Dedicated support with an SLA",
            ],
          },
          ctaLabel: { vi: "Liên hệ báo giá", en: "Contact sales" },
          ctaHref: NAV.contact,
        },
      ] as readonly Tier[],
    },
  },
} as const;
