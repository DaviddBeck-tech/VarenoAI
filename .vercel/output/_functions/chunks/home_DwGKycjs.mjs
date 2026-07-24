import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate, u as unescapeHTML, F as Fragment } from './entrypoint_DdRf1b8J.mjs';
import { r as renderScript } from './script_3r76pLgk.mjs';
import { g as getLangFromUrl, c as $$ProductIcon, d as useTranslations, u as useTranslatedPath } from './Footer_ChqZwDWP.mjs';
import { n as navProducts, p as productPath } from './products_B4dkJEK6.mjs';
import 'clsx';
import { $ as $$PostCard } from './PostCard_-UhG9NzO.mjs';
import { N as NAV } from './nav_DcpAvAUt.mjs';

const chatvarenoShot = new Proxy({"src":"/_astro/app-mockup.Ba_yqAsE.png","width":2048,"height":1240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/assets/app-mockup.png";
							}
							
							return target[name];
						}
					});

const $$UmbrellaHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UmbrellaHero;
  const {
    badgeText,
    titleLead,
    rotatingWords,
    subtitle,
    imageAlt,
    btn1Text,
    btn1Link,
    btn2Text,
    btn2Link,
    chips
  } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const PRODUCT_SLOTS = [
    { top: "max(5rem, calc(50% - 295px))", left: "2%", depth: 0.6, rot: -3 },
    { top: "calc(50% + 115px)", left: "3%", depth: 3.4, rot: -4 },
    { top: "calc(50% + 131px)", right: "3%", depth: 2.6, rot: 3 }
  ];
  const IMAGE_SLOT = {
    top: "max(5.25rem, calc(50% - 328px))",
    right: "2%",
    depth: 2,
    rot: 6
  };
  const CHIP_SLOTS = [
    // Đáy phải: cân với thẻ sản phẩm ở đáy trái. Đặt ở đáy giữa thì nó đứng lạc
    // lõng một mình trong khoảng trống dưới CTA.
    { top: "calc(50% + 262px)", right: "22%", depth: 1, rot: -1 },
    { top: "calc(50% - 33px)", right: "1.5%", depth: 1.7, rot: 2 }
  ];
  const pos = (s) => `top:${s.top};` + (s.left ? `left:${s.left};` : "") + (s.right ? `right:${s.right};` : "") + `--rot:${s.rot}deg;`;
  const products = navProducts().slice(0, PRODUCT_SLOTS.length);
  const heroChips = chips.slice(0, CHIP_SLOTS.length);
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const charSpans = (text) => {
    const chars = Array.from(text);
    return chars.map((ch, i) => {
      const delayIndex = chars.length - 1 - i;
      const glyph = ch === " " ? "&nbsp;" : esc(ch);
      return `<span class="uhero-char" style="--i:${delayIndex}">${glyph}</span>`;
    }).join("");
  };
  return renderTemplate`${maybeRenderHead()}<section class="uhero" data-astro-cid-ckl4odtw> <div class="uhero-bg" aria-hidden="true" data-astro-cid-ckl4odtw> <span class="uhero-glow uhero-glow--a" data-astro-cid-ckl4odtw></span> <span class="uhero-glow uhero-glow--b" data-astro-cid-ckl4odtw></span> <span class="uhero-grid" data-astro-cid-ckl4odtw></span> </div>  <div class="uhero-float" data-parallax aria-hidden="true" data-astro-cid-ckl4odtw> ${products.map((p, i) => renderTemplate`<div class="ufl"${addAttribute(PRODUCT_SLOTS[i].depth, "data-depth")}${addAttribute(`${pos(PRODUCT_SLOTS[i])}--d:${i}`, "style")} data-astro-cid-ckl4odtw> <div class="ufl-inner ufl-card"${addAttribute(p.status, "data-status")} data-astro-cid-ckl4odtw> <span class="ufl-card-icon" data-astro-cid-ckl4odtw> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": p.icon, "size": 20, "data-astro-cid-ckl4odtw": true })} </span> <span class="ufl-card-text" data-astro-cid-ckl4odtw> <span class="ufl-card-name" data-astro-cid-ckl4odtw> ${p.name} ${p.status === "coming-soon" && renderTemplate`<em class="ufl-pill" data-astro-cid-ckl4odtw>${t("products.comingSoon")}</em>`} </span> <span class="ufl-card-tagline" data-astro-cid-ckl4odtw>${p.tagline[lang]}</span> </span> </div> </div>`)} <div class="ufl ufl--shot"${addAttribute(IMAGE_SLOT.depth, "data-depth")}${addAttribute(`${pos(IMAGE_SLOT)}--d:${products.length}`, "style")} data-astro-cid-ckl4odtw> <div class="ufl-inner ufl-shot" data-astro-cid-ckl4odtw> <img${addAttribute(chatvarenoShot.src, "src")}${addAttribute(chatvarenoShot.width, "width")}${addAttribute(chatvarenoShot.height, "height")} alt="" loading="eager" decoding="async" data-astro-cid-ckl4odtw> </div> </div> ${heroChips.map((c, i) => renderTemplate`<div${addAttribute(`ufl ufl--chip-${i}`, "class")}${addAttribute(CHIP_SLOTS[i].depth, "data-depth")}${addAttribute(`${pos(CHIP_SLOTS[i])}--d:${products.length + 1 + i}`, "style")} data-astro-cid-ckl4odtw> <div class="ufl-inner ufl-chip" data-astro-cid-ckl4odtw> <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false" data-astro-cid-ckl4odtw> <path d="M20 6 9 17l-5-5" data-astro-cid-ckl4odtw></path> </svg> ${c} </div> </div>`)} </div> <div class="container uhero-inner" data-astro-cid-ckl4odtw> <p class="uhero-badge" data-astro-cid-ckl4odtw> <span class="uhero-badge-dot" data-astro-cid-ckl4odtw></span> ${badgeText} </p> <h1 class="uhero-title" data-astro-cid-ckl4odtw> <span class="uhero-lead" data-astro-cid-ckl4odtw>${titleLead}</span> <span class="uhero-rotate" data-rotate${addAttribute(JSON.stringify(rotatingWords), "data-words")} data-astro-cid-ckl4odtw> <span class="sr-only" data-sr data-astro-cid-ckl4odtw>${rotatingWords[0]}</span> <span class="uhero-word" data-word aria-hidden="true" data-astro-cid-ckl4odtw>${unescapeHTML(charSpans(rotatingWords[0]))}</span> </span> </h1> <p class="uhero-subtitle" data-astro-cid-ckl4odtw>${subtitle}</p> <div class="uhero-actions" data-astro-cid-ckl4odtw> <a${addAttribute(btn1Link, "href")} class="uhero-btn uhero-btn--primary" data-astro-cid-ckl4odtw> ${btn1Text} <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-ckl4odtw> <path d="M5 12h14" data-astro-cid-ckl4odtw></path><path d="m12 5 7 7-7 7" data-astro-cid-ckl4odtw></path> </svg> </a> <a${addAttribute(btn2Link, "href")} class="uhero-btn uhero-btn--ghost" data-astro-cid-ckl4odtw>${btn2Text}</a> </div>  <div class="uhero-mobile-shot" data-astro-cid-ckl4odtw> <img${addAttribute(chatvarenoShot.src, "src")}${addAttribute(chatvarenoShot.width, "width")}${addAttribute(chatvarenoShot.height, "height")}${addAttribute(imageAlt, "alt")} loading="lazy" decoding="async" data-astro-cid-ckl4odtw> </div> </div> </section>  ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/UmbrellaHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/UmbrellaHero.astro", void 0);

const $$EcosystemShowcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$EcosystemShowcase;
  const SHOTS = {
    chatvareno: chatvarenoShot
  };
  const { title, subtitle } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const products = navProducts();
  const cols = products.length === 1 ? 1 : 2;
  const badgeOf = (p) => p.badge?.[lang] ?? (p.status === "coming-soon" ? t("products.comingSoon") : null);
  return renderTemplate`${maybeRenderHead()}<section class="ecs-section" data-astro-cid-az2iagxk> <div class="container" data-astro-cid-az2iagxk> <header class="ecs-header" data-astro-cid-az2iagxk> <h2 class="ecs-title" data-astro-cid-az2iagxk>${title}</h2> <p class="ecs-subtitle" data-astro-cid-az2iagxk>${subtitle}</p> </header> <ul class="ecs-grid" role="list"${addAttribute(String(cols), "data-cols")}${addAttribute(`--cols:${cols}`, "style")} data-astro-cid-az2iagxk> ${products.map((p, i) => {
    const shot = SHOTS[p.id];
    const badge = badgeOf(p);
    return renderTemplate`<li${addAttribute(`--i:${i}`, "style")} data-astro-cid-az2iagxk>  <button type="button" class="ecs-card"${addAttribute(p.id, "data-product")}${addAttribute(p.status, "data-status")} aria-haspopup="dialog"${addAttribute(`ecs-dlg-${p.id}`, "aria-controls")}${addAttribute(`${t("products.openCard")} ${p.name}`, "aria-label")} data-astro-cid-az2iagxk> <span class="ecs-card-shot" data-astro-cid-az2iagxk> ${shot ? (
      /* alt="" — ảnh này lặp lại trong dialog kèm alt thật, và
         nút mẹ đã có aria-label. Đọc hai lần là ồn. */
      renderTemplate`<img${addAttribute(shot.src, "src")}${addAttribute(shot.width, "width")}${addAttribute(shot.height, "height")} alt="" loading="lazy" decoding="async" data-astro-cid-az2iagxk>`
    ) : (
      /* Slot CÓ NHÃN, không phải giao diện giả dựng bằng <div> */
      renderTemplate`<span class="ecs-slot" data-astro-cid-az2iagxk> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": p.icon, "size": 34, "data-astro-cid-az2iagxk": true })} <span data-astro-cid-az2iagxk>${t("products.previewSoon")}</span> </span>`
    )} ${badge && renderTemplate`<em class="ecs-pill" data-astro-cid-az2iagxk>${badge}</em>`} </span> <span class="ecs-card-foot" data-astro-cid-az2iagxk> <span class="ecs-card-meta" data-astro-cid-az2iagxk> <span class="ecs-card-tagline" data-astro-cid-az2iagxk>${p.tagline[lang]}</span> <span class="ecs-card-name" data-astro-cid-az2iagxk>${p.name}</span> </span> <span class="ecs-plus" aria-hidden="true" data-astro-cid-az2iagxk> <svg viewBox="0 0 24 24" width="16" height="16" focusable="false" data-astro-cid-az2iagxk> <path d="M5 12h14" data-astro-cid-az2iagxk></path> <path d="M12 5v14" data-astro-cid-az2iagxk></path> </svg> </span> </span> </button> </li>`;
  })} </ul> ${products.map((p) => {
    const shot = SHOTS[p.id];
    const badge = badgeOf(p);
    const highlights = p.highlights?.[lang] ?? [];
    return renderTemplate`<dialog${addAttribute(`ecs-dlg-${p.id}`, "id")} class="ecs-dialog"${addAttribute(p.id, "data-product")}${addAttribute(`ecs-dlg-${p.id}-title`, "aria-labelledby")} data-astro-cid-az2iagxk> <div class="ecs-panel"${addAttribute(p.status, "data-status")} data-astro-cid-az2iagxk> <div class="ecs-panel-shot" data-astro-cid-az2iagxk> ${shot ? renderTemplate`<img${addAttribute(shot.src, "src")}${addAttribute(shot.width, "width")}${addAttribute(shot.height, "height")}${addAttribute(`${t("products.uiPreview")} ${p.name}`, "alt")} loading="lazy" decoding="async" data-astro-cid-az2iagxk>` : renderTemplate`<div class="ecs-slot" data-astro-cid-az2iagxk> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": p.icon, "size": 42, "data-astro-cid-az2iagxk": true })} <span data-astro-cid-az2iagxk>${t("products.previewSoon")}</span> </div>`} ${badge && renderTemplate`<em class="ecs-pill" data-astro-cid-az2iagxk>${badge}</em>`} </div>  <div class="ecs-panel-head" data-astro-cid-az2iagxk> <div class="ecs-panel-meta" data-astro-cid-az2iagxk> <p class="ecs-panel-tagline" data-astro-cid-az2iagxk>${p.tagline[lang]}</p> <h3 class="ecs-panel-name"${addAttribute(`ecs-dlg-${p.id}-title`, "id")} data-astro-cid-az2iagxk> ${p.name} </h3> </div> <button type="button" class="ecs-plus ecs-plus--close" data-close autofocus${addAttribute(t("products.closeCard"), "aria-label")} data-astro-cid-az2iagxk> <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" data-astro-cid-az2iagxk> <path d="M5 12h14" data-astro-cid-az2iagxk></path> <path d="M12 5v14" data-astro-cid-az2iagxk></path> </svg> </button> </div> <div class="ecs-panel-body" data-astro-cid-az2iagxk> <p class="ecs-panel-desc" data-astro-cid-az2iagxk>${p.description[lang]}</p> ${highlights.length > 0 && renderTemplate`<div class="ecs-hl-block" data-astro-cid-az2iagxk> <p class="ecs-panel-label" data-astro-cid-az2iagxk>${t("products.highlights")}</p> <ul class="ecs-hl" role="list" data-astro-cid-az2iagxk> ${highlights.map((h) => renderTemplate`<li data-astro-cid-az2iagxk> <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" data-astro-cid-az2iagxk> <path d="M20 6 9 17l-5-5" data-astro-cid-az2iagxk></path> </svg> ${h} </li>`)} </ul> </div>`}  <a class="ecs-panel-cta"${addAttribute(translatePath(productPath(p)), "href")} data-astro-cid-az2iagxk> ${t("products.learnMore")} <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false" data-astro-cid-az2iagxk> <path d="M5 12h14" data-astro-cid-az2iagxk></path> <path d="m12 5 7 7-7 7" data-astro-cid-az2iagxk></path> </svg> </a> </div> </div> </dialog>`;
  })} </div> </section> ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/EcosystemShowcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/EcosystemShowcase.astro", void 0);

