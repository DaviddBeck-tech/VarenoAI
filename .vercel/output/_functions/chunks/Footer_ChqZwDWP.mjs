import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { b as renderTemplate, x as renderSlot, e as renderHead, m as maybeRenderHead, c as addAttribute, u as unescapeHTML, r as renderComponent, F as Fragment } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';
import { r as renderScript } from './script_3r76pLgk.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { N as NAV } from './nav_DcpAvAUt.mjs';
import { n as navProducts, p as productPath, f as findProduct } from './products_B4dkJEK6.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _b;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, lang = "vi", seo } = Astro2.props;
  const SITE_URL = SITE.siteUrl;
  const finalTitle = seo?.title || title || SITE.brandName;
  const finalDescription = seo?.description || description || SITE.tagline.vi;
  const canonicalUrl = `${SITE_URL}${Astro2.url.pathname}`;
  const isEn = lang === "en";
  const bare = isEn ? Astro2.url.pathname.replace(/^\/en(?=\/|$)/, "") || "/" : Astro2.url.pathname;
  const viUrl = `${SITE_URL}${bare}`;
  const enUrl = `${SITE_URL}/en${bare === "/" ? "" : bare}`;
  const ogImage = seo?.openGraph?.image?.url || `${SITE_URL}/og-image.png`;
  const widgetScript = null;
  return renderTemplate(_b || (_b = __template(["<html", '> <head><!-- Theme initialization — MUST run before paint to prevent flash of wrong theme --><script>\n      (function () {\n        var stored = localStorage.getItem("theme");\n        var prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        var theme = stored || (prefersDark ? "dark" : "light");\n        document.documentElement.classList.add(theme);\n      })();\n    </script><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><!-- Canonical URL (luôn trỏ về frontend, không phải CMS) --><link rel="canonical"', '><!-- Open Graph (Facebook, Zalo, LinkedIn) --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale"', '><meta property="og:locale:alternate"', '><meta property="og:site_name"', '><!-- hreflang: vi là bản mặc định (x-default) --><link rel="alternate" hreflang="vi"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="x-default"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Favicon --><link rel="icon" type="image/x-icon" href="/favicon.png"><!-- Font Optimization: Preconnect & Preload --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="dns-prefetch" href="https://fonts.googleapis.com"><!-- Mpreload font chính (Google Sans / Roboto) để tránh chớp giật (FOUT/FOIT) --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" as="style"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" media="print" onload="this.media='all'"><!-- Fallback if JS is disabled -->`, '<noscript><link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></noscript>', "</head> <body> ", " <!-- Chat Widget — chỉ nhúng khi cấu hình PUBLIC_WIDGET_URL --> ", ' <!-- Google tag (gtag.js) — đặt cuối body để không tranh băng thông với tài nguyên critical --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-0X00PHVYED"></script> <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-0X00PHVYED");\n    </script> <!-- Cuộn mượt quán tính (Lenis) — bundled qua Vite, chỉ bật trên desktop\n         và khi người dùng không chọn "giảm chuyển động" (xem script) --> ', ' <!-- Intersection Observer Scroll Animations --> <script>\n      (function () {\n        function initScrollAnimations() {\n          var observerOptions = {\n            root: null,\n            rootMargin: "0px 0px -50px 0px",\n            threshold: 0.05,\n          };\n\n          var observer = new IntersectionObserver(function (entries, obs) {\n            entries.forEach(function (entry) {\n              if (entry.isIntersecting) {\n                entry.target.classList.add("scroll-animate--visible");\n                obs.unobserve(entry.target);\n              }\n            });\n          }, observerOptions);\n\n          var targets = document.querySelectorAll(\n            "section, .social-proof, footer, .ps-section, .slider-info-section, .privacy-section, .pricing-section, .faq-section"\n          );\n          targets.forEach(function (el, index) {\n            if (!el.classList.contains("scroll-animate")) {\n              el.classList.add("scroll-animate");\n            }\n            // Animate top fold elements immediately\n            if (index === 0 || el.getBoundingClientRect().top < window.innerHeight) {\n              el.classList.add("scroll-animate--visible");\n            } else {\n              observer.observe(el);\n            }\n          });\n        }\n\n        if (document.readyState === "loading") {\n          document.addEventListener("DOMContentLoaded", initScrollAnimations);\n        } else {\n          initScrollAnimations();\n        }\n\n        document.addEventListener("astro:page-load", initScrollAnimations);\n      })();\n    </script> </body> </html>'])), addAttribute(lang, "lang"), finalTitle, addAttribute(finalDescription, "content"), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "content"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(ogImage, "content"), addAttribute(isEn ? "en_US" : "vi_VN", "content"), addAttribute(isEn ? "vi_VN" : "en_US", "content"), addAttribute(SITE.brandName, "content"), addAttribute(viUrl, "href"), addAttribute(enUrl, "href"), addAttribute(viUrl, "href"), addAttribute(finalTitle, "content"), addAttribute(finalDescription, "content"), addAttribute(ogImage, "content"), maybeRenderHead(), renderHead(), renderSlot($$result, $$slots["default"]), widgetScript, renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/layouts/BaseLayout.astro", void 0);

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const syncTheme = () => {
      const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(current);
    };
    syncTheme();
    setMounted(true);
    window.addEventListener("theme-changed", syncTheme);
    return () => window.removeEventListener("theme-changed", syncTheme);
  }, []);
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
    localStorage.setItem("theme", next);
    window.dispatchEvent(new Event("theme-changed"));
  };
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { className: "relative w-14 h-7 rounded-full bg-secondary border border-border flex items-center px-1", "aria-hidden": "true" });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "relative w-14 h-7 rounded-full bg-secondary border border-border flex items-center px-1 transition-colors duration-300 hover:border-primary/40",
      "aria-label": "Toggle theme",
      children: /* @__PURE__ */ jsx(
        "span",
        {
          className: `absolute w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ${theme === "light" ? "translate-x-0" : "translate-x-7"}`,
          children: theme === "light" ? /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-3 h-3 text-primary-foreground", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
            /* @__PURE__ */ jsx("path", { d: "M12 2v2" }),
            /* @__PURE__ */ jsx("path", { d: "M12 20v2" }),
            /* @__PURE__ */ jsx("path", { d: "m4.93 4.93 1.41 1.41" }),
            /* @__PURE__ */ jsx("path", { d: "m17.66 17.66 1.41 1.41" }),
            /* @__PURE__ */ jsx("path", { d: "M2 12h2" }),
            /* @__PURE__ */ jsx("path", { d: "M20 12h2" }),
            /* @__PURE__ */ jsx("path", { d: "m6.34 17.66-1.41 1.41" }),
            /* @__PURE__ */ jsx("path", { d: "m19.07 4.93-1.41 1.41" })
          ] }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-3 h-3 text-primary-foreground", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }) })
        }
      )
    }
  );
}

