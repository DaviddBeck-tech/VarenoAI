import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { b as renderTemplate, d as defineScriptVars, c as addAttribute, m as maybeRenderHead } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';
import { g as getLangFromUrl } from './Footer_ChqZwDWP.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    badgeText,
    titleMain,
    titleHighlight,
    subtitle,
    btn1Text,
    btn1Link,
    btn2Text,
    btn2Link,
    mockupImageUrl,
    mockupImages
  } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const isEn = lang === "en";
  const cmsWords = (titleHighlight || "").split("\n").map((w) => w.trim()).filter(Boolean);
  const rotatingWords = cmsWords.length > 0 ? cmsWords : isEn ? ["consult", "close deals", "care for clients"] : ["tư vấn", "chốt đơn", "chăm sóc KH"];
  const wpSlides = (mockupImages ?? []).filter((src) => Boolean(src));
  const fallbackSlides = [
    mockupImageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
  ];
  const bgSlides = wpSlides.length > 0 ? wpSlides : fallbackSlides;
  return renderTemplate(_a || (_a = __template(["", '<section class="hero" id="hero" data-astro-cid-nlow4r3u> <!-- Background slider --> <div class="hero-bg" data-astro-cid-nlow4r3u> ', ' <div class="hero-overlay" data-astro-cid-nlow4r3u></div> </div> <!-- Content --> <div class="hero-content" data-astro-cid-nlow4r3u> <!-- Badge --> <p class="hero-badge" data-astro-cid-nlow4r3u> ', ' </p> <!-- Title --> <h1 class="hero-title" data-astro-cid-nlow4r3u> ', ' <span class="hero-rotating-wrap" data-astro-cid-nlow4r3u> ', '<span class="hero-rotating-word" id="hero-rotating-word" data-astro-cid-nlow4r3u> ', ' </span><span class="hero-title-dot" data-astro-cid-nlow4r3u>.</span> </span> </h1> <!-- Subtitle --> <p class="hero-subtitle" data-astro-cid-nlow4r3u> ', ' </p> <!-- CTA Buttons --> <div class="hero-actions" data-astro-cid-nlow4r3u> <a', ' target="_blank" rel="noopener noreferrer" class="hero-btn hero-btn--outline" data-astro-cid-nlow4r3u> ', " </a> <a", ' target="_blank" rel="noopener noreferrer" class="hero-btn hero-btn--primary" data-astro-cid-nlow4r3u> ', ' </a> </div> <!-- Slider Dots indicator --> <div class="hero-bg-dots" data-astro-cid-nlow4r3u> ', " </div> </div> </section> <!-- Pass rotating words and bgSlides count to script --> <script>(function(){", '\n  // Title rotation\n  const el = document.getElementById("hero-rotating-word");\n  if (el && rotatingWords.length > 1) {\n    let idx = 0;\n    const cycle = () => {\n      idx = (idx + 1) % rotatingWords.length;\n      el.classList.add("hero-rotating-word--exit");\n      setTimeout(() => {\n        el.textContent = rotatingWords[idx];\n        el.classList.remove("hero-rotating-word--exit");\n        el.classList.add("hero-rotating-word--enter");\n        setTimeout(() => el.classList.remove("hero-rotating-word--enter"), 500);\n      }, 350);\n    };\n    setInterval(cycle, 2800);\n  }\n\n  // Background image slider\n  (function () {\n    const bgSlides = document.querySelectorAll(".hero-bg-slide");\n    const dots = document.querySelectorAll(".hero-bg-dot");\n    if (!bgSlides.length) return;\n\n    let currentBg = 0;\n    let bgTimer;\n\n    function setBg(idx) {\n      bgSlides.forEach((s) => s.classList.remove("active"));\n      dots.forEach((d) => d.classList.remove("active"));\n\n      currentBg = (idx + bgCount) % bgCount;\n      bgSlides[currentBg].classList.add("active");\n      if (dots[currentBg]) dots[currentBg].classList.add("active");\n    }\n\n    function startBgTimer() {\n      clearInterval(bgTimer);\n      bgTimer = setInterval(() => {\n        setBg(currentBg + 1);\n      }, 6000);\n    }\n\n    dots.forEach((d) => {\n      d.addEventListener("click", () => {\n        const idx = parseInt(d.dataset.bgDot || "0", 10);\n        setBg(idx);\n        startBgTimer();\n      });\n    });\n\n    startBgTimer();\n  })();\n})();<\/script>'])), maybeRenderHead(), bgSlides.map((src, i) => renderTemplate`<div${addAttribute(`hero-bg-slide${i === 0 ? " active" : ""}`, "class")}${addAttribute(i, "data-bg-index")} data-astro-cid-nlow4r3u> <img${addAttribute(src, "src")}${addAttribute(`Hero background slide ${i + 1}`, "alt")} class="hero-bg-img" width="1920" height="1080"${addAttribute(i === 0 ? "eager" : "lazy", "loading")}${addAttribute(i === 0 ? "high" : "auto", "fetchpriority")} decoding="async" data-astro-cid-nlow4r3u> </div>`), badgeText || (isEn ? "AI AGENT PLATFORM FOR VIETNAMESE BUSINESSES" : "NỀN TẢNG CHAT AI AGENT CHO DOANH NGHIỆP VIỆT"), titleMain || (isEn ? "Where Vietnamese businesses come to" : "Nơi doanh nghiệp Việt đến để"), " ", rotatingWords[0], subtitle || (isEn ? "Train AI from Website, PDF, Q&A — deploy on Website, Zalo OA, Messenger. Answer 24/7, hand off to admin when needed." : "Huấn luyện AI từ Website, PDF, Q&A — triển khai trên Website, Zalo OA, Messenger. Trả lời 24/7, chuyển admin khi cần."), addAttribute(btn1Link || "#demo", "href"), btn1Text || (isEn ? "View Demo" : "Xem Demo"), addAttribute(btn2Link || "#trial", "href"), btn2Text || (isEn ? "Start Free Trial" : "Dùng thử miễn phí"), bgSlides.map((_, i) => renderTemplate`<button${addAttribute(`hero-bg-dot${i === 0 ? " active" : ""}`, "class")}${addAttribute(i, "data-bg-dot")}${addAttribute(`Go to background slide ${i + 1}`, "aria-label")} data-astro-cid-nlow4r3u></button>`), defineScriptVars({ rotatingWords, bgCount: bgSlides.length }));
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/HeroSection.astro", void 0);

export { $$HeroSection as $ };
