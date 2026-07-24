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
      vi: "",
      en: "",
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
          name: { vi: "Free", en: "Free" },
          price: { vi: "$0", en: "$0" },
          period: { vi: "vĩnh viễn", en: "forever" },
          desc: {
            vi: "Bắt đầu miễn phí với các tính năng thiết yếu.",
            en: "Start free with essential features.",
          },
          features: {
            vi: [
              "50 credits/tháng",
              "1 AI Agent",
              "1.0 MB dữ liệu huấn luyện",
              "5 trang thu thập dữ liệu",
              "1 thành viên nhóm",
              "Hỗ trợ cộng đồng",
            ],
            en: [
              "50 credits/month",
              "1 AI Agent",
              "1.0 MB training data",
              "5 data collection pages",
              "1 team member",
              "Community support",
            ],
          },
          ctaLabel: { vi: "Bắt đầu miễn phí", en: "Start for free" },
          ctaHref: NAV.contact,
        },
        {
          name: { vi: "Standard", en: "Standard" },
          price: { vi: "319.000 ₫", en: "319,000 ₫" },
          period: { vi: "/năm", en: "/yearly" },
          desc: {
            vi: "Cho cá nhân và đội nhóm nhỏ.",
            en: "For individuals and small teams.",
          },
          features: {
            vi: [
              "500 credits/tháng",
              "3 AI Agents",
              "10.0 MB dữ liệu huấn luyện",
              "50 trang thu thập dữ liệu",
              "2 thành viên nhóm",
              "Chuyển tiếp cho nhân viên",
              "Hỗ trợ cộng đồng",
              "Quản trị viên hỗ trợ",
            ],
            en: [
              "500 credits/month",
              "3 AI Agents",
              "10.0 MB training data",
              "50 data collection pages",
              "2 team members",
              "Transfer to staff",
              "Community support",
              "Support administrator",
            ],
          },
          ctaLabel: { vi: "Nâng cấp", en: "Upgrade" },
          ctaHref: NAV.contact,
        },
        {
          name: { vi: "Premium", en: "Premium" },
          price: { vi: "639.000 ₫", en: "639,000 ₫" },
          period: { vi: "/năm", en: "/yearly" },
          desc: {
            vi: "Gói phổ biến cho doanh nghiệp đang phát triển.",
            en: "The popular plan for growing businesses.",
          },
          features: {
            vi: [
              "1.500 credits/tháng",
              "5 AI Agents",
              "20.0 MB dữ liệu huấn luyện",
              "200 trang thu thập dữ liệu",
              "5 thành viên nhóm",
              "Chuyển tiếp cho nhân viên",
              "Hỗ trợ cộng đồng",
              "Quản trị viên hỗ trợ",
              "Ưu tiên hỗ trợ chuyên gia",
              "Tư vấn trực tiếp qua Zalo",
            ],
            en: [
              "1,500 credits/month",
              "5 AI Agents",
              "20.0 MB training data",
              "200 data collection pages",
              "5 team members",
              "Transfer to staff",
              "Community support",
              "Support administrator",
              "Priority expert support",
              "Direct consultation via Zalo",
            ],
          },
          highlighted: true,
          ctaLabel: { vi: "Dùng thử Premium", en: "Try Premium" },
          ctaHref: NAV.contact,
        },
        {
          name: { vi: "Business", en: "Business" },
          price: { vi: "2.239.000 ₫", en: "2,239,000 ₫" },
          period: { vi: "/năm", en: "/yearly" },
          desc: {
            vi: "Cho doanh nghiệp cần mở rộng quy mô.",
            en: "For businesses scaling their operations.",
          },
          features: {
            vi: [
              "5.000 credits/tháng",
              "10 AI Agents",
              "50.0 MB dữ liệu huấn luyện",
              "500 trang thu thập dữ liệu",
              "10 thành viên nhóm",
              "Chuyển tiếp cho nhân viên",
              "Hỗ trợ cộng đồng",
              "Quản trị viên hỗ trợ",
              "Ưu tiên hỗ trợ chuyên gia",
              "Tư vấn trực tiếp qua Zalo",
            ],
            en: [
              "5,000 credits/month",
              "10 AI Agents",
              "50.0 MB training data",
              "500 data collection pages",
              "10 team members",
              "Transfer to staff",
              "Community support",
              "Support administrator",
              "Priority expert support",
              "Direct consultation via Zalo",
            ],
          },
          ctaLabel: { vi: "Nâng cấp", en: "Upgrade" },
          ctaHref: NAV.contact,
        },
        {
          name: { vi: "Enterprise", en: "Enterprise" },
          price: { vi: "Liên hệ báo giá", en: "Contact us" },
          period: { vi: "", en: "" },
          desc: {
            vi: "Giải pháp tùy chỉnh cho doanh nghiệp của bạn.",
            en: "Customized solutions for your enterprise.",
          },
          features: {
            vi: [
              "Số credits không giới hạn",
              "Tùy chỉnh trợ lý AI",
              "Tùy chỉnh dữ liệu huấn luyện",
              "Tùy chỉnh số trang thu thập dữ liệu",
              "Tùy chỉnh số thành viên nhóm",
              "Hỗ trợ chuyển giao thủ công",
              "Hỗ trợ cộng đồng",
              "Quản trị viên hỗ trợ",
              "Ưu tiên hỗ trợ chuyên gia",
              "Tư vấn trực tiếp qua Zalo",
              "Tùy chỉnh cho doanh nghiệp của bạn",
            ],
            en: [
              "Unlimited credits",
              "Customized AI assistants",
              "Customized training data",
              "Customized data collection pages",
              "Customized team member limit",
              "Manual handover support",
              "Community support",
              "Support administrator",
              "Priority expert support",
              "Direct consultation via Zalo",
              "Customized for your enterprise",
            ],
          },
          ctaLabel: { vi: "Liên hệ Sales", en: "Contact Sales" },
          ctaHref: NAV.contact,
        },
      ] as readonly Tier[],
    },
  },
} as const;
