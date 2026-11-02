import type { LucideIcon } from "lucide-react";
import { BookOpen, Gem, ListChecks, Monitor, Package, Settings, Users } from "lucide-react";

type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "quests", path: "/quests", icon: ListChecks, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "collectibles", path: "/collectibles", icon: Gem, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Settings, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
