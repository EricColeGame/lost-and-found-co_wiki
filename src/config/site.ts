export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Lost and Found Co Wiki",
  shortName: "Lost & Found Co",
  logoText: "LF",
  tagline: "Hidden Object Walkthroughs, Puzzle Solutions & Collectibles",
  description: "Explore Plumville in Lost and Found Co with walkthroughs, hidden object locations, puzzle solutions, collectibles, characters, and quest guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lost-and-found-co.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lost-and-found-co.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2101390/Lost_and_Found_Co/",
  heroVideoId: "QG8rYWH1dP8", // Lost and Found Co official gameplay trailer
  social: {
    discord: "https://discord.gg/MwcmyjvWmq",
    youtube: "https://www.youtube.com/@lostandfoundco_game",
    twitter: "https://x.com/_LostAndFoundCo",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
