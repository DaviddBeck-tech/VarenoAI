import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { c as addAttribute, b as renderTemplate, e as renderHead } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';
import { r as renderScript } from './script_3r76pLgk.mjs';

const $$FrameLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FrameLayout;
  const { iframeSrc, label, title, description, lang = "vi" } = Astro2.props;
  const canonical = iframeSrc;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}<meta name="robots" content="noindex, follow"><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" type="image/x-icon" href="/favicon.png">${renderHead()}</head> <body> <div class="frame-loading" id="frame-loading">Đang tải ${label}…</div> <iframe class="frame-embed"${addAttribute(iframeSrc, "src")}${addAttribute(label, "title")} loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe> ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/layouts/FrameLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/layouts/FrameLayout.astro", void 0);

export { $$FrameLayout as $ };
