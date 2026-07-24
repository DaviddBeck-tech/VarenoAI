import { c as createComponent } from './astro-component_Drr875Ul.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_DdRf1b8J.mjs';
import 'clsx';

const $$SocialProof = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SocialProof;
  const { title, clientLogos, stats } = Astro2.props;
  const displayLogos = clientLogos && clientLogos.length > 0 ? clientLogos.map((item) => ({
    logo: item.logo?.node?.sourceUrl || item.logo || "Unknown Logo"
  })) : ["Acme Corp", "TechFlow", "DataSync", "CloudBase"].map((logo) => ({
    logo
  }));
  const defaultStats = [
    { value: "10,000+", label: "URLs analyzed", icon: "zap" },
    { value: "< 2s", label: "Response time", icon: "clock" },
    { value: "99.9%", label: "Uptime", icon: "shield" },
    { value: "Gemini", label: "Powered by AI", icon: "sparkles" }
  ];
  const displayStats = stats && stats.length > 0 ? stats : defaultStats;
  return renderTemplate`${maybeRenderHead()}<section class="relative py-10 md:py-16 scroll-animate"> <div class="container"> <p class="text-center text-sm text-muted-foreground mb-10 tracking-wide uppercase"> ${title || "Trusted by developers and teams worldwide"} </p> <!-- Company logos placeholder --> <div class="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-12"> ${displayLogos.map(
    (item) => item.logo.startsWith("http") || item.logo.startsWith("/") || item.logo.startsWith("data:") ? renderTemplate`<img${addAttribute(item.logo, "src")} alt="Client Logo" class="h-8 object-contain">` : renderTemplate`<div class="font-display font-bold text-lg text-foreground/60 tracking-tight"> ${item.logo} </div>`
  )} </div> <!-- Stats --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${displayStats.map((stat, index) => {
    const iconName = stat.icon || defaultStats[index % defaultStats.length].icon;
    return renderTemplate`<div class="text-center"> ${iconName === "zap" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path> </svg>`} ${iconName === "clock" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <polyline points="12 6 12 12 16 14"></polyline> </svg>`} ${iconName === "shield" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path> </svg>`} ${iconName === "sparkles" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path> <path d="M20 3v4"></path> <path d="M22 5h-4"></path> <path d="M4 17v2"></path> <path d="M5 18H3"></path> </svg>`} <div class="font-display text-2xl md:text-3xl font-bold text-foreground"> ${stat.value} </div> <div class="text-sm text-muted-foreground mt-1">${stat.label}</div> </div>`;
  })} </div> </div> </section>`;
}, "D:/DavidIT/VarenoAI/layoutchatvareno/varenoai-frontend/src/components/SocialProof.astro", void 0);

export { $$SocialProof as $ };