const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { pathname } = Astro2.url;
  const isEnglish = pathname.startsWith("/en/") || pathname === "/en";
  let viPath = pathname;
  if (isEnglish) {
    viPath = pathname.replace(/^\/en(\/|$)/, "/");
  }
  let enPath = pathname;
  if (!isEnglish) {
    enPath = `/en${pathname === "/" ? "" : pathname}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block text-left lang-switcher-container">  <button type="button" class="lang-switcher-btn inline-flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-background cursor-pointer" aria-expanded="false" aria-haspopup="true" aria-label="Chọn ngôn ngữ / Select language">  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <line x1="2" y1="12" x2="22" y2="12"></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path> </svg> </button>  <div class="lang-switcher-menu origin-top-right absolute right-0 mt-2 w-44 rounded-xl shadow-lg bg-background border border-border/50 ring-1 ring-black/5 dark:ring-white/5 opacity-0 invisible scale-95 transition-all duration-200 ease-out z-50" role="menu" aria-orientation="vertical"> <div class="py-1.5" role="none">  <a${addAttribute(viPath, "href")}${addAttribute(`group flex items-center justify-between px-3.5 py-2.5 mx-1.5 rounded-lg text-sm transition-colors ${!isEnglish ? "bg-secondary/60 font-medium text-foreground dark:bg-secondary" : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"}`, "class")} role="menuitem"> <div class="flex items-center gap-2.5"> <span class="text-base leading-none">🇻🇳</span> <span>Tiếng Việt</span> </div> ${!isEnglish && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg>`} </a>  <a${addAttribute(enPath, "href")}${addAttribute(`group flex items-center justify-between px-3.5 py-2.5 mx-1.5 mt-1 rounded-lg text-sm transition-colors ${isEnglish ? "bg-secondary/60 font-medium text-foreground dark:bg-secondary" : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"}`, "class")} role="menuitem"> <div class="flex items-center gap-2.5"> <span class="text-base leading-none">🇬🇧</span> <span>English</span> </div> ${isEnglish && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-foreground/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg>`} </a> </div> </div> </div> ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/LanguageSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/LanguageSwitcher.astro", void 0);

