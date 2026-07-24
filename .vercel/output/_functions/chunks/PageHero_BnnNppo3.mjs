import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';

const $$PageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageHero;
  const { badge, title, titleHighlight, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="page-hero" data-astro-cid-s5hxusys> <div class="container" data-astro-cid-s5hxusys> <div class="ph-inner" data-astro-cid-s5hxusys> ${badge && renderTemplate`<span class="ph-badge" data-astro-cid-s5hxusys>${badge}</span>`} <h1 class="ph-title" data-astro-cid-s5hxusys> ${title} ${titleHighlight && renderTemplate`<span class="ph-highlight" data-astro-cid-s5hxusys>${titleHighlight}</span>`} </h1> ${subtitle && renderTemplate`<p class="ph-subtitle" data-astro-cid-s5hxusys>${subtitle}</p>`} </div> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/PageHero.astro", void 0);

export { $$PageHero as $ };
