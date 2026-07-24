import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$Image } from './_astro_assets_Caq6BS4m.mjs';

const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCard;
  const { title, slug, excerpt, date, imageUrl, imageAlt, authorName, category, basePath = "/blog" } = Astro2.props;
  const formattedDate = new Date(date).toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const cleanExcerpt = excerpt.replace(/<[^>]*>/g, "").slice(0, 150) + "...";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${basePath}/${slug}`, "href")} class="block glass-card-hover overflow-hidden group" data-astro-cid-iyiqi2so> ${imageUrl ? renderTemplate`<div class="aspect-video overflow-hidden bg-muted/20" data-astro-cid-iyiqi2so> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": imageAlt || title, "width": 800, "height": 450, "format": "webp", "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", "loading": "lazy", "decoding": "async", "data-astro-cid-iyiqi2so": true })} </div>` : renderTemplate`<div class="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center" data-astro-cid-iyiqi2so> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-iyiqi2so><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-astro-cid-iyiqi2so></rect><circle cx="9" cy="9" r="2" data-astro-cid-iyiqi2so></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" data-astro-cid-iyiqi2so></path></svg> </div>`} <div class="p-5" data-astro-cid-iyiqi2so> ${category && renderTemplate`<span class="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-3" data-astro-cid-iyiqi2so> ${category} </span>`} <h3 class="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2" data-astro-cid-iyiqi2so> ${title} </h3> <p class="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3" data-astro-cid-iyiqi2so> ${cleanExcerpt} </p> <div class="flex items-center justify-between text-xs text-muted-foreground" data-astro-cid-iyiqi2so> ${authorName && renderTemplate`<span data-astro-cid-iyiqi2so>${authorName}</span>`} <span data-astro-cid-iyiqi2so>${formattedDate}</span> </div> </div> </a>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };
