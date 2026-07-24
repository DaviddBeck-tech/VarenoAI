import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as renderTemplate, c as addAttribute } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';
import { r as renderScript } from './script_3r76pLgk.mjs';

const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PricingSection;
  const {
    title,
    titleHighlight,
    description,
    pricingPlans
  } = Astro2.props;
  const defaultPlans = [
    {
      planName: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect for trying things out",
      features: ["50 queries/month", "5 URLs per session", "Basic chat history", "Community support"],
      ctaText: "Get Started Free",
      ctaLink: "#",
      isHighlighted: false
    },
    {
      planName: "Pro",
      price: "$19",
      period: "/month",
      desc: "For power users and indie devs",
      features: ["Unlimited queries", "Unlimited URLs", "Full conversation history", "Priority support", "Export to markdown", "API access"],
      ctaText: "Start Pro Trial",
      ctaLink: "#",
      isHighlighted: true
    },
    {
      planName: "Team",
      price: "$49",
      period: "/month",
      desc: "For teams that ship fast",
      features: ["Everything in Pro", "5 team members", "Shared workspaces", "Admin dashboard", "SSO & SAML", "Dedicated support"],
      ctaText: "Contact Sales",
      ctaLink: "#",
      isHighlighted: false
    }
  ];
  const displayPlans = pricingPlans && pricingPlans.length > 0 ? pricingPlans : defaultPlans;
  return renderTemplate`${maybeRenderHead()}<section id="pricing" class="relative py-14 md:py-32 scroll-animate" data-astro-cid-przegf2x> <div class="container" data-astro-cid-przegf2x> <div class="text-center mb-16" data-astro-cid-przegf2x> ${title ? renderTemplate`<h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4" data-astro-cid-przegf2x> ${title} ${titleHighlight && renderTemplate`<span class="gradient-text" data-astro-cid-przegf2x>${titleHighlight}</span>`} </h2>` : renderTemplate`<h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4" data-astro-cid-przegf2x>
Simple, transparent <span class="gradient-text" data-astro-cid-przegf2x>pricing</span> </h2>`} <p class="text-muted-foreground text-lg" data-astro-cid-przegf2x>${description || "No hidden fees. Cancel anytime."}</p> </div> <div class="flex justify-center items-center gap-4 mb-12" data-astro-cid-przegf2x> <span class="text-sm font-semibold text-foreground transition-colors" id="label-monthly" data-astro-cid-przegf2x>Monthly</span> <button type="button" id="pricing-toggle-btn" class="relative inline-flex h-7 w-14 items-center rounded-full bg-secondary-foreground/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background" role="switch" aria-checked="false" data-astro-cid-przegf2x> <span class="sr-only" data-astro-cid-przegf2x>Toggle Yearly Pricing</span> <span class="translate-x-1 inline-block h-5 w-5 transform rounded-full bg-background shadow transition-transform duration-200 ease-in-out" id="pricing-toggle-knob" data-astro-cid-przegf2x></span> </button> <span class="text-sm font-medium text-muted-foreground transition-colors" id="label-yearly" data-astro-cid-przegf2x>Yearly</span> </div> <div id="pricing-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 max-w-7xl mx-auto" data-astro-cid-przegf2x> ${displayPlans.map((plan) => {
    const normalizedFeatures = plan.features?.length > 0 ? plan.features.map((f) => typeof f === "object" ? f.featureText : f) : [];
    return renderTemplate`<div${addAttribute([
      "relative rounded-2xl p-5 lg:p-3 xl:p-7 flex flex-col h-full",
      plan.isHighlighted ? "glass-card border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]" : "glass-card"
    ], "class:list")} data-astro-cid-przegf2x> ${plan.isHighlighted && renderTemplate`<div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 xl:px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] xl:text-xs font-semibold whitespace-nowrap" data-astro-cid-przegf2x>
Most Popular
</div>`} <h3 class="font-display text-lg font-semibold mb-1 flex items-center gap-2" data-astro-cid-przegf2x> ${plan.planName} ${plan.discountBadge && renderTemplate`<span class="yearly-element-inline hidden items-center rounded-full bg-green-100 dark:bg-green-900/40 px-2.5 py-0.5 text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider" data-astro-cid-przegf2x> ${plan.discountBadge} </span>`} </h3> ${plan.desc && renderTemplate`<p class="text-muted-foreground text-sm mb-5" data-astro-cid-przegf2x>${plan.desc}</p>`} <div${addAttribute(`mb-6 ${!plan.desc ? "mt-3" : ""}`, "class")} data-astro-cid-przegf2x> <!-- Monthly Block --> <div class="monthly-element block" data-astro-cid-przegf2x> <span class="font-display text-xl xl:text-2xl font-bold" data-astro-cid-przegf2x>${plan.price}</span> <span class="text-muted-foreground text-xs xl:text-sm ml-1 whitespace-nowrap" data-astro-cid-przegf2x>${plan.period}</span> </div> <!-- Yearly Block --> <div class="yearly-element hidden" data-astro-cid-przegf2x> <span class="font-display text-xl xl:text-2xl font-bold" data-astro-cid-przegf2x>${plan.priceYearly || plan.price}</span> <span class="text-muted-foreground text-xs xl:text-sm ml-1 whitespace-nowrap" data-astro-cid-przegf2x>${plan.yearlyDescription || "/year"}</span> </div> </div> <ul class="space-y-3 mb-8 flex-1" data-astro-cid-przegf2x> ${normalizedFeatures.map((f) => renderTemplate`<li class="flex items-center gap-2.5 text-[13px]" data-astro-cid-przegf2x> <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-przegf2x><path d="M20 6 9 17l-5-5" data-astro-cid-przegf2x></path></svg> <span class="text-foreground/80" data-astro-cid-przegf2x>${f}</span> </li>`)} </ul> ${plan.isHighlighted ? renderTemplate`<a${addAttribute(plan.ctaLink || "#", "href")} target="_blank" rel="noopener noreferrer" class="btn-hero text-center w-full px-2 xl:px-4 text-xs xl:text-base whitespace-nowrap" data-astro-cid-przegf2x> ${plan.ctaText} </a>` : renderTemplate`<a${addAttribute(plan.ctaLink || "#", "href")} target="_blank" rel="noopener noreferrer" class="btn-outline text-center w-full px-2 xl:px-4 text-xs xl:text-base whitespace-nowrap" data-astro-cid-przegf2x> ${plan.ctaText} </a>`} </div>`;
  })} </div> </div> </section>  ${renderScript($$result, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/PricingSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/PricingSection.astro", void 0);

export { $$PricingSection as $ };
