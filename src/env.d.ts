/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module "sharp" {
  export default function sharp(input?: Buffer | string): import("sharp").Sharp;
}

/// <reference types="astro/client" />

import type { WALLPAPER_MODE } from "./types/config";

declare global {
  interface Window {
    // 壁纸相关
    switchWallpaperMode: (mode: WALLPAPER_MODE) => void;
    getCurrentWallpaperMode: () => WALLPAPER_MODE;
    toggleWallpaperDropdown: () => void;
    closeWallpaperDropdown: () => void;
    updateWallpaperActiveState: () => void;

    // ✅ 移除布局切换相关
    // switchLayout: () => void;
    // toggleLayout: () => void;
    // updateLayoutIcon: () => void;

    // 已有的
    loadPagefind: () => Promise<void>;
    initSemifullScrollDetection: () => void;
    semifullScrollHandler?: () => void;
    pagefind?: any;
  }

  // ✅ 移除 layoutChange 事件映射
  interface CustomEventMap {
    // layoutChange: CustomEvent<{ layout: "list" | "grid" }>;
    "settingspanel-loaded": CustomEvent<void>;
  }
}

export {};
