import type { PioConfig } from "../types/config";

// Pio 看板娘配置
/*
export const pioConfig: PioConfig = {
  enable: true, // 启用看板娘
  models: ["/pio/models/NOIR/noir.model3.json"], // 默认模型路径
  position: "left", // 模型位置
  width: 280, // 默认宽度
  height: 250, // 默认高度
  mode: "draggable", // 默认可拖拽模式
  hiddenOnMobile: false, // 移动设备不隐藏
  hideAboutMenu: false, // 不隐藏关于菜单
  dialog: {
    welcome: "欢迎来到 n昵称YA 博客！", // 欢迎词
    touch: ["你在做什么呀？", "别摸我啦！", "HENTAI！", "不要这样欺负我嘛～"], // 触摸提示
    home: "点击这里回到首页！", // 首页提示
    skin: ["想看看我的新衣服吗？", "新衣服真好看～"], // 换装提示
    close: "QWQ 下次再见啦～", // 关闭提示
    link: "https://github.com/LyraVoid/Mizuki", // 关于链接
  },
};
*/

// Pio 看板娘配置
export const pioConfig: PioConfig = {
  // ===== 基础配置 =====
  enable: true, // 是否启用看板娘

  // ===== 模型配置 =====
  models: [
    "/pio/models/NOIR/noir.model3.json", // 默认模型
    // 可以添加多个模型，看板娘会随机显示
    // "/pio/models/AnotherModel/another.model3.json",
  ],

  // ===== 位置与尺寸 =====
  position: "left", // 看板娘位置："left" | "right"
  width: 280, // 看板娘宽度（像素）
  height: 250, // 看板娘高度（像素）

  // ===== 交互模式 =====
  mode: "draggable", // 展现模式："static" | "fixed" | "draggable"

  // ===== 移动端控制 =====
  hiddenOnMobile: false, // 是否在移动设备上隐藏（false = 不隐藏，会缩放适配）
  hideAboutMenu: false, // 是否隐藏内置 About 菜单按钮

  // ===== 对话配置 =====
  dialog: {
    // 欢迎词（页面加载时显示）
    welcome: "欢迎来到 n昵称YA 博客！",
    // 触摸提示（点击看板娘时随机显示）
    touch: [
      "你在做什么呀？",
      "别摸我啦！",
      "HENTAI！",
      "不要这样欺负我嘛～",
      "再摸我要生气了！",
    ],
    // 首页提示（点击首页按钮时显示）
    home: "点击这里回到首页！",
    // 换装提示 [切换前, 切换后]
    skin: ["想看看我的新衣服吗？", "新衣服真好看～"],
    // 关闭提示
    close: "QWQ 下次再见啦～",
    // 关于链接
    link: "https://github.com/LyraVoid/Mizuki",
    // 自定义交互（看板娘对页面特定元素的反应）
    custom: [
      // 示例：点击文章时触发
      {
        selector: ".post-title",
        type: "read",
        text: "这篇文章看起来很有趣！",
      },
      //示例：点击评论区时触发跳转
      {
        selector: ".comment-area",
        type: "link",
        text: "去看看评论吧~",
      },
    ],
  },

  // ===== Tips 循环提示 =====
  tips: {
    // 欢迎语列表（页面加载后随机显示一条）
    welcomeMessage: [
      "十分不见，却十分想念～",
      "欢迎来到 n昵称YA 博客！🎉",
      "好久不见，欢迎回来！",
      "你来啦～今天想看点什么呢？",
    ],
    // 循环提示内容（定时轮播显示）
    messages: [
      "记得多休息哦～💤",
      "有什么可以帮你的吗？😊",
      "今天也要开心哦！🌈",
      "试试点击我看看～",
      "要不看看最新文章？📖",
    ],
    // 每条提示展示时长（毫秒）
    duration: 2000,
    // 提示切换间隔（毫秒）
    interval: 4000,
  },

  // ===== 菜单配置 =====
  menus: {
    // 菜单项列表
    items: [
      {
        icon: "mdi:home", // Iconify 图标名称
        label: "首页",
        action: "home", // 预定义动作：回到首页
      },
      {
        icon: "mdi:arrow-up",
        label: "回到顶部",
        action: "scrollToTop", // 预定义动作：滚动到顶部
      },
      {
        icon: "mdi:bed",
        label: "休眠",
        action: "sleep", // 预定义动作：看板娘休眠
      },
      // 可以添加更多自定义菜单项
      // {
      //   icon: "mdi:information-outline",
      //   label: "关于",
      //   action: "about", // 需要在 menuActions 中定义
      // },
    ],

    // 菜单对齐方式
    align: "right", // "left" | "right"
  },
};
