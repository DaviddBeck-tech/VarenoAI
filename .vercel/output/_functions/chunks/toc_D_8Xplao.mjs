import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';
import { r as renderScript } from './script_3r76pLgk.mjs';
import * as cheerio from 'cheerio';

const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc, title = "Nội dung" } = Astro2.props;
  if (!toc || toc.length === 0) return null;
  return renderTemplate`${maybeRenderHead()}<nav data-lenis-prevent class="toc-container sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar pb-8" data-astro-cid-xvrfupwn> <h4 class="font-display font-semibold text-lg mb-4 text-foreground/90" data-astro-cid-xvrfupwn>${title}</h4> <ul class="space-y-2.5 text-sm" data-astro-cid-xvrfupwn> ${toc.map((item) => renderTemplate`<li${addAttribute(`toc-item toc-level-${item.level}`, "class")} data-astro-cid-xvrfupwn> <a${addAttribute(`#${item.id}`, "href")}${addAttribute(`
            block text-muted-foreground hover:text-primary transition-colors
            ${item.level === 3 ? "pl-4" : ""}
            ${item.level === 4 ? "pl-8" : ""}
          `, "class")} data-astro-cid-xvrfupwn> ${item.text} </a> </li>`)} </ul> </nav>  ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/TableOfContents.astro", void 0);

function parseHtmlForToc(html) {
  if (!html) {
    return { content: "", toc: [] };
  }
  const $ = cheerio.load(html);
  const toc = [];
  $("h2, h3").each((i, el) => {
    const $el = $(el);
    const text = $el.text().trim();
    const id = text.toLowerCase().replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    const finalId = id || `heading-${i}`;
    $el.attr("id", finalId);
    const level = parseInt(el.tagName.replace("h", ""), 10);
    toc.push({
      id: finalId,
      text,
      level
    });
  });
  $("img").each((i, el) => {
    const $img = $(el);
    if (i > 0 && !$img.attr("loading")) $img.attr("loading", "lazy");
    if (!$img.attr("decoding")) $img.attr("decoding", "async");
  });
  return {
    // Return HTML with injected IDs
    content: $.html(),
    toc
  };
}

export { $$TableOfContents as $, parseHtmlForToc as p };
