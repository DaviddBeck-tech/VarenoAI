const PRODUCTS = [
  {
    id: "chatvareno",
    slug: "chatvareno",
    name: "ChatVareno",
    tagline: {
      vi: "Trợ lý tư vấn & bán hàng bằng AI Agent",
      en: "AI Agent for sales and customer support"
    },
    description: {
      vi: "Tự động tư vấn, trả lời và chốt đơn 24/7 trên Website, Zalo OA và Messenger. Thu thập thông tin khách hàng và bàn giao cho nhân viên khi cần.",
      en: "Advises, answers and closes deals 24/7 across your website, Zalo OA and Messenger. Captures leads and hands off to a human when needed."
    },
    highlights: {
      vi: [
        "Tư vấn, trả lời và chốt đơn 24/7",
        "Chạy trên Website, Zalo OA và Messenger",
        "Tự động thu thập thông tin khách hàng",
        "Bàn giao cho nhân viên khi cần"
      ],
      en: [
        "Advises, answers and closes deals 24/7",
        "Runs on your website, Zalo OA and Messenger",
        "Captures customer details automatically",
        "Hands off to a human when needed"
      ]
    },
    seo: {
      vi: {
        title: "ChatVareno: Trợ lý AI tư vấn & bán hàng 24/7",
        description: "Nền tảng AI Agent giúp doanh nghiệp Việt tư vấn, chốt đơn và chăm sóc khách hàng tự động trên đa kênh."
      },
      en: {
        title: "ChatVareno: AI Sales & Support Agent, 24/7",
        description: "An AI Agent platform that helps businesses advise, sell and support customers automatically across every channel."
      }
    },
    icon: "message-circle",
    order: 1,
    status: "live",
    showInNav: true,
    // ChatVareno là site riêng đang chạy thật → /chatvareno/ nhúng nó (giữ URL local)
    externalUrl: "https://chatvareno.com"
  },
  {
    id: "contentai",
    slug: "contentai",
    name: "ContentAI",
    tagline: {
      vi: "Sản xuất nội dung tự động bằng AI",
      en: "Automated AI content production"
    },
    description: {
      vi: "Lên dàn ý, viết và tối ưu SEO cho bài blog, mô tả sản phẩm và nội dung mạng xã hội, đúng giọng văn thương hiệu của bạn.",
      en: "Outlines, writes and SEO-optimises blog posts, product descriptions and social content, in your brand's own voice."
    },
    highlights: {
      vi: [
        "Lên dàn ý rồi viết bản nháp đầu tiên",
        "Tối ưu SEO ngay trong lúc viết",
        "Bài blog, mô tả sản phẩm, nội dung mạng xã hội",
        "Giữ đúng giọng văn thương hiệu của bạn"
      ],
      en: [
        "Outlines, then drafts the first version",
        "Optimises for SEO while it writes",
        "Blog posts, product copy, social content",
        "Keeps your brand's own voice"
      ]
    },
    seo: {
      vi: {
        title: "ContentAI: Sản xuất nội dung tự động bằng AI",
        description: "Công cụ AI giúp lên dàn ý, viết và tối ưu SEO nội dung theo giọng văn thương hiệu."
      },
      en: {
        title: "ContentAI: Automated AI Content Production",
        description: "An AI tool that outlines, writes and SEO-optimises content in your brand's voice."
      }
    },
    icon: "pen-line",
    order: 2,
    status: "coming-soon",
    showInNav: true
  }
];
const productPath = (p) => `/${p.slug}/`;
const navProducts = () => PRODUCTS.filter((p) => p.showInNav).slice().sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
const findProduct = (id) => {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) throw new Error(`[products] Không tìm thấy sản phẩm: ${id}`);
  return p;
};

export { findProduct as f, navProducts as n, productPath as p };
