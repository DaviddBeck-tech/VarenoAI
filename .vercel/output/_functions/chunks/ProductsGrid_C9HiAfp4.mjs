import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate, c as addAttribute, r as renderComponent } from './entrypoint_DdRf1b8J.mjs';
import { g as getLangFromUrl, c as $$ProductIcon, d as useTranslations, u as useTranslatedPath } from './Footer_ChqZwDWP.mjs';
import { n as navProducts, p as productPath } from './products_B4dkJEK6.mjs';

const $$ProductsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProductsGrid;
  const { badge, title, subtitle } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const products = navProducts();
  return renderTemplate`${maybeRenderHead()}<section class="pg-section" data-astro-cid-esvfidn7> <div class="container" data-astro-cid-esvfidn7> ${(badge || title || subtitle) && renderTemplate`<header class="pg-header" data-astro-cid-esvfidn7> ${badge && renderTemplate`<span class="pg-badge-top" data-astro-cid-esvfidn7>${badge}</span>`} ${title && renderTemplate`<h2 class="pg-title" data-astro-cid-esvfidn7>${title}</h2>`} ${subtitle && renderTemplate`<p class="pg-subtitle" data-astro-cid-esvfidn7>${subtitle}</p>`} </header>`} <div class="pg-grid" data-astro-cid-esvfidn7> ${products.map((p) => renderTemplate`<a${addAttribute(translatePath(productPath(p)), "href")} class="pg-card"${addAttribute(p.status, "data-status")} data-astro-cid-esvfidn7> <span class="pg-icon" data-astro-cid-esvfidn7> ${renderComponent($$result, "ProductIcon", $$ProductIcon, { "name": p.icon, "size": 26, "data-astro-cid-esvfidn7": true })} </span> <h3 class="pg-name" data-astro-cid-esvfidn7> ${p.name} ${p.status === "coming-soon" && renderTemplate`<em class="pg-soon" data-astro-cid-esvfidn7>${t("products.comingSoon")}</em>`} </h3> <p class="pg-tagline" data-astro-cid-esvfidn7>${p.tagline[lang]}</p> <p class="pg-desc" data-astro-cid-esvfidn7>${p.description[lang]}</p> <span class="pg-link" data-astro-cid-esvfidn7> ${t("products.learnMore")} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-esvfidn7> <path d="M5 12h14" data-astro-cid-esvfidn7></path> <path d="m12 5 7 7-7 7" data-astro-cid-esvfidn7></path> </svg> </span> </a>`)} </div> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/ProductsGrid.astro", void 0);

export { $$ProductsGrid as $ };