const $$ProductIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductIcon;
  const { name, size = 24 } = Astro2.props;
  const FALLBACK = "sparkles";
  const ICON_PATHS = {
    "message-circle": `
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    <path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" />`,
    "pen-line": `
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />`,
    sparkles: `
    <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3Z" />
    <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15Z" />`,
    "bar-chart": `
    <path d="M3 3v18h18" /><path d="M7 15v3" />
    <path d="M12 9v9" /><path d="M17 5v13" />`,
    bot: `
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M12 8V4" /><circle cx="8.5" cy="14" r="1" />
    <circle cx="15.5" cy="14" r="1" />`,
    image: `
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21" />`,
    // ── Icon ngành nghề (IndustriesSection) ──────────────────────
    "shopping-bag": `
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />`,
    "graduation-cap": `
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />`,
    building: `
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" />
    <path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" />
    <path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />`,
    headset: `
    <path d="M3 11h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a9 9 0 0 1 18 0v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3" />
    <path d="M21 16v2a4 4 0 0 1-4 4h-5" />`,
    megaphone: `
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />`,
    store: `
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />`
  };
  const paths = ICON_PATHS[name] ?? ICON_PATHS[FALLBACK];
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${unescapeHTML(paths)}</svg>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/ProductIcon.astro", void 0);

