import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate, c as addAttribute } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';
import { N as NAV } from './nav_DcpAvAUt.mjs';
import { g as getLangFromUrl, d as useTranslations, u as useTranslatedPath } from './Footer_ChqZwDWP.mjs';

const $$CtaBand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CtaBand;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const {
    title = t("cta.title"),
    subtitle = t("cta.subtitle"),
    buttonLabel = t("cta.button"),
    buttonHref = translatePath(NAV.contact)
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="cta-band" data-astro-cid-kokrr3jq> <div class="container" data-astro-cid-kokrr3jq> <div class="cta-inner" data-astro-cid-kokrr3jq> <div class="cta-text" data-astro-cid-kokrr3jq> <h2 class="cta-title" data-astro-cid-kokrr3jq>${title}</h2> ${subtitle && renderTemplate`<p class="cta-subtitle" data-astro-cid-kokrr3jq>${subtitle}</p>`} </div> <a${addAttribute(buttonHref, "href")} class="cta-button" data-astro-cid-kokrr3jq> ${buttonLabel} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-kokrr3jq> <path d="M5 12h14" data-astro-cid-kokrr3jq></path><path d="m12 5 7 7-7 7" data-astro-cid-kokrr3jq></path> </svg> </a> </div> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/CtaBand.astro", void 0);

export { $$CtaBand as $ };
