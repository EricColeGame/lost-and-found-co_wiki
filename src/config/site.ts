import { routing } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  websiteUrl?: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    bluesky?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Lost and Found Co Wiki",
  shortName: "Lost and Found Co",
  logoText: "LF",
  tagline: "Hidden Object Walkthroughs, Puzzle Solutions & Collectibles",
  description: "Explore Plumville in Lost and Found Co with walkthroughs, hidden object locations, puzzle solutions, collectibles, characters, and quest guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lost-and-found-co.wiki",
  supportEmail: "support@lost-and-found-co.wiki",
  websiteUrl: "https://lostandfoundcogame.com",
  gameUrl: "https://store.steampowered.com/app/2101390/Lost_and_Found_Co/",
  heroVideoId: "QG8rYWH1dP8", // Lost and Found Co official gameplay trailer
  social: {
    discord: "https://discord.gg/MwcmyjvWmq",
    youtube: "https://www.youtube.com/@lostandfoundco_game",
    twitter: "https://x.com/_LostAndFoundCo",
    instagram: "https://www.instagram.com/lostandfoundco_game/",
    facebook: "https://www.facebook.com/LostAndFoundCoGame",
    tiktok: "https://www.tiktok.com/@lostandfoundco_game",
    bluesky: "https://bsky.app/profile/lostandfoundco.bsky.social",
  },
  locales: routing.locales,
  defaultLocale: "en",
};
