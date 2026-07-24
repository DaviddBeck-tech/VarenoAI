import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$PostCard } from './PostCard_-UhG9NzO.mjs';
import { b as getBlogPageData, c as getPosts } from './wordpress_DHipz59k.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  Astro2.response.headers.set("Cache-Control", "s-maxage=60, stale-while-revalidate=86400");
  let posts = [];
  let error = "";
  const blogPage = await getBlogPageData("en");
  const heroTitle = blogPage?.heroTitle || "Our";
  const heroHighlight = blogPage?.heroHighlight || "Blog";
  const heroSubtitle = blogPage?.heroSubtitle || `Latest articles, tutorials, and updates from the ${SITE.brandName} team.`;
  try {
    posts = await getPosts(12, "en");
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch posts";
    console.error("Blog fetch error:", error);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Blog — ${SITE.brandName}`, "description": heroSubtitle, "lang": "en" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-24 pb-16"> <div class="container"> <div class="text-center mb-16"> <h1 class="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4"> ${heroTitle} <span class="gradient-text">${heroHighlight}</span> </h1> <p class="text-muted-foreground text-lg max-w-xl mx-auto"> ${heroSubtitle} </p> </div> ${error ? renderTemplate`<div class="glass-card p-8 text-center max-w-lg mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-muted-foreground mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> <h2 class="font-display text-xl font-semibold mb-2">Cannot connect to WordPress</h2> <p class="text-sm text-muted-foreground mb-4">
Make sure MAMP is running and WPGraphQL plugin is activated.
</p> <code class="text-xs bg-secondary/60 px-3 py-1 rounded text-muted-foreground"> ${error} </code> </div>` : posts.length === 0 ? renderTemplate`<div class="glass-card p-8 text-center max-w-lg mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-muted-foreground mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> <h2 class="font-display text-xl font-semibold mb-2">No posts yet</h2> <p class="text-sm text-muted-foreground">
Create your first post in WordPress admin.
</p> </div>` : renderTemplate`<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "title": post.title, "slug": post.slug, "excerpt": post.excerpt, "date": post.date, "imageUrl": post.featuredImage?.node?.sourceUrl, "imageAlt": post.featuredImage?.node?.altText, "authorName": post.author?.node?.name, "category": post.categories?.nodes?.[0]?.name, "basePath": "/en/blog" })}`)} </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/blog/index.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