const $$ValuesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ValuesSection;
  const { title, titleAccent, subtitle, pillars } = Astro2.props;
  const FALLBACK = "sparkles";
  const VALUE_ICONS = {
    shield: `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />`,
    globe: `<circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />`,
    zap: `<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />`,
    lock: `<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />`,
    users: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />`,
    sparkles: `<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />`
  };
  return renderTemplate`${maybeRenderHead()}<section class="val-section" data-astro-cid-jg2qq2qk> <div class="container val-inner" data-astro-cid-jg2qq2qk> <header class="val-statement" data-astro-cid-jg2qq2qk> <h2 class="val-title" data-astro-cid-jg2qq2qk> ${title}${titleAccent && renderTemplate`<span class="val-hl" data-astro-cid-jg2qq2qk>${titleAccent}</span>`} </h2> ${subtitle && renderTemplate`<p class="val-subtitle" data-astro-cid-jg2qq2qk>${subtitle}</p>`} </header>  <ol class="val-stack" role="list" data-astro-cid-jg2qq2qk> ${pillars.map((p, i) => renderTemplate`<li class="val-card"${addAttribute(`--i:${i}`, "style")} data-astro-cid-jg2qq2qk> <div class="val-card-top" data-astro-cid-jg2qq2qk> <span class="val-icon" data-astro-cid-jg2qq2qk> <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" data-astro-cid-jg2qq2qk>${unescapeHTML(VALUE_ICONS[p.icon] ?? VALUE_ICONS[FALLBACK])}</svg> </span> <span class="val-num" aria-hidden="true" data-astro-cid-jg2qq2qk> ${String(i + 1).padStart(2, "0")} </span> </div> <h3 class="val-card-title" data-astro-cid-jg2qq2qk>${p.title}</h3> <p class="val-card-desc" data-astro-cid-jg2qq2qk>${p.desc}</p> ${p.points && p.points.length > 0 && renderTemplate`<ul class="val-points" role="list" data-astro-cid-jg2qq2qk> ${p.points.map((pt) => renderTemplate`<li data-astro-cid-jg2qq2qk> <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" data-astro-cid-jg2qq2qk> <path d="M20 6 9 17l-5-5" data-astro-cid-jg2qq2qk></path> </svg> ${pt} </li>`)} </ul>`} </li>`)} </ol> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/ValuesSection.astro", void 0);

const shotChat = new Proxy({"src":"/_astro/app-layout.BsGhOpFS.png","width":2048,"height":1240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/assets/app-layout.png";
							}
							
							return target[name];
						}
					});

