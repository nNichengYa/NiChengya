// src/data/anime.ts

// 本地番剧数据配置
export interface AnimeItem {
  title: string;
  status: "watching" | "completed" | "planned";
  rating: number;
  cover: string;
  description: string;
  episodes: string;
  year: string;
  genre: string[];
  studio: string;
  link: string;
  progress: number;
  totalEpisodes: number;
  startDate: string;
  endDate: string;
}

const localAnimeList: AnimeItem[] = [
  // ============================================
  // 刺客伍六七 系列
  // ============================================
  {
    title: "刺客伍六七 第一季",
    status: "completed",
    rating: 9.2,
    cover: "/assets/anime/wuliuqi/wuliuqi-1.webp",
    description:
      "在某个小岛上，有一个可以伪装成任何东西的廉价刺客，名叫伍六七。他虽然总是接一些奇葩的刺杀任务，却从未真正完成过一次。",
    episodes: "14",
    year: "2018",
    genre: ["搞笑", "战斗", "国产动画"],
    studio: "啊哈娱乐",
    link: "https://www.bilibili.com/bangumi/play/ss6360?spm_id_from=333.337.0.0",
    progress: 13,
    totalEpisodes: 13,
    startDate: "2018-04",
    endDate: "2018-07",
  },
  {
    title: "刺客伍六七 第二季（最强发型师）",
    status: "completed",
    rating: 9.3,
    cover: "/assets/anime/wuliuqi/wuliuqi-2.webp",
    description:
      "伍六七和鸡大保继续在岛上经营理发店，一边接刺客任务一边保护身边的人。本季揭开了更多伍六七的过去。",
    episodes: "10",
    year: "2019",
    genre: ["搞笑", "战斗", "国产动画"],
    studio: "啊哈娱乐",
    link: "https://www.bilibili.com/bangumi/play/ss28510?spm_id_from=333.337.0.0",
    progress: 10,
    totalEpisodes: 10,
    startDate: "2019-10",
    endDate: "2019-12",
  },
  {
    title: "刺客伍六七 第三季（玄武国篇）",
    status: "completed",
    rating: 9.4,
    cover: "/assets/anime/wuliuqi/wuliuqi-3.webp",
    description:
      "伍六七为了寻找自己的身世之谜，前往玄武国。一路上遭遇了各路强敌，也逐渐揭开了自己的过去。",
    episodes: "10",
    year: "2021",
    genre: ["搞笑", "战斗", "国产动画"],
    studio: "啊哈娱乐",
    link: "https://www.bilibili.com/bangumi/play/ss36594?spm_id_from=333.337.0.0",
    progress: 10,
    totalEpisodes: 10,
    startDate: "2021-01",
    endDate: "2021-03",
  },
  {
    title: "刺客伍六七 第四季（暗影宿命）",
    status: "completed",
    rating: 9.1,
    cover: "/assets/anime/wuliuqi/wuliuqi-4.webp",
    description: "伍六七在玄武国的冒险继续，暗影刺客组织的真相逐渐浮出水面。",
    episodes: "10",
    year: "2023",
    genre: ["搞笑", "战斗", "国产动画"],
    studio: "啊哈娱乐",
    link: "https://www.bilibili.com/bangumi/play/ss44176?spm_id_from=333.337.0.0",
    progress: 10,
    totalEpisodes: 10,
    startDate: "2023-01",
    endDate: "2023-03",
  },
  {
    title: "刺客伍六七 第五季（记忆碎片）",
    status: "completed",
    rating: 9.0,
    cover: "/assets/anime/wuliuqi/wuliuqi-5.webp",
    description: "伍六七的记忆碎片逐渐拼合，关于他的过去和使命的真相即将揭晓。",
    episodes: "12",
    year: "2024",
    genre: ["搞笑", "战斗", "国产动画"],
    studio: "啊哈娱乐",
    link: "https://www.bilibili.com/bangumi/play/ss48315?spm_id_from=333.337.0.0",
    progress: 10,
    totalEpisodes: 10,
    startDate: "2024-10",
    endDate: "",
  },
  // ============================================
  // 总之就是非常可爱 系列
  // ============================================
  {
    title: "总之就是非常可爱",
    status: "completed",
    rating: 8.8,
    cover: "/assets/anime/verycute/cute-1.webp",
    description:
      "星空和司在樱花树下相遇，一见钟情。虽然星空被车撞了，但司却说出了「如果你愿意和我结婚，我就救你」这样惊人的话。从此，两人的新婚生活就此展开。这是一部充满甜蜜与温馨的恋爱喜剧。",
    episodes: "12",
    year: "2020",
    genre: ["恋爱", "喜剧", "日常", "治愈"],
    studio: "Seven Arcs",
    link: "https://www.bilibili.com/bangumi/play/ss34230?spm_id_from=333.337.0.0",
    progress: 12,
    totalEpisodes: 12,
    startDate: "2020-10",
    endDate: "2020-12",
  },
  // ============================================
  // Re:从零开始的异世界生活 系列
  // ============================================
  {
    title: "Re:从零开始的异世界生活 第一季",
    status: "completed",
    rating: 9.5,
    cover: "/assets/anime/re0/re0-1.webp",
    description:
      "普通的高中生菜月昴在从便利店回家途中，突然被召唤到了异世界。在这个世界里，他发现自己拥有「死亡回归」的能力——死后可以回到过去的时间点。他遇见了银发的美少女爱蜜莉雅，为了守护她，昴在绝望中不断挑战命运。",
    episodes: "25",
    year: "2016",
    genre: ["奇幻", "冒险", "穿越", "治愈"],
    studio: "WHITE FOX",
    link: "https://www.bilibili.com/bangumi/play/ss29590?spm_id_from=333.337.0.0",
    progress: 13,
    totalEpisodes: 13,
    startDate: "2016-04",
    endDate: "2016-09",
  },
  {
    title: "Re:从零开始的异世界生活 第二季",
    status: "completed",
    rating: 9.6,
    cover: "/assets/anime/re0/re0-2.webp",
    description:
      "菜月昴成功解救了魔兽森林的危机后，来到了爱蜜莉雅的故乡——艾利奥尔大森林。等待他的，是圣域的秘密和魔女教的阴谋。为了拯救重要的人们，昴再次面对残酷的轮回，而真相也逐渐浮出水面。",
    episodes: "25",
    year: "2020-2021",
    genre: ["奇幻", "冒险", "穿越", "治愈"],
    studio: "WHITE FOX",
    link: "https://www.bilibili.com/bangumi/play/ss33802?spm_id_from=333.337.0.0",
    progress: 25,
    totalEpisodes: 25,
    startDate: "2020-07",
    endDate: "2021-03",
  },
  // ============================================
  // 星掠者 系列
  // ============================================
  {
    title: "星掠者",
    status: "completed",
    rating: 7.0,
    cover: "/assets/anime/plunderer/x.webp",
    description:
      "在「阿尔西亚」这个被数字和神秘力量支配的世界里，人们被赋予「星点数」作为生命的证明。拥有「负星点数」的少女阳菜为了寻找传说中的「击坠王」而踏上旅途，途中遇到了身份神秘的少年——里希特。这是一个关于命运、战斗与真相的奇幻冒险故事。",
    episodes: "24",
    year: "2020",
    genre: ["奇幻", "战斗", "冒险", "穿越"],
    studio: "GEEK TOYS",
    link: "https://www.bilibili.com/bangumi/play/ss29339?spm_id_from=333.337.0.0",
    progress: 24,
    totalEpisodes: 24,
    startDate: "2020-01",
    endDate: "2020-06",
  },
  // ============================================
  // 一拳超人 系列
  // ============================================
  {
    title: "一拳超人 第一季",
    status: "completed",
    rating: 9.7,
    cover: "/assets/anime/onechaoren/one1.webp",
    description:
      "主人公埼玉原本是一名整日奔波于求职的普通人，因为偶然原因救下了被怪人袭击的少年，从而重拾了童年时想要成为英雄的梦想。经过三年的特训，他获得了强大的力量，强大到一击制胜。",
    episodes: "12",
    year: "2015",
    genre: ["热血", "战斗", "搞笑"],
    studio: "Madhouse",
    link: "https://v.youku.com/v_show/id_XMTM1MTc4MDU3Ng==.html?spm=a2hkm.8166622.PhoneSokuProgram_1.dposter&s=0b39c5b6569311e5b2ad",
    progress: 12,
    totalEpisodes: 12,
    startDate: "2015-10",
    endDate: "2015-12",
  },
  {
    title: "一拳超人 OVA 合集",
    status: "completed",
    rating: 8.2,
    cover: "/assets/anime/onechaoren/oneova.webp",
    description:
      "一拳超人第一季的OVA合集，共6话，讲述了埼玉和杰诺斯在主线之外的日常故事，充满搞笑与温情。",
    episodes: "6",
    year: "2015-2016",
    genre: ["热血", "战斗", "搞笑"],
    studio: "Madhouse",
    link: "https://www.yhmi.cc/v/728353/229",
    progress: 6,
    totalEpisodes: 6,
    startDate: "2015-12",
    endDate: "2016-10",
  },
  {
    title: "一拳超人 第二季",
    status: "completed",
    rating: 8.5,
    cover: "/assets/anime/onechaoren/one2.webp",
    description:
      "埼玉和杰诺斯加入了英雄协会，开始了正式的英雄活动。与此同时，怪人协会也开始蠢蠢欲动，一场更大的危机即将到来。",
    episodes: "12",
    year: "2019",
    genre: ["热血", "战斗", "搞笑"],
    studio: "J.C.Staff",
    link: "https://v.youku.com/v_show/id_XNDEyMjM2MTgzNg==.html?spm=a2hkm.8166622.series_1.dposter_2&s=2a5659587f87497d9aab",
    progress: 12,
    totalEpisodes: 12,
    startDate: "2019-04",
    endDate: "2019-07",
  },
  {
    title: "一拳超人 第三季",
    status: "watching",
    rating: 8.8,
    cover: "/assets/anime/onechaoren/one3.webp",
    description:
      "英雄协会与怪人协会的大战全面爆发。埼玉和众英雄们将面对前所未有的强敌。饿狼篇终于迎来高潮！",
    episodes: "12",
    year: "2025",
    genre: ["热血", "战斗", "搞笑"],
    studio: "J.C.Staff",
    link: "https://v.youku.com/v_show/id_XNjQ5Njk4NDI3Mg==.html?spm=a2hkm.8166622.series_1.dposter_2&s=cfdc0b0a441d41ce8c4b",
    progress: 1,
    totalEpisodes: 12,
    startDate: "2025-04",
    endDate: "",
  },

  // ============================================
  // 死神 BLEACH 系列
  // ============================================
  {
    title: "死神 BLEACH（代理死神篇）",
    status: "completed",
    rating: 8.5,
    cover: "/assets/anime/bleach/b1.webp",
    description:
      "高中生黑崎一护在遇到死神朽木露琪亚后，意外获得了死神之力。他成为代理死神，守护空座町的和平，故事由此展开。",
    episodes: "20",
    year: "2004",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XMTM3OTE1NzMzNg==.html?spm=a2hkm.8166622.series_1.dposter_2&s=e1f23322845b11e5b692",
    progress: 20,
    totalEpisodes: 20,
    startDate: "2004-10",
    endDate: "2005-02",
  },
  {
    title: "死神 BLEACH（尸魂界拯救篇）",
    status: "completed",
    rating: 9.0,
    cover: "/assets/anime/bleach/b2.webp",
    description:
      "为拯救被判处死刑的露琪亚，一护与同伴闯入尸魂界。面对护廷十三队的强大死神们，一护在双殛之丘与更木剑八、朽木白哉展开激战，最终成功救出露琪亚。",
    episodes: "50",
    year: "2005",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNDQ0MTkwNDUxMg==.html?spm=a2hkm.8166622.series_1.dposter_2&s=dbcb7d6dbb01424a881c",
    progress: 50,
    totalEpisodes: 50,
    startDate: "2005-02",
    endDate: "2005-11",
  },
  {
    title: "死神 BLEACH（虚圈大战篇）",
    status: "completed",
    rating: 8.7,
    cover: "/assets/anime/bleach/b3.webp",
    description:
      "蓝染率领破面军团占据虚圈，一护与同伴潜入虚圈展开激战。面对葛力姆乔等强大破面，一护首次展现虚化之力，在虚圈中浴血奋战。",
    episodes: "70",
    year: "2006-2007",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNDQ0MjIzODQ1Ng==.html?spm=a2hkm.8166622.series_1.dposter_2&s=edbb28c117d848a38c7c",
    progress: 70,
    totalEpisodes: 70,
    startDate: "2006-03",
    endDate: "2007-08",
  },
  {
    title: "死神 BLEACH（决战蓝染篇）",
    status: "completed",
    rating: 9.1,
    cover: "/assets/anime/bleach/b4.webp",
    description:
      "蓝染将战场转移至空座町，护廷十三队全体出动与破面军团展开最终决战。一护与蓝染在巅峰对决中，赌上一切守护现世与尸魂界。",
    episodes: "40",
    year: "2007-2008",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNDQ0MjMyNjIyOA==.html?spm=a2hkm.8166622.series_1.dposter_2&s=bfbb135fcf76494a9cc4",
    progress: 40,
    totalEpisodes: 40,
    startDate: "2007-08",
    endDate: "2008-04",
  },
  {
    title: "死神 BLEACH（斩魄刀异闻录）",
    status: "completed",
    rating: 7.5,
    cover: "/assets/anime/bleach/b5.webp",
    description:
      "动画原创篇章，斩魄刀集体实体化并背叛主人。一护为了拯救露琪亚，必须与自己的斩魄刀斩月进行对决。",
    episodes: "30",
    year: "2008-2009",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNDQ0MjQyNTcyOA==.html?spm=a2hkm.8166622.series_1.dposter_2&s=ffec975cfa314648b023",
    progress: 30,
    totalEpisodes: 30,
    startDate: "2008-04",
    endDate: "2008-12",
  },
  {
    title: "死神 BLEACH（完现术篇）",
    status: "completed",
    rating: 8.0,
    cover: "/assets/anime/bleach/b6.webp",
    description:
      "一护在与蓝染的战斗中失去死神之力。他结识了完现术者银城空吾，开始修炼新的力量。然而银城的真实目的却另有隐情。",
    episodes: "24",
    year: "2010-2011",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNDQ0MjQ2MDY5Ng==.html?spm=a2hkm.8166622.series_1.dposter_2&s=bbfce61b01574e7293d1",
    progress: 24,
    totalEpisodes: 24,
    startDate: "2010-10",
    endDate: "2011-03",
  },
  {
    title: "死神 BLEACH 千年血战篇 第一季",
    status: "completed",
    rating: 9.4,
    cover: "/assets/anime/bleach/b7.webp",
    description:
      "无形帝国向尸魂界宣战，护廷十三队面临灭顶之灾。黑崎一护在新的敌人面前，觉醒了他真正的力量。",
    episodes: "13",
    year: "2022",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNTkxMDQxMzgyOA==.html?spm=a2hkm.8166622.series_1.dposter_2&s=dfaa4222433e4bcab500",
    progress: 13,
    totalEpisodes: 13,
    startDate: "2022-10",
    endDate: "2022-12",
  },
  {
    title: "死神 BLEACH 千年血战篇 第二季（诀别谭）",
    status: "completed",
    rating: 9.5,
    cover: "/assets/anime/bleach/b8.webp",
    description:
      "护廷十三队与无形帝国的战争进入白热化。一护前往灵王宫，挑战更强大的敌人，在生死对决中守护尸魂界。",
    episodes: "13",
    year: "2023",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNTk4MDE0ODAzNg==.html?spm=a2hkm.8166622.PhoneSokuProgram_2.dplaybutton&s=dadbc073781a40d5a264",
    progress: 13,
    totalEpisodes: 13,
    startDate: "2023-07",
    endDate: "2023-09",
  },
  {
    title: "死神 BLEACH 千年血战篇 第三季（相剋谭）",
    status: "watching",
    rating: 9.6,
    cover: "/assets/anime/bleach/b9.webp",
    description:
      "友哈巴赫入侵灵王宫，尸魂界的命运悬于一线。一护与护廷十三队展开最后的反击，真相与决心交织的最终章。",
    episodes: "14",
    year: "2024-2025",
    genre: ["热血", "战斗", "奇幻"],
    studio: "Pierrot",
    link: "https://v.youku.com/v_show/id_XNjQzMTA2NDU4MA==.html?spm=a2hkm.8166622.PhoneSokuProgram_1.dplaybutton&s=cadf0eeca540465d9df2",
    progress: 1,
    totalEpisodes: 14,
    startDate: "2024-10",
    endDate: "",
  },
];

export default localAnimeList;
