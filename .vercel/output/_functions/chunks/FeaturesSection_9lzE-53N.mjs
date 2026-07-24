import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment } from './entrypoint_DdRf1b8J.mjs';
import { g as getLangFromUrl } from './Footer_ChqZwDWP.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$FeaturesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeaturesSection;
  const lang = getLangFromUrl(Astro2.url);
  const isEn = lang === "en";
  const {
    badge,
    title: sectionTitle,
    titleHighlight: sectionTitleHighlight,
    description: sectionDescription,
    button1Text,
    button1Url,
    button2Text,
    button2Url,
    featuresList
  } = Astro2.props;
  const defaultIcons = ["sparkles", "globe", "bell", "user-plus", "bar-chart", "share-2"];
  const defaultFeaturesEn = [
    {
      title: "Smart Answering",
      bullets: ["Understand conversation context", "Personalize for each customer"],
      icon: "sparkles"
    },
    {
      title: "Website Integration",
      bullets: ["1-line code installation", "Customize interface"],
      icon: "globe"
    },
    {
      title: "Admin Notification",
      bullets: ["Real-time alerts", "Human handoff support"],
      icon: "bell"
    },
    {
      title: "Lead Collection",
      bullets: ["Smart capture forms", "CRM & Google Sheets sync"],
      icon: "user-plus"
    },
    {
      title: "Analytics & Statistics",
      bullets: ["Conversion rate tracking", "Top questions insight"],
      icon: "bar-chart"
    },
    {
      title: "Omnichannel Support",
      bullets: ["Zalo OA, Messenger integration", "Telegram, WhatsApp support"],
      icon: "share-2"
    }
  ];
  const defaultFeaturesVi = [
    {
      title: "Trả lời thông minh",
      bullets: ["Hiểu ngữ cảnh hội thoại", "Cá nhân hoá theo khách"],
      icon: "sparkles"
    },
    {
      title: "Tích hợp Website",
      bullets: ["Cài đặt 1 dòng mã", "Tuỳ biến giao diện"],
      icon: "globe"
    },
    {
      title: "Thông báo Admin",
      bullets: ["Cảnh báo theo thời gian thực", "Chuyển người thật"],
      icon: "bell"
    },
    {
      title: "Thu thập Lead",
      bullets: ["Form thông minh", "Đồng bộ CRM"],
      icon: "user-plus"
    },
    {
      title: "Thống kê Analytics",
      bullets: ["Tỉ lệ chốt đơn", "Top câu hỏi"],
      icon: "bar-chart"
    },
    {
      title: "Đa kênh",
      bullets: ["Zalo OA, Messenger", "Telegram, WhatsApp"],
      icon: "share-2"
    }
  ];
  const features = featuresList && featuresList.length > 0 ? featuresList.map((f, i) => ({
    title: f.title,
    // description is a textarea — each line becomes a bullet
    bullets: f.description ? f.description.split("\n").map((s) => s.trim()).filter(Boolean) : [],
    icon: defaultIcons[i % defaultIcons.length],
    image: f.image?.node?.sourceUrl || null,
    link: f.link || null
  })) : (isEn ? defaultFeaturesEn : defaultFeaturesVi).map((f) => ({ ...f, image: null, link: null }));
  const displayTitle = sectionTitle || (isEn ? "Running a business is hard. " : "Vận hành doanh nghiệp rất khó. ");
  const displayTitleHighlight = sectionTitleHighlight || (isEn ? `${SITE.brandName} makes it easier` : `${SITE.brandName} khiến mọi thứ dễ hơn`);
  const displayDescription = sectionDescription || (isEn ? "One platform for every team — consulting, selling, and customer care — connecting AI and humans seamlessly." : "Một nền tảng cho mọi đội — tư vấn, bán hàng và chăm sóc khách hàng — kết nối liền mạch giữa AI và con người.");
  return renderTemplate`${maybeRenderHead()}<section id="features" class="feat-section" data-astro-cid-abm53p25> <div class="feat-container" data-astro-cid-abm53p25> <!-- Left Column (Static Title & Description) --> <div class="feat-left-col" data-astro-cid-abm53p25> <div class="feat-badge" data-astro-cid-abm53p25> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feat-badge-sparkle" data-astro-cid-abm53p25> <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" data-astro-cid-abm53p25></path> </svg> <span data-astro-cid-abm53p25>${badge || "Powered by AI"}</span> </div> <h2 class="feat-main-title" data-astro-cid-abm53p25> ${displayTitle} <br data-astro-cid-abm53p25> <span class="feat-title-highlight" data-astro-cid-abm53p25> ${displayTitleHighlight}<span class="feat-title-dot" data-astro-cid-abm53p25>.</span> </span> </h2> <p class="feat-subtitle" data-astro-cid-abm53p25> ${displayDescription} </p> <div class="feat-actions" data-astro-cid-abm53p25> <a${addAttribute(button1Url || "#demo", "href")} target="_blank" rel="noopener noreferrer" class="feat-btn feat-btn--primary" data-astro-cid-abm53p25> ${button1Text || (isEn ? "View Demo" : "Xem Demo")} </a> <a${addAttribute(button2Url || "#trial", "href")} target="_blank" rel="noopener noreferrer" class="feat-btn feat-btn--outline" data-astro-cid-abm53p25> ${button2Text || (isEn ? "Start Free Trial" : "Dùng thử miễn phí")} </a> </div> </div> <!-- Right Column (Features Grid) --> <div class="feat-right-col" data-astro-cid-abm53p25> <div class="feat-cards-grid" data-astro-cid-abm53p25> ${features.map((item) => renderTemplate`<div class="feat-card" data-astro-cid-abm53p25> <div class="feat-card-icon-wrap" data-astro-cid-abm53p25> ${item.image ? renderTemplate`<img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="feat-card-img" width="48" height="48" loading="lazy" decoding="async" data-astro-cid-abm53p25>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-abm53p25": true }, { "default": ($$result2) => renderTemplate`${item.icon === "sparkles" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feat-card-svg" data-astro-cid-abm53p25> <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" data-astro-cid-abm53p25></path> <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" data-astro-cid-abm53p25></path> </svg>`}${item.icon === "globe" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feat-card-svg" data-astro-cid-abm53p25> <circle cx="12" cy="12" r="10" data-astro-cid-abm53p25></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" data-astro-cid-abm53p25></path> <path d="M2 12h20" data-astro-cid-abm53p25></path> </svg>`}${item.icon === "bell" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feat-card-svg" data-astro-cid-abm53p25> <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" data-astro-cid-abm53p25></path> <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" data-astro-cid-abm53p25></path> </svg>`}${item.icon === "user-plus" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feat-card-svg" data-astro-cid-abm53p25> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-abm53p25></path> <circle cx="9" cy="7" r="4" data-astro-cid-abm53p25></circle> <line x1="19" x2="19" y1="8" y2="14" data-astro-cid-abm53p25></line> <line x1="22" x2="16" y1="11" y2="11" data-astro-cid-abm53p25></line> </svg>`}${item.icon === "bar-chart" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feat-card-svg" data-astro-cid-abm53p25> <line x1="18" x2="18" y1="20" y2="10" data-astro-cid-abm53p25></line> <line x1="12" x2="12" y1="20" y2="4" data-astro-cid-abm53p25></line> <line x1="6" x2="6" y1="20" y2="14" data-astro-cid-abm53p25></line> </svg>`}${item.icon === "share-2" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feat-card-svg" data-astro-cid-abm53p25> <circle cx="18" cy="5" r="3" data-astro-cid-abm53p25></circle> <circle cx="6" cy="12" r="3" data-astro-cid-abm53p25></circle> <circle cx="18" cy="19" r="3" data-astro-cid-abm53p25></circle> <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" data-astro-cid-abm53p25></line> <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" data-astro-cid-abm53p25></line> </svg>`}` })}`} </div> <h3 class="feat-card-title" data-astro-cid-abm53p25>${item.title}</h3> <ul class="feat-card-bullets" data-astro-cid-abm53p25> ${item.bullets.map((bullet) => renderTemplate`<li class="feat-card-bullet" data-astro-cid-abm53p25> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feat-bullet-check" data-astro-cid-abm53p25> <polyline points="20 6 9 17 4 12" data-astro-cid-abm53p25></polyline> </svg> <span data-astro-cid-abm53p25>${bullet}</span> </li>`)} </ul> <a${addAttribute(item.link || "#more", "href")} class="feat-card-link" data-astro-cid-abm53p25> <span data-astro-cid-abm53p25>${isEn ? "Learn more" : "Tìm hiểu thêm"}</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-abm53p25> <line x1="5" x2="19" y1="12" y2="12" data-astro-cid-abm53p25></line> <polyline points="12 5 19 12 12 19" data-astro-cid-abm53p25></polyline> </svg> </a> </div>`)} </div> </div> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/FeaturesSection.astro", void 0);

export { $$FeaturesSection as $ };