const csRetail = new Proxy({"src":"/_astro/case_study_decorx.DyK86A31.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/assets/case_study_decorx.png";
							}
							
							return target[name];
						}
					});

const csServices = new Proxy({"src":"/_astro/case_study_foodhub.D5HvJzwX.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/assets/case_study_foodhub.png";
							}
							
							return target[name];
						}
					});

const $$IndustriesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$IndustriesSection;
  const { title, titleHighlight, subtitle, industries } = Astro2.props;
  const collage = [
    {
      kind: "image",
      img: shotChat,
      alt: "Giao diện quản trị ChatVareno với khung chat trực tiếp",
      w: 66,
      ml: 6,
      r: -2.5,
      mt: 0
    },
    {
      kind: "image",
      img: csRetail,
      alt: "Chủ cửa hàng bán lẻ trong không gian shop",
      w: 52,
      ml: 32,
      r: 3,
      mt: 2.25
    },
    // Ảnh thứ 3 — CHỈ hiện ở desktop/tablet; mobile ẩn (xem @media ≤640).
    {
      kind: "image",
      img: csServices,
      alt: "Chủ doanh nghiệp dịch vụ trò chuyện tại quán",
      w: 54,
      ml: 4,
      r: -2.5,
      mt: 2.25
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="ind-section" data-astro-cid-wekxhxui> <div class="container ind-split" data-astro-cid-wekxhxui> <!-- ── Cột trái: nội dung ─────────────────────────────── --> <div class="ind-left" data-astro-cid-wekxhxui> <header class="ind-header" data-astro-cid-wekxhxui> ${title && renderTemplate`<h2 class="ind-title" data-astro-cid-wekxhxui> ${title} ${titleHighlight && renderTemplate`<span class="ind-hl" data-astro-cid-wekxhxui>${titleHighlight}</span>`} </h2>`} ${subtitle && renderTemplate`<p class="ind-subtitle" data-astro-cid-wekxhxui>${subtitle}</p>`} </header> <div class="ind-grid" data-astro-cid-wekxhxui> ${industries.map((it, i) => renderTemplate`<a${addAttribute(it.href, "href")}${addAttribute([
    "ind-card",
    "stagger-in",
    { "ind-card--featured": it.featured }
  ], "class:list")}${addAttribute(`--i:${i}`, "style")} data-astro-cid-wekxhxui> <span class="ind-card-icon" data-astro-cid-wekxhxui> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": it.icon, "size": 20, "data-astro-cid-wekxhxui": true })} </span> <span class="ind-card-name" data-astro-cid-wekxhxui>${it.name}</span> <span class="ind-card-blurb" data-astro-cid-wekxhxui>${it.blurb}</span> <svg class="ind-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-wekxhxui> <path d="M7 7h10v10" data-astro-cid-wekxhxui></path> <path d="M7 17 17 7" data-astro-cid-wekxhxui></path> </svg> </a>`)} </div> </div> <!-- ── Cột phải: một cột thẻ đè nhẹ (tĩnh) ────────────── --> <div class="ind-collage" data-astro-cid-wekxhxui> ${collage.map((c, i) => renderTemplate`<div${addAttribute(["ind-item", `ind-item--${c.kind}`], "class:list")}${addAttribute(`--w:${c.w}%;--ml:${c.ml}%;--r:${c.r}deg;--mt:${c.mt}rem;--z:${i + 1}`, "style")} data-astro-cid-wekxhxui> ${c.kind === "image" && renderTemplate`<img${addAttribute(c.img.src, "src")}${addAttribute(c.img.width, "width")}${addAttribute(c.img.height, "height")}${addAttribute(c.alt, "alt")} loading="lazy" decoding="async" data-astro-cid-wekxhxui>`} ${c.kind === "statement" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-wekxhxui": true }, { "default": ($$result2) => renderTemplate` <span class="ind-item-mark" data-astro-cid-wekxhxui> ${renderComponent($$result2, "ProductIcon", $$ProductIcon, { "name": "sparkles", "size": 16, "data-astro-cid-wekxhxui": true })} </span> <p class="ind-item-statement" data-astro-cid-wekxhxui>${c.text}</p> <span class="ind-item-attr" data-astro-cid-wekxhxui>${c.attr}</span> ` })}`} ${c.kind === "value" && renderTemplate`<p class="ind-item-value" data-astro-cid-wekxhxui>${c.text}</p>`} </div>`)} </div> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/IndustriesSection.astro", void 0);

const $$NewsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NewsSection;
  const {
    badge,
    title,
    titleHighlight,
    subtitle,
    posts,
    basePath = "/blog",
    viewAllHref,
    viewAllLabel,
    emptyText = "Sắp có bài viết mới."
  } = Astro2.props;
  const items = (posts ?? []).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="news-section" data-astro-cid-5ceflnty> <div class="container" data-astro-cid-5ceflnty> <header class="news-header" data-astro-cid-5ceflnty> <div class="news-head-text" data-astro-cid-5ceflnty> ${badge && renderTemplate`<span class="news-badge" data-astro-cid-5ceflnty>${badge}</span>`} ${title && renderTemplate`<h2 class="news-title" data-astro-cid-5ceflnty> ${title} ${titleHighlight && renderTemplate`<span class="news-hl" data-astro-cid-5ceflnty>${titleHighlight}</span>`} </h2>`} ${subtitle && renderTemplate`<p class="news-subtitle" data-astro-cid-5ceflnty>${subtitle}</p>`} </div> <a${addAttribute(viewAllHref, "href")} class="news-viewall" data-astro-cid-5ceflnty> ${viewAllLabel} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-5ceflnty> <path d="M5 12h14" data-astro-cid-5ceflnty></path><path d="m12 5 7 7-7 7" data-astro-cid-5ceflnty></path> </svg> </a> </header> ${items.length > 0 ? renderTemplate`<div class="news-grid" data-astro-cid-5ceflnty> ${items.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "title": post.title, "slug": post.slug, "excerpt": post.excerpt, "date": post.date, "imageUrl": post.featuredImage?.node?.sourceUrl, "imageAlt": post.featuredImage?.node?.altText, "category": post.categories?.nodes?.[0]?.name, "basePath": basePath, "data-astro-cid-5ceflnty": true })}`)} </div>` : renderTemplate`<div class="news-empty" data-astro-cid-5ceflnty> <p data-astro-cid-5ceflnty>${emptyText}</p> <a${addAttribute(viewAllHref, "href")} class="news-empty-link" data-astro-cid-5ceflnty> ${viewAllLabel} </a> </div>`} </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/NewsSection.astro", void 0);

