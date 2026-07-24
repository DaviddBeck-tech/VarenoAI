// ─────────────────────────────────────────────────────────────
//  NỘI DUNG TRANG GIỚI THIỆU (/about/ và /en/about/) — SONG NGỮ
// ─────────────────────────────────────────────────────────────
//  Một nguồn sự thật cho cả hai ngôn ngữ, giống src/config/home.ts.
//  Trang about.astro (vi) và en/about.astro giải [lang] rồi truyền
//  chuỗi phẳng xuống PageHero / AboutStory / ValuesSection.
//
//  Nguyên tắc nội dung: KHÔNG bịa số liệu (không "chính xác 94%").
//  Mọi con số ở đây đều suy ra được từ sản phẩm thật:
//    · 2  = ChatVareno + ContentAI (src/config/products.ts)
//    · 3  = Website + Zalo OA + Messenger (kênh của ChatVareno)
//    · 24/7, 100% tiếng Việt = bản chất sản phẩm.
// ─────────────────────────────────────────────────────────────

import type { Localized } from "./products";

interface AboutStat {
  value: string;
  label: Localized;
}

interface AboutPillar {
  icon: string;
  title: Localized;
  desc: Localized;
  points: Localized<readonly string[]>;
}

export const ABOUT = {
  hero: {
    badge: { vi: "Giới thiệu", en: "About" },
    titleLead: { vi: "Chúng tôi xây dựng AI cho", en: "We build AI for" },
    titleAccent: { vi: " doanh nghiệp Việt", en: " Vietnamese businesses" },
    subtitle: {
      vi: "VarenoAI tạo ra những công cụ AI hiểu tiếng Việt, hiểu cách người Việt kinh doanh — và triển khai được trong vài giờ, không cần đội kỹ thuật riêng.",
      en: "VarenoAI creates AI tools that understand Vietnamese — the language and the way business gets done — and that ship in hours, without a dedicated engineering team.",
    },
  },

  story: {
    eyebrow: { vi: "Câu chuyện của chúng tôi", en: "Our story" },
    heading: {
      vi: "Công nghệ AI đáng ra phải dành cho",
      en: "AI should have been built for",
    },
    headingAccent: { vi: " mọi doanh nghiệp", en: " every business" },
    paragraphs: {
      vi: [
        "Phần lớn công cụ AI hôm nay được xây cho tiếng Anh và cho các tập đoàn lớn. Doanh nghiệp Việt — nhất là các đội nhỏ — thường bị bỏ lại phía sau: chi phí cao, cài đặt phức tạp, và mô hình không thật sự hiểu tiếng Việt hay cách khách hàng Việt trò chuyện.",
        "VarenoAI ra đời để thu hẹp khoảng cách đó. Chúng tôi xây các sản phẩm AI nói tiếng Việt bản địa, kết nối sẵn với những kênh người Việt dùng mỗi ngày, và triển khai nhanh đến mức một chủ shop cũng tự làm được — không cần lập trình, không cần thuê đội kỹ thuật.",
      ],
      en: [
        "Most AI tools today are built for English and for large enterprises. Vietnamese businesses — especially small teams — get left behind: high cost, complex setup, and models that don't truly understand Vietnamese or the way local customers talk.",
        "VarenoAI exists to close that gap. We build AI products that speak Vietnamese natively, connect to the channels people here already use every day, and deploy fast enough that a shop owner can do it themselves — no coding, no engineering team required.",
      ],
    },
    missionLabel: { vi: "Sứ mệnh", en: "Mission" },
    mission: {
      vi: "Đưa AI hữu ích đến tay mọi doanh nghiệp Việt — dễ dùng, đáng tin, và bằng chính tiếng Việt.",
      en: "Put useful AI in the hands of every Vietnamese business — simple, trustworthy, and in Vietnamese.",
    },
    points: {
      vi: [
        "Tiếng Việt bản địa, không phải bản dịch máy",
        "Triển khai trong vài giờ, không cần lập trình",
        "Chi phí hợp lý cho cả những đội nhỏ nhất",
      ],
      en: [
        "Native Vietnamese, not machine translation",
        "Deployed in hours, with zero coding",
        "Priced for even the smallest teams",
      ],
    },
    stats: [
      { value: "2", label: { vi: "Sản phẩm AI", en: "AI products" } },
      { value: "24/7", label: { vi: "Vận hành liên tục", en: "Always on" } },
      { value: "3", label: { vi: "Kênh tích hợp", en: "Channels integrated" } },
      {
        value: "100%",
        label: { vi: "Tiếng Việt bản địa", en: "Native Vietnamese" },
      },
    ] as readonly AboutStat[],
  },

  values: {
    title: { vi: "Cách chúng tôi", en: "How we" },
    titleAccent: { vi: " làm sản phẩm", en: " build products" },
    subtitle: {
      vi: "Bốn nguyên tắc định hình mọi quyết định — từ dòng code đến cách chúng tôi đứng cạnh bạn.",
      en: "Four principles shape every decision we make — from the code to the way we stand beside you.",
    },
    pillars: [
      {
        icon: "globe",
        title: { vi: "Bản địa trước tiên", en: "Local first" },
        desc: {
          vi: "Sản phẩm của chúng tôi hiểu tiếng Việt như tiếng mẹ đẻ — từ cách xưng hô, viết tắt cho tới ngữ cảnh mua bán rất riêng của người Việt.",
          en: "Our products understand Vietnamese like a native — the forms of address, the abbreviations, and the very local context of how business gets done.",
        },
        points: {
          vi: [
            "Hiểu tiếng Việt tự nhiên, cả tiếng lóng và viết tắt",
            "Kết nối sẵn Website, Zalo OA và Messenger",
          ],
          en: [
            "Understands natural Vietnamese, slang and shorthand included",
            "Connects to Website, Zalo OA and Messenger out of the box",
          ],
        },
      },
      {
        icon: "zap",
        title: { vi: "Triển khai trong vài giờ", en: "Live in hours" },
        desc: {
          vi: "Không cần đội kỹ thuật, không chờ hàng tháng. Nạp dữ liệu, kết nối kênh và chạy ngay trong ngày.",
          en: "No engineering team, no waiting months. Load your data, connect a channel, and go live the same day.",
        },
        points: {
          vi: [
            "Nạp tài liệu hoặc website là dùng được",
            "Không phải viết một dòng code nào",
          ],
          en: [
            "Upload a document or a website and you're ready",
            "No need to write a single line of code",
          ],
        },
      },
      {
        icon: "shield",
        title: { vi: "Riêng tư theo mặc định", en: "Private by default" },
        desc: {
          vi: "Dữ liệu khách hàng của bạn không bao giờ được dùng để huấn luyện mô hình công khai. Mọi kết nối đều mã hoá, và bạn có thể xoá bất cứ lúc nào.",
          en: "Your customer data is never used to train public models. Every connection is encrypted, and you can delete it whenever you want.",
        },
        points: {
          vi: [
            "Không dùng dữ liệu của bạn để train mô hình công khai",
            "Bạn toàn quyền xoá dữ liệu bất cứ lúc nào",
          ],
          en: [
            "Your data never trains a public model",
            "You can delete everything at any time",
          ],
        },
      },
      {
        icon: "users",
        title: { vi: "Con người vẫn ở trung tâm", en: "People stay at the centre" },
        desc: {
          vi: "AI lo phần việc lặp lại; khi cần, nó bàn giao mượt mà cho nhân viên — để khách hàng luôn được chăm đúng người, đúng lúc.",
          en: "AI handles the repetitive work; when it matters, it hands off smoothly to your team — so customers always reach the right person at the right time.",
        },
        points: {
          vi: [
            "Bàn giao cho nhân viên ngay khi cần",
            "Thu thập thông tin để đội ngũ theo tiếp",
          ],
          en: [
            "Hands off to a human the moment it's needed",
            "Captures details so your team can follow up",
          ],
        },
      },
    ] as readonly AboutPillar[],
  },

  // Tiêu đề/phụ đề cho EcosystemShowcase (dùng lại component của trang chủ,
  // nhưng copy hướng về "chúng tôi xây gì" thay vì bán hàng). Bản thân lưới sản
  // phẩm đọc từ src/config/products.ts nên không lặp nội dung ở đây.
  ecosystem: {
    title: {
      vi: "Hai sản phẩm, một hệ sinh thái",
      en: "Two products, one ecosystem",
    },
    subtitle: {
      vi: "Những nguyên tắc trên không nằm trên giấy — chúng là cách chúng tôi dựng từng sản phẩm. Bấm vào một thẻ để xem chi tiết.",
      en: "Those principles aren't on paper — they're how we build each product. Tap a card to see more.",
    },
  },

  privacy: {
    title: { vi: "Dữ liệu của bạn thuộc về bạn", en: "Your data belongs to you" },
    description: {
      vi: "Chúng tôi không dùng dữ liệu khách hàng của bạn để huấn luyện mô hình công khai. Mọi kết nối đều được mã hoá, và bạn có thể xoá dữ liệu bất cứ lúc nào.",
      en: "We never use your customer data to train public models. Every connection is encrypted, and you can delete your data at any time.",
    },
    linkText: { vi: "Đọc chính sách bảo mật", en: "Read the privacy policy" },
  },

  // Thư ngỏ đóng trang. Ký "Đội ngũ VarenoAI" — KHÔNG bịa tên/ảnh một cá nhân.
  // Giọng ấm, mời liên hệ; nối tự nhiên sang CtaBand ngay sau.
  letter: {
    eyebrow: { vi: "Thư ngỏ", en: "A note from the team" },
    heading: {
      vi: "Vì sao chúng tôi làm việc này",
      en: "Why we do this",
    },
    paragraphs: {
      vi: [
        "Chúng tôi bắt đầu VarenoAI vì tin rằng AI hữu ích không nên là đặc quyền của các tập đoàn lớn hay của riêng những ai đọc trôi tiếng Anh. Một chủ shop, một trung tâm nhỏ, một đội vài người — tất cả đều xứng đáng có công cụ hiểu tiếng Việt và giúp họ bán hàng, chăm khách tốt hơn.",
        "Chúng tôi không hứa phép màu. Chúng tôi hứa những sản phẩm thật: dễ dùng, minh bạch về dữ liệu, và luôn đặt con người ở trung tâm. Nếu bạn đang cân nhắc đưa AI vào công việc, hãy nhắn cho chúng tôi — kể cả khi chỉ để hỏi cho rõ.",
      ],
      en: [
        "We started VarenoAI because we believe useful AI shouldn't be a privilege of large corporations or of those fluent in English alone. A shop owner, a small centre, a team of a few — everyone deserves tools that understand Vietnamese and help them sell and serve better.",
        "We don't promise magic. We promise real products: easy to use, honest about data, and always keeping people at the centre. If you're weighing whether to bring AI into your work, message us — even just to ask a question.",
      ],
    },
    signature: { vi: "Đội ngũ VarenoAI", en: "The VarenoAI team" },
    signatureRole: {
      vi: "Xây sản phẩm AI cho doanh nghiệp Việt",
      en: "Building AI products for Vietnamese business",
    },
  },
} as const;
