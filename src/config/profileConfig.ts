import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "/assets/home/t.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "n昵称YA",
  bio: "一个平凡的无名小卒", // 个人简介
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },

  links: [
    {
      name: "Bilibili",
      icon: "fa7-brands:bilibili",
      url: "https://space.bilibili.com/394835526",
    },

    /*
       {
      name: "QQ",
      icon: "local:qq", // FontAwesome 的 QQ 图标
      url: "https://user.qzone.qq.com/1576664522", // QQ 个人资料页
    },

    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/nNichengYa",
    },
    */
  ],
};