const HOME = {
  hero: {
    badge: {
      vi: "Hệ sinh thái AI cho doanh nghiệp Việt",
      en: "An AI ecosystem for Vietnamese business"
    },
    titleLead: {
      vi: "Doanh nghiệp Việt bắt đầu với",
      en: "Vietnamese business starts with"
    },
    rotating: [
      { vi: "tư vấn bán hàng", en: "sales conversations" },
      { vi: "sản xuất nội dung", en: "content production" },
      { vi: "tự động hoá", en: "automation" }
    ],
    // Không nhắc lại ba lĩnh vực đã xoay ở tiêu đề.
    subtitle: {
      vi: "Chung một tài khoản, một nguồn dữ liệu khách hàng và một bảng điều khiển.",
      en: "One account, one source of customer data, one dashboard."
    },
    imageAlt: {
      vi: "Giao diện các sản phẩm trong hệ sinh thái VarenoAI",
      en: "The product interfaces across the VarenoAI ecosystem"
    },
    primaryCta: {
      label: { vi: "Khám phá dịch vụ", en: "Explore services" },
      href: NAV.services
    },
    // Nhãn PHẢI trùng cta.button trong i18n/ui.ts: cùng một ý định thì
    // chỉ được có một nhãn trên toàn trang.
    secondaryCta: {
      label: { vi: "Liên hệ tư vấn", en: "Talk to us" },
      href: NAV.contact
    }
  },
  showcase: {
    title: {
      vi: "Một nền tảng. Nhiều sản phẩm AI.",
      en: "One platform. Many AI products."
    },
    subtitle: {
      vi: "Mỗi sản phẩm chạy độc lập, nhưng dùng chung nền tảng dữ liệu và một tài khoản đăng nhập.",
      en: "Each product stands on its own, but they share one data platform and one login."
    }
  },
  // `label` và `blurb` đã bị xoá cùng dải nền tảng dưới EcosystemShowcase.
  // Thông điệp "một nền tảng" giờ do tiêu đề + phụ đề của section đó gánh.
  platform: {
    capabilities: [
      { vi: "Một tài khoản đăng nhập", en: "One login" },
      { vi: "Dữ liệu khách hàng dùng chung", en: "Shared customer data" },
      { vi: "Bảng điều khiển hợp nhất", en: "Unified dashboard" },
      { vi: "Bảo mật cấp doanh nghiệp", en: "Enterprise-grade security" }
    ]
  },
  values: {
    // Con số trong tiêu đề PHẢI khớp số phần tử `pillars` bên dưới. Đang là 4.
    title: { vi: "Bốn nguyên tắc chúng tôi", en: "Four principles we" },
    titleAccent: { vi: " không đánh đổi", en: " do not trade away" },
    subtitle: {
      vi: "Không chạy theo tính năng. Chúng tôi bám vào những điều quan trọng nhất với doanh nghiệp Việt: dữ liệu, tiếng Việt, tốc độ và vai trò của con người.",
      en: "We do not chase features. We hold to what matters most for Vietnamese businesses: your data, your language, speed, and the human in the loop."
    },
    pillars: [
      {
        icon: "lock",
        title: {
          vi: "Dữ liệu của bạn là của bạn",
          en: "Your data belongs to you"
        },
        desc: {
          vi: "Không bao giờ dùng dữ liệu khách hàng của bạn để huấn luyện mô hình công khai. Mọi kết nối đều mã hoá, và bạn toàn quyền xuất hay xoá bất cứ lúc nào.",
          en: "We never use your customer data to train public models. Every connection is encrypted, and you can export or delete it at any time."
        },
        points: [
          { vi: "Mã hoá đầu-cuối mọi kết nối", en: "End-to-end encryption on every connection" },
          {
            vi: "Không huấn luyện mô hình công khai bằng dữ liệu của bạn",
            en: "No public model is trained on your data"
          },
          { vi: "Xuất và xoá dữ liệu bất cứ lúc nào", en: "Export and delete your data anytime" }
        ]
      },
      {
        icon: "globe",
        title: { vi: "Tiếng Việt bản địa", en: "Native Vietnamese" },
        desc: {
          vi: "Tinh chỉnh cho ngữ cảnh, cách xưng hô và văn hoá kinh doanh Việt Nam, không phải bản dịch của một công cụ nước ngoài.",
          en: "Tuned for Vietnamese context, forms of address and business culture, not a translation of a foreign tool."
        },
        points: [
          { vi: "Hiểu cách xưng hô theo vai vế", en: "Understands Vietnamese forms of address" },
          {
            vi: "Nắm ngữ cảnh và thói quen mua sắm của người Việt",
            en: "Knows local context and buying habits"
          },
          { vi: "Trả lời tự nhiên, không cứng như máy dịch", en: "Replies naturally, not like a translator" }
        ]
      },
      {
        icon: "zap",
        title: { vi: "Triển khai trong vài giờ", en: "Live in hours" },
        desc: {
          vi: "Cấu hình hoàn toàn bằng giao diện, không cần đội kỹ thuật riêng. Thiết lập một lần rồi dùng chung cho mọi sản phẩm trong hệ sinh thái.",
          en: "Configure it entirely through the UI, no dedicated engineering team. Set it up once and share it across every product in the ecosystem."
        },
        points: [
          { vi: "Cấu hình hoàn toàn bằng giao diện", en: "Configure everything through the UI" },
          { vi: "Không cần lập trình hay đội IT riêng", en: "No coding or dedicated IT team" },
          { vi: "Thiết lập một lần, dùng cho mọi sản phẩm", en: "Set up once, use across every product" }
        ]
      },
      {
        icon: "users",
        title: { vi: "Con người luôn nắm quyền", en: "Humans stay in control" },
        desc: {
          vi: "AI lo phần lặp đi lặp lại, còn quyết định vẫn ở bạn. Luôn có nút bàn giao cho nhân viên thật ngay khi cuộc trò chuyện cần đến con người.",
          en: "AI handles the repetitive work; the decisions stay with you. A human handoff is one step away whenever a conversation needs a real person."
        },
        points: [
          { vi: "AI đề xuất, nhân viên quyết định", en: "AI suggests, your team decides" },
          { vi: "Bàn giao cho người thật chỉ bằng một bước", en: "Hand off to a human in one step" },
          {
            vi: "Xem lại và chỉnh câu trả lời trước khi gửi",
            en: "Review and edit replies before they go out"
          }
        ]
      }
    ]
  },
  industries: {
    title: { vi: "Phù hợp với", en: "A fit for" },
    titleAccent: { vi: " nhiều lĩnh vực", en: " many sectors" },
    subtitle: {
      vi: "Cùng một nền tảng, cấu hình khác nhau cho từng bài toán kinh doanh.",
      en: "One platform, configured differently for each business problem."
    },
    items: [
      {
        name: { vi: "Bán lẻ & TMĐT", en: "Retail & E-commerce" },
        blurb: {
          vi: "Tư vấn size, kiểm tồn kho và chốt đơn 24/7 ngay trên Website, Zalo OA và Messenger.",
          en: "Advises on sizing, checks stock and closes orders 24/7 right on your website, Zalo OA and Messenger."
        },
        icon: "shopping-bag",
        featured: true
      },
      {
        name: { vi: "Giáo dục & Đào tạo", en: "Education & Training" },
        blurb: {
          vi: "Giải đáp học phí, tư vấn tuyển sinh và nhắc lịch học tự động.",
          en: "Answers tuition questions, guides admissions and reminds students of schedules."
        },
        icon: "graduation-cap",
        featured: false
      },
      {
        name: { vi: "Bất động sản", en: "Real Estate" },
        blurb: {
          vi: "Lọc nhu cầu, gửi bảng hàng phù hợp và đặt lịch xem nhà.",
          en: "Qualifies interest, sends matching listings and books property viewings."
        },
        icon: "building",
        featured: false
      },
      {
        name: { vi: "Dịch vụ & CSKH", en: "Services & Support" },
        blurb: {
          vi: "Trả lời câu hỏi thường gặp, tiếp nhận và phân loại yêu cầu hỗ trợ.",
          en: "Answers common questions, receives and triages support requests."
        },
        icon: "headset",
        featured: false
      },
      {
        name: { vi: "Marketing & Nội dung", en: "Marketing & Content" },
        blurb: {
          vi: "Viết bài blog, mô tả sản phẩm và nội dung mạng xã hội đúng giọng thương hiệu.",
          en: "Writes blog posts, product descriptions and social content in your brand voice."
        },
        icon: "megaphone",
        featured: false
      },
      {
        name: { vi: "Chuỗi nhiều chi nhánh", en: "Multi-branch Chains" },
        blurb: {
          vi: "Một cấu hình dùng chung, dữ liệu và hội thoại tách riêng theo từng chi nhánh.",
          en: "One shared setup, with data and conversations separated per branch."
        },
        icon: "store",
        featured: false
      }
    ],
    href: NAV.solutions
  },
  news: {
    title: { vi: "Cập nhật mới nhất", en: "Latest updates" },
    subtitle: {
      vi: "Sản phẩm mới, hướng dẫn và câu chuyện từ đội ngũ của chúng tôi.",
      en: "New products, guides and stories from our team."
    },
    viewAll: { vi: "Xem tất cả", en: "View all" },
    empty: {
      vi: "Sắp có bài viết mới. Ghé lại sau nhé!",
      en: "Fresh articles are on the way. Check back soon!"
    }
  }
};

export { $$UmbrellaHero as $, HOME as H, $$EcosystemShowcase as a, $$ValuesSection as b, $$IndustriesSection as c, $$NewsSection as d };
