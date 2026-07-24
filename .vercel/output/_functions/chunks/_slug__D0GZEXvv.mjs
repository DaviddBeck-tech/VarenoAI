import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute, u as unescapeHTML } from './entrypoint_DdRf1b8J.mjs';
import { r as renderScript } from './script_3r76pLgk.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { p as parseHtmlForToc, $ as $$TableOfContents } from './toc_D_8Xplao.mjs';
import { g as getPostBySlug, a as getRelatedPosts } from './wordpress_DHipz59k.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  Astro2.response.headers.set("Cache-Control", "s-maxage=60, stale-while-revalidate=86400");
  const { slug } = Astro2.params;
  const post = slug ? await getPostBySlug(slug) : null;
  if (!post) {
    return Astro2.redirect("/en/blog");
  }
  const seoData = post?.seo;
  const { content: modifiedContent, toc } = parseHtmlForToc(post?.content || "");
  const plainText = post.content?.replace(/<[^>]*>/g, "") || "";
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const formattedModified = post.modified ? new Date(post.modified).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : formattedDate;
  const categorySlug = post.categories?.nodes?.[0]?.slug;
  const relatedPosts = categorySlug ? await getRelatedPosts(categorySlug, post.slug, 8) : [];
  const sidebarRelated = relatedPosts.slice(0, 4);
  const bottomRelated = relatedPosts;
  const shareUrl = `${SITE.siteUrl}/en/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoData?.title || `${post.title} — ${SITE.brandName}`, "description": seoData?.description || post.excerpt?.replace(/<[^>]*>/g, "").slice(0, 160) || `Read the latest articles on ${SITE.brandName}.`, "seo": seoData, "lang": "en" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-24 pb-16"> <article class="container max-w-[1200px]"> <!-- Top meta bar --> <div class="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground"> ${post.categories?.nodes?.[0] && renderTemplate`<span class="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"> ${post.categories.nodes[0].name} </span>`} <span class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${readingTime} min read
</span> <span class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> ${wordCount} words
</span> </div> <!-- Title --> <h1 class="font-display text-3xl md:text-[2.5rem] font-bold tracking-tight mb-8 leading-tight"> ${post.title} </h1> <!-- Hero section: Featured Image + Info Card --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"> <!-- Featured Image --> ${post.featuredImage?.node?.sourceUrl && renderTemplate`<div class="lg:col-span-2 rounded-2xl overflow-hidden aspect-16/10 lg:self-start"> <img${addAttribute(post.featuredImage.node.sourceUrl, "src")}${addAttribute(post.featuredImage.node.altText || post.title, "alt")} class="w-full h-full object-cover"> </div>`} <!-- Info Sidebar Card --> <div class="lg:col-span-1 space-y-5"> <!-- Author --> <div class="rounded-xl border border-border/60 bg-card/50 p-5"> <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
Author
</h3> <div class="flex items-center gap-3"> ${post.author?.node?.avatar?.url && renderTemplate`<img${addAttribute(post.author.node.avatar.url, "src")}${addAttribute(post.author.node.name, "alt")} class="w-10 h-10 rounded-full ring-2 ring-primary/20">`} <span class="font-medium text-foreground">${post.author?.node?.name || "Admin"}</span> </div> </div> <!-- Dates --> <div class="rounded-xl border border-border/60 bg-card/50 p-5 space-y-3"> <div> <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
Published
</h3> <time${addAttribute(post.date, "datetime")} class="text-sm text-foreground">${formattedDate}</time> </div> <div class="border-t border-border/40 pt-3"> <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
Updated
</h3> <time${addAttribute(post.modified || post.date, "datetime")} class="text-sm text-foreground">${formattedModified}</time> </div> </div> <!-- Related Posts --> ${sidebarRelated.length > 0 && renderTemplate`<div class="rounded-xl border border-border/60 bg-card/50 p-5"> <h3 class="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
Related Posts
</h3> <ul class="space-y-2.5"> ${sidebarRelated.map((rp) => renderTemplate`<li> <a${addAttribute(`/en/blog/${rp.slug}`, "href")} class="group flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"> <span class="text-primary/60 mt-0.5">›</span> <span class="group-hover:underline underline-offset-2 line-clamp-2">${rp.title}</span> </a> </li>`)} </ul> </div>`} </div> </div> <!-- Main Content Area: TOC + Content --> <div class="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10"> <!-- Sidebar TOC (Desktop only) --> <aside class="hidden lg:block"> ${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "toc": toc, "title": "Table of Contents" })} </aside> <!-- Main Content --> <div> <div class="prose prose-lg dark:prose-invert max-w-none">${unescapeHTML(modifiedContent)}</div> </div> </div> <!-- You might also like --> ${bottomRelated.length > 0 && renderTemplate`<div class="mt-12 rounded-xl border border-border/60 bg-card/30 p-6"> <h3 class="font-display font-semibold text-lg mb-4 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
You might also like
</h3> <ul class="space-y-3"> ${bottomRelated.map((rp) => renderTemplate`<li> <a${addAttribute(`/en/blog/${rp.slug}`, "href")} class="group flex items-start gap-2.5 text-muted-foreground hover:text-primary transition-colors"> <span class="text-primary/60 mt-0.5 text-lg">›</span> <span class="group-hover:underline underline-offset-2">${rp.title}</span> </a> </li>`)} </ul> </div>`} <!-- Share buttons --> <div class="mt-8 flex items-center gap-3"> <span class="text-sm text-muted-foreground font-medium">Share:</span> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity" aria-label="Share on Facebook"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg> </a> <a${addAttribute(`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity" aria-label="Share on X"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> </a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "href")} target="_blank" rel="noopener noreferrer" class="w-9 h-9 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity" aria-label="Share on LinkedIn"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </a> <button onclick="navigator.clipboard.writeText(window.location.href).then(()=>alert('Link copied!'))" class="w-9 h-9 flex items-center justify-center rounded-full bg-muted text-foreground hover:opacity-80 transition-opacity" aria-label="Copy link"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> </button> </div> <!-- Back link --> <div class="mt-12 pt-8 border-t border-border/50"> <a href="/en/blog" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
Back to Blog
</a> </div> </article> </main>  <div id="image-lightbox" class="fixed inset-0 z-100 hidden items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out" role="dialog" aria-modal="true" aria-label="View enlarged image"> <button id="image-lightbox-close" class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors" aria-label="Close image"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> </button> <img alt="" class="max-w-full max-h-full object-contain rounded-xl shadow-2xl"> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/blog/[slug].astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/blog/[slug].astro";
const $$url = "/en/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