const LogoSVG = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 25.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 295.9 60\" style=\"enable-background:new 0 0 295.9 60;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n\t.st0{fill:url(#SVGID_1_);}\r\n\t.st1{fill:#FFFFFF;}\r\n\t.st2{fill:url(#SVGID_2_);}\r\n</style>\r\n<linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"27.8\" x2=\"51.6\" y2=\"27.8\" gradientTransform=\"matrix(1 0 0 -1 0 62)\">\r\n\t<stop  offset=\"0\" style=\"stop-color:#2EC5F4\"/>\r\n\t<stop  offset=\"0.3527\" style=\"stop-color:#489FD8\"/>\r\n\t<stop  offset=\"0.6657\" style=\"stop-color:#4C75BA\"/>\r\n\t<stop  offset=\"1\" style=\"stop-color:#5162AD\"/>\r\n</linearGradient>\r\n<path class=\"st0\" d=\"M25.8,8.4C11.5,8.4,0,20,0,34.2C0,48.5,11.5,60,25.8,60C40,60,51.6,48.5,51.6,34.2C51.6,20,40,8.4,25.8,8.4z\r\n\t M32.9,48L32.9,48l-11.5,7v-5.9c-6.4-1.9-11.1-7.8-11.1-14.9c0-8.6,7-15.5,15.5-15.5c8.6,0,15.5,7,15.5,15.5\r\n\tC41.3,40.2,37.9,45.5,32.9,48z\"/>\r\n<g>\r\n\t<path class=\"st1\" d=\"M75.4,56.2c-8.7,0-15.7-6.9-15.7-15.5c0-8.4,6.9-15.3,15.3-15.3c6.1,0,11.5,3.3,14.1,9.1H83\r\n\t\tc-2-2.6-4.4-3.7-7.8-3.7c-5.7,0-9.9,4.4-9.9,10S69.8,51,75.3,51c2.9,0,5-1,7.4-3.5h6.5C86.8,52.8,81.5,56.2,75.4,56.2z\"/>\r\n\t<path class=\"st1\" d=\"M106.5,55.7V44.3c0-4.7-1.2-6.5-4.4-6.5c-3.1,0-4.7,1.7-4.7,6.6v11.3H92V25.9h5.4v9c1.6-1.5,3.4-2.1,5.7-2.1\r\n\t\tc5.4,0,8.7,2.9,8.7,10.3v12.6C111.8,55.7,106.5,55.7,106.5,55.7z\"/>\r\n\t<path class=\"st1\" d=\"M134,55.7v-2.9c-2.1,2.4-4.3,3.4-7.4,3.4c-6.5,0-11.2-4.9-11.2-11.6c0-6.8,4.8-11.8,11.4-11.8\r\n\t\tc3.2,0,5.4,1,7.3,3.5v-3h4.9v22.3h-5V55.7z M127.3,37.7c-3.8,0-6.5,2.9-6.5,7c0,3.9,2.7,6.6,6.6,6.6c4.1,0,6.5-2.9,6.5-6.6\r\n\t\tC133.8,40.6,131.1,37.7,127.3,37.7z\"/>\r\n\t<path class=\"st1\" d=\"M149.1,38.2v17.5h-5.4V38.2h-2.6v-4.9h2.6v-7.5h5.4v7.5h3.2v4.9H149.1z\"/>\r\n\t<path class=\"st1\" d=\"M172.7,55.7h-4.5l-11.6-29.8h5.8l8,22.7l8-22.7h5.8L172.7,55.7z\"/>\r\n\t<path class=\"st1\" d=\"M202.1,55.7v-2.9c-2.1,2.4-4.3,3.4-7.4,3.4c-6.5,0-11.2-4.9-11.2-11.6c0-6.8,4.8-11.8,11.4-11.8\r\n\t\tc3.2,0,5.4,1,7.3,3.5v-3h4.9v22.3h-5V55.7z M195.4,37.7c-3.8,0-6.5,2.9-6.5,7c0,3.9,2.7,6.6,6.6,6.6c4.1,0,6.5-2.9,6.5-6.6\r\n\t\tC202,40.6,199.2,37.7,195.4,37.7z\"/>\r\n\t<path class=\"st1\" d=\"M216.4,43.3v12.4H211V33.3h4.9v2.2c1.4-2.1,2.5-2.7,4.8-2.7h0.4V38C218,38,216.4,39.8,216.4,43.3z\"/>\r\n\t<path class=\"st1\" d=\"M245.3,46.9H228c0.6,2.7,3,4.4,6.2,4.4c2.2,0,3.5-0.6,4.9-2.2h5.8c-1.5,4.6-6.1,7.1-10.6,7.1\r\n\t\tc-6.8,0-12.1-5.1-12.1-11.6c0-6.6,5.2-11.8,11.8-11.8c6.7,0,11.5,5.1,11.5,12C245.5,45.6,245.4,46.1,245.3,46.9z M234,37.7\r\n\t\tc-3.2,0-5.4,1.6-6.2,4.4h12.4C239.5,39.3,237.3,37.7,234,37.7z\"/>\r\n\t<path class=\"st1\" d=\"M263.4,55.7v-11c0-6-1.6-7-4.3-7c-1.7,0-3.1,0.7-4,2.1c-0.7,1.1-0.9,2.4-0.9,5.4v10.5h-5.4V33.3h5v2.1\r\n\t\tc2-1.9,3.7-2.7,6.3-2.7c3.1,0,5.5,1.1,7,3.2c1.2,1.7,1.6,3.7,1.6,7.7v12h-5.3V55.7z\"/>\r\n\t<path class=\"st1\" d=\"M284,56.2c-6.5,0-11.9-5.2-11.9-11.7c0-6.4,5.3-11.7,11.8-11.7c6.7,0,11.9,5.2,11.9,11.9\r\n\t\tC295.9,51,290.5,56.2,284,56.2z M284,37.7c-3.5,0-6.5,3-6.5,6.7c0,3.8,2.9,6.9,6.5,6.9c3.5,0,6.5-3,6.5-6.8\r\n\t\tC290.5,40.8,287.6,37.7,284,37.7z\"/>\r\n</g>\r\n<linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"42.7357\" y1=\"51\" x2=\"64.7818\" y2=\"51\" gradientTransform=\"matrix(1 0 0 -1 0 62)\">\r\n\t<stop  offset=\"0\" style=\"stop-color:#FFF33B\"/>\r\n\t<stop  offset=\"5.948725e-02\" style=\"stop-color:#FFE029\"/>\r\n\t<stop  offset=\"0.1303\" style=\"stop-color:#FFD217\"/>\r\n\t<stop  offset=\"0.2032\" style=\"stop-color:#FEC90E\"/>\r\n\t<stop  offset=\"0.2809\" style=\"stop-color:#FDC70C\"/>\r\n\t<stop  offset=\"0.6685\" style=\"stop-color:#F3903F\"/>\r\n\t<stop  offset=\"0.8876\" style=\"stop-color:#ED683C\"/>\r\n\t<stop  offset=\"1\" style=\"stop-color:#E93E3A\"/>\r\n</linearGradient>\r\n<path class=\"st2\" d=\"M64.8,11c-6.1,0-11,4.9-11,11c0-6.1-4.9-11-11-11c6.1,0,11-4.9,11-11C53.8,6.1,58.7,11,64.8,11z\"/>\r\n</svg>\r\n";

