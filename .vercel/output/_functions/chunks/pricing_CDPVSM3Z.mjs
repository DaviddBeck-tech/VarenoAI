import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DdRf1b8J.mjs';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from './Footer_ChqZwDWP.mjs';
import { $ as $$PricingSection } from './PricingSection_Ve4WlJeh.mjs';
import { S as SITE } from './site_xhkTMlR1.mjs';

const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pricing;
  Astro2.response.headers.set("Cache-Control", "s-maxage=60, stale-while-revalidate=86400");
  let pricingSettingsData = null;
  try {
    const response = await fetch(SITE.graphqlUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query GetPricingPageVI {
          pricingVi {
            pricingSetup {
              title
              titleHighlight
              description
              plans {
                planName
                desc
                price
                period
                priceYearly: priceyearly
                yearlyDescription: yearlydescription
                discountBadge: discountbadge
                isHighlighted
                ctaText
                ctaLink
                features {
                  featureText
                }
              }
            }
          }
        }
      `
      })
    });
    const json = await response.json();
    pricingSettingsData = json.data?.pricingVi?.pricingSetup;
  } catch (error) {
    console.error("Failed to fetch pricing data from WordPress:", error);
  }
  const seoData = {
    title: pricingSettingsData?.title ? `${pricingSettingsData.title} | ${SITE.brandName}` : `Bảng giá | ${SITE.brandName}`,
    description: pricingSettingsData?.description || `Chi tiết các gói cước linh hoạt của ${SITE.brandName}, đáp ứng mọi nhu cầu doanh nghiệp.`
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoData.title, "description": seoData.description, "seo": seoData, "lang": "vi" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex flex-col pt-16"> ${renderComponent($$result2, "Header", $$Header, {})} <main class="flex-grow pt-12 pb-24"> ${pricingSettingsData && renderTemplate`${renderComponent($$result2, "PricingSection", $$PricingSection, { "title": pricingSettingsData.title, "titleHighlight": pricingSettingsData.titleHighlight, "description": pricingSettingsData.description, "pricingPlans": pricingSettingsData.plans })}`} ${!pricingSettingsData && renderTemplate`${renderComponent($$result2, "PricingSection", $$PricingSection, {})}`} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> ` })}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/pricing.astro", void 0);

const $$file = "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
