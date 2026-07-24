import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { e as getPageBySlug } from './wordpress_DHipz59k.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  Astro2.response.headers.set(
    "Cache-Control",
    "s-maxage=60, stale-while-revalidate=86400"
  );
  const { slug } = Astro2.params;
  const wpSlug = slug === "privacy-policy" ? "privacy" : slug;
  let page = wpSlug ? await getPageBySlug(`${wpSlug}-vi`) : null;
  if (!page && wpSlug) {
    page = await getPageBySlug(wpSlug);
  }
  if (!page) {
    return Astro2.redirect("/404");
  }
  const seoData = {
    title: `${page.title} - ${SITE.brandName}`,
    description: page.content?.replace(/<[^>]*>/g, "").slice(0, 160) || `${SITE.brandName} Legal Page`
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoData.title, "description": seoData.description, "seo": seoData }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-32 pb-24 min-h-screen border-t border-border/40"> <article class="container max-w-[800px] mx-auto px-4 md:px-8"> <h1 class="font-display text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center md:text-left text-foreground"> ${page.title} </h1> <div class="prose prose-lg dark:prose-invert max-w-none 
               prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
               prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-2xl 
               prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-xl
               prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
               prose-a:text-primary prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:text-primary/80
               prose-ul:text-muted-foreground prose-li:mb-2
               prose-strong:text-foreground prose-strong:font-semibold">${unescapeHTML(page.content)}</div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/legal/[slug].astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/legal/[slug].astro";
const $$url = "/legal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