const defaultLang = "vi";
const ui = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.services": "Dịch vụ",
    "nav.about": "Giới thiệu",
    "nav.solutions": "Giải pháp",
    "nav.news": "Tin tức",
    "nav.blog": "Blog",
    "nav.pricing": "Bảng giá",
    "nav.contact": "Liên hệ",
    "nav.servicesToggle": "Mở menu Dịch vụ",
    // Mega-menu "Dịch vụ". {brand} được Header thay bằng SITE.brandName
    // để đổi thương hiệu vẫn chỉ phải sửa src/config/site.ts.
    "nav.ecosystemTitle": "Nền tảng {brand}",
    "nav.ecosystemBlurb": "Một tài khoản, dữ liệu dùng chung cho mọi sản phẩm.",
    "nav.servicesAll": "Xem tất cả dịch vụ",
    "products.comingSoon": "Sắp ra mắt",
    "products.learnMore": "Tìm hiểu thêm",
    // Alt của ảnh chụp giao diện; ghép thành "Giao diện ChatVareno"
    "products.uiPreview": "Giao diện",
    // Nhãn của slot ảnh chưa có (sản phẩm chưa cấp screenshot)
    "products.previewSoon": "Ảnh giao diện sắp cập nhật",
    // Thẻ mở rộng ở trang chủ: nhãn nút mở, nút đóng, tiêu đề danh sách điểm chính
    "products.openCard": "Xem chi tiết",
    "products.closeCard": "Đóng",
    "products.highlights": "Điểm chính",
    "cta.title": "Sẵn sàng tăng tốc cùng AI?",
    "cta.subtitle": "Đội ngũ của chúng tôi sẽ tư vấn giải pháp phù hợp cho doanh nghiệp bạn.",
    "cta.button": "Liên hệ tư vấn",
    "footer.tagline": "Hệ sinh thái AI cho doanh nghiệp Việt: tư vấn bán hàng, sản xuất nội dung và tự động hoá, dùng chung một nền tảng dữ liệu.",
    "footer.product": "Sản phẩm",
    "footer.features": "Tính năng",
    "footer.privacy": "Chính sách bảo mật",
    "footer.terms": "Điều khoản dịch vụ",
    "footer.company": "Công ty",
    "footer.about": "Giới thiệu",
    "footer.careers": "Tuyển dụng",
    "footer.resources": "Tài nguyên",
    "footer.docs": "Tài liệu",
    "footer.helpCenter": "Trung tâm hỗ trợ",
    "footer.apiRef": "API Reference",
    "footer.community": "Cộng đồng",
    // Slugs cho các trang hệ thống (Dùng chung 1 URL Frontend)
    "slug.privacy": "/legal/privacy-policy/",
    "slug.community": "/legal/community/",
    "slug.terms": "/legal/terms-of-service/",
    // Trỏ về trang tĩnh mới — không còn phụ thuộc WordPress (/legal/about-us/ trả 500 khi WP chưa dựng)
    "slug.about": "/about/",
    "slug.careers": "/legal/careers/",
    "slug.docs": "/legal/documentation/",
    "slug.helpCenter": "/legal/help-center/",
    "slug.apiRef": "/legal/api-reference/"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.solutions": "Solutions",
    "nav.news": "News",
    "nav.blog": "Blog",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.servicesToggle": "Open Services menu",
    "nav.ecosystemTitle": "The {brand} platform",
    "nav.ecosystemBlurb": "One account and shared data across every product.",
    "nav.servicesAll": "View all services",
    "products.comingSoon": "Coming soon",
    "products.learnMore": "Learn more",
    "products.uiPreview": "Interface of",
    "products.previewSoon": "Interface preview coming soon",
    "products.openCard": "View details",
    "products.closeCard": "Close",
    "products.highlights": "Highlights",
    "cta.title": "Ready to accelerate with AI?",
    "cta.subtitle": "Our team will help you find the right solution for your business.",
    "cta.button": "Talk to us",
    "footer.tagline": "An AI ecosystem for Vietnamese business: sales assistants, content production and automation, all on one data platform.",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.careers": "Careers",
    "footer.resources": "Resources",
    "footer.docs": "Documentation",
    "footer.helpCenter": "Help Center",
    "footer.apiRef": "API Reference",
    "footer.community": "Community",
    // Slugs cho các trang hệ thống (Dùng chung 1 URL Frontend)
    "slug.privacy": "/legal/privacy-policy/",
    "slug.community": "/legal/community/",
    "slug.terms": "/legal/terms-of-service/",
    "slug.about": "/about/",
    "slug.careers": "/legal/careers/",
    "slug.docs": "/legal/documentation/",
    "slug.helpCenter": "/legal/help-center/",
    "slug.apiRef": "/legal/api-reference/"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function useTranslatedPath(lang) {
  return function translatePath(path, l = lang) {
    if (l === defaultLang) {
      return path;
    }
    return path === "/" ? `/${l}` : `/${l}${path.startsWith("/") ? path : `/${path}`}`;
  };
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const norm = (p) => p.endsWith("/") ? p : `${p}/`;
  const currentPath = norm(Astro2.url.pathname);
  const isActive = (href) => norm(href) === currentPath;
  const serviceChildren = navProducts().map((p) => ({
    name: p.name,
    label: p.shortLabel ?? p.name,
    href: translatePath(productPath(p)),
    tagline: p.tagline[lang],
    icon: p.icon,
    status: p.status,
    badge: p.badge?.[lang]
  }));
  const menuCols = serviceChildren.length <= 4 ? serviceChildren.length : serviceChildren.length <= 6 ? 3 : 4;
  const platformTitle = t("nav.ecosystemTitle").replace(
    "{brand}",
    SITE.brandName
  );
  const navItems = [
    { key: "home", label: t("nav.home"), href: translatePath(NAV.home) },
    {
      key: "services",
      label: t("nav.services"),
      href: translatePath(NAV.services),
      children: serviceChildren
    },
    { key: "about", label: t("nav.about"), href: translatePath(NAV.about) },
    {
      key: "solutions",
      label: t("nav.solutions"),
      href: translatePath(NAV.solutions)
    },
    { key: "news", label: t("nav.news"), href: translatePath(NAV.news) },
    { key: "contact", label: t("nav.contact"), href: translatePath(NAV.contact) }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="header-nav" id="main-header" data-astro-cid-3ef6ksr2> <div class="header-inner" data-astro-cid-3ef6ksr2> <!-- Logo --> <a${addAttribute(translatePath(NAV.home), "href")} class="header-logo"${addAttribute(`${SITE.brandName} Home`, "aria-label")} data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(LogoSVG)}` })} </a> <!-- Desktop Nav Links --> <div class="header-links" data-astro-cid-3ef6ksr2> ${navItems.map(
    (item) => item.children ? renderTemplate`<div class="nav-item nav-item--menu" data-astro-cid-3ef6ksr2>  <a${addAttribute(item.href, "href")} class="header-link"${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${item.label} </a>  <button type="button" class="nav-caret" aria-expanded="false"${addAttribute(`dd-${item.key}`, "aria-controls")}${addAttribute(t("nav.servicesToggle"), "aria-label")} data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false" data-astro-cid-3ef6ksr2> <path d="m6 9 6 6 6-6" data-astro-cid-3ef6ksr2></path> </svg> </button>  <div class="mega-panel"${addAttribute(`dd-${item.key}`, "id")} role="group"${addAttribute(item.label, "aria-label")} data-astro-cid-3ef6ksr2> <div class="mega-inner" data-astro-cid-3ef6ksr2> <ul class="mega-grid" role="list"${addAttribute(`--mm-cols:${menuCols}`, "style")} data-astro-cid-3ef6ksr2> ${item.children.map((c, i) => renderTemplate`<li data-astro-cid-3ef6ksr2>  <a${addAttribute(c.href, "href")} class="mm-card"${addAttribute(c.status, "data-status")}${addAttribute(`--i:${i}`, "style")} data-astro-cid-3ef6ksr2> <span class="mm-card-icon" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": c.icon, "size": 22, "data-astro-cid-3ef6ksr2": true })} </span> <span class="mm-card-body" data-astro-cid-3ef6ksr2> <span class="mm-card-name" data-astro-cid-3ef6ksr2> ${c.label} ${c.badge ? renderTemplate`<em class="ndi-soon" data-astro-cid-3ef6ksr2>${c.badge}</em>` : c.status === "coming-soon" && renderTemplate`<em class="ndi-soon" data-astro-cid-3ef6ksr2> ${t("products.comingSoon")} </em>`} </span> <span class="mm-card-tagline" data-astro-cid-3ef6ksr2>${c.tagline}</span> </span> <svg class="mm-card-arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" data-astro-cid-3ef6ksr2> <path d="M5 12h14" data-astro-cid-3ef6ksr2></path> <path d="m12 5 7 7-7 7" data-astro-cid-3ef6ksr2></path> </svg> </a> </li>`)} </ul>  <div class="mega-foot"${addAttribute(`--i:${item.children.length}`, "style")} data-astro-cid-3ef6ksr2> <p class="mega-foot-copy" data-astro-cid-3ef6ksr2> <strong data-astro-cid-3ef6ksr2>${platformTitle}</strong> <span data-astro-cid-3ef6ksr2>${t("nav.ecosystemBlurb")}</span> </p> <a${addAttribute(item.href, "href")} class="mega-foot-link" data-astro-cid-3ef6ksr2> ${t("nav.servicesAll")} <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" data-astro-cid-3ef6ksr2> <path d="M5 12h14" data-astro-cid-3ef6ksr2></path> <path d="m12 5 7 7-7 7" data-astro-cid-3ef6ksr2></path> </svg> </a> </div> </div> </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="header-link"${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${item.label} </a>`
  )} </div> <!-- Desktop Right Actions --> <div class="header-actions" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/ThemeToggle.tsx", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </div> <!-- Mobile Menu Button --> <button class="header-mobile-btn" id="mobile-menu-btn" aria-label="Toggle mobile menu" data-astro-cid-3ef6ksr2> <svg id="icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><line x1="4" x2="20" y1="12" y2="12" data-astro-cid-3ef6ksr2></line><line x1="4" x2="20" y1="6" y2="6" data-astro-cid-3ef6ksr2></line><line x1="4" x2="20" y1="18" y2="18" data-astro-cid-3ef6ksr2></line></svg> <svg id="icon-close" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><path d="M18 6 6 18" data-astro-cid-3ef6ksr2></path><path d="m6 6 12 12" data-astro-cid-3ef6ksr2></path></svg> </button> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="header-mobile-menu hidden" data-astro-cid-3ef6ksr2> <div class="header-mobile-inner" data-astro-cid-3ef6ksr2> ${navItems.map(
    (item) => item.children ? renderTemplate`<div class="mobile-group" data-open="false" data-astro-cid-3ef6ksr2> <div class="mobile-group-row" data-astro-cid-3ef6ksr2>  <a${addAttribute(item.href, "href")} class="header-mobile-link mobile-link" data-astro-cid-3ef6ksr2> ${item.label} </a>  <button type="button" class="mobile-accordion-btn" aria-expanded="false"${addAttribute(`m-${item.key}`, "aria-controls")}${addAttribute(t("nav.servicesToggle"), "aria-label")} data-astro-cid-3ef6ksr2> <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" data-astro-cid-3ef6ksr2> <path d="m6 9 6 6 6-6" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> <div class="mobile-group-panel"${addAttribute(`m-${item.key}`, "id")} data-astro-cid-3ef6ksr2> <div class="mobile-group-panel-inner" data-astro-cid-3ef6ksr2> ${item.children.map((c) => renderTemplate`<a${addAttribute(c.href, "href")} class="header-mobile-sublink mobile-link" data-astro-cid-3ef6ksr2> <span class="hms-icon" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": c.icon, "size": 16, "data-astro-cid-3ef6ksr2": true })} </span> <span class="hms-text" data-astro-cid-3ef6ksr2> <span class="hms-name" data-astro-cid-3ef6ksr2> ${c.label} ${c.badge ? renderTemplate`<em class="ndi-soon" data-astro-cid-3ef6ksr2>${c.badge}</em>` : c.status === "coming-soon" && renderTemplate`<em class="ndi-soon" data-astro-cid-3ef6ksr2> ${t("products.comingSoon")} </em>`} </span> <span class="hms-tagline" data-astro-cid-3ef6ksr2>${c.tagline}</span> </span> </a>`)} </div> </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="header-mobile-link mobile-link" data-astro-cid-3ef6ksr2> ${item.label} </a>`
  )} <div class="header-mobile-divider" data-astro-cid-3ef6ksr2></div> <div class="header-mobile-utils" data-astro-cid-3ef6ksr2> <div class="header-mobile-util-group" data-astro-cid-3ef6ksr2> <span class="header-mobile-util-label" data-astro-cid-3ef6ksr2>Theme:</span> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/ThemeToggle.tsx", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </div> <div class="header-mobile-util-group" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "data-astro-cid-3ef6ksr2": true })} </div> </div> </div> </div> </nav>  ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const productLinks = [
    ...navProducts().map((p) => ({
      label: p.name,
      href: translatePath(productPath(p))
    })),
    {
      label: t("footer.features"),
      href: `${translatePath(productPath(findProduct("chatvareno")))}#features`
    },
    { label: t("nav.pricing"), href: translatePath(NAV.pricing) }
  ];
  const companyLinks = [
    { label: t("footer.about"), href: translatePath(t("slug.about")) },
    { label: t("nav.news"), href: translatePath(NAV.news) },
    { label: t("footer.careers"), href: translatePath(t("slug.careers")) },
    { label: t("nav.contact"), href: translatePath(NAV.contact) }
  ];
  const legalLinks = [
    { label: t("footer.privacy"), href: translatePath(t("slug.privacy")) },
    { label: t("footer.terms"), href: translatePath(t("slug.terms")) }
  ];
  const resourceLinks = [
    { label: t("footer.docs"), href: translatePath(t("slug.docs")) },
    { label: t("footer.helpCenter"), href: translatePath(t("slug.helpCenter")) },
    { label: t("footer.apiRef"), href: translatePath(t("slug.apiRef")) },
    { label: t("footer.community"), href: translatePath(t("slug.community")) }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="footer-section" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> <!-- Brand column --> <div class="footer-brand" data-astro-cid-sz7xmlte> <a${addAttribute(translatePath("/"), "href")} class="footer-logo" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(LogoSVG)}` })} </a> <p class="footer-tagline" data-astro-cid-sz7xmlte>${t("footer.tagline")}</p> <!-- Social icons --> <div class="footer-socials" data-astro-cid-sz7xmlte> <!-- Facebook --> <a${addAttribute(SITE.social.facebook, "href")} class="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-sz7xmlte></path> </svg> </a> <!-- Youtube --> <a${addAttribute(SITE.social.youtube, "href")} class="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <title>YouTube</title> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-astro-cid-sz7xmlte></path></svg> </a> <!-- TikTok --> <a${addAttribute(SITE.social.tiktok, "href")} class="footer-social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg role="img" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte><title>TikTok</title><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" data-astro-cid-sz7xmlte></path></svg> </a> <!-- LinkedIn --> <a${addAttribute(SITE.social.linkedin, "href")} class="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-sz7xmlte> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </div> <!-- Product column --> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" data-astro-cid-sz7xmlte>${t("footer.product")}</h4> <ul class="footer-col-list" data-astro-cid-sz7xmlte> ${productLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte> ${link.label} </a> </li>`)} </ul> </div> <!-- Company column --> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" data-astro-cid-sz7xmlte>${t("footer.company")}</h4> <ul class="footer-col-list" data-astro-cid-sz7xmlte> ${companyLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte> ${link.label} </a> </li>`)} </ul> </div> <!-- Resources column --> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" data-astro-cid-sz7xmlte>${t("footer.resources")}</h4> <ul class="footer-col-list" data-astro-cid-sz7xmlte> ${resourceLinks.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte> ${link.label} </a> </li>`)} </ul> </div> </div> <!-- Bottom bar --> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p class="footer-copyright" data-astro-cid-sz7xmlte>
&copy; ${currentYear} ${SITE.brandName}. All rights reserved.
</p> <div class="footer-legal" data-astro-cid-sz7xmlte> ${legalLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="footer-link" data-astro-cid-sz7xmlte> ${link.label} </a>`)} </div> <p class="footer-powered" data-astro-cid-sz7xmlte>Powered by ${SITE.brandName}</p> </div> </div> </footer>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, LogoSVG as L, $$Header as a, $$Footer as b, $$ProductIcon as c, useTranslations as d, getLangFromUrl as g, useTranslatedPath as u };
