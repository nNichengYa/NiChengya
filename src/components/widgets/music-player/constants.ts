import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
  /*
  {
    id: 1,
    title: "Copines",
    artist: "Aya Nakamura",
    cover: "assets/music/cover/cop.webp",
    url: "assets/music/url/cop.mp3",
    duration: 0,
  },
  {
    id: 2,
    title: "最佳损友",
    artist: "陈奕迅",
    cover: "assets/music/cover/zjsy.webp",
    url: "assets/music/url/zjsy.mp3",
    duration: 0,
  },
  {
    id: 4,
    title: "富士山下",
    artist: "陈奕迅",
    cover: "assets/music/cover/fssx.webp",
    url: "assets/music/url/fssx.mp3",
    duration: 0,
  },

  {
    id: 3,
    title: "远山少年",
    artist: "程奎",
    cover: "assets/music/cover/yssn.webp",
    url: "assets/music/url/yssn.mp3",
    duration: 0,
  },

  {
    id: 5,
    title: "听说当初你找过我",
    artist: "贺一航",
    cover: "assets/music/cover/tsdcnzgw.webp",
    url: "assets/music/url/tsdcnzgw.mp3",
    duration: 0,
  },
  {
    id: 6,
    title: "西厢寻他",
    artist: "伯爵Johnny,唐伯虎Annie",
    cover: "assets/music/cover/xxxt.webp",
    url: "assets/music/url/xxxt.mp3",
    duration: 0,
  },
  */
];

export const DEFAULT_SONG: Song = {
  title: "Sample Song",
  artist: "Sample Artist",
  cover: "/favicon/favicon.ico",
  url: "",
  duration: 0,
  id: 0,
};

export const DEFAULT_METING_API =
  "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
