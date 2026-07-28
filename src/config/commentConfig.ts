import type { CommentConfig } from "../types/config";
import { SITE_LANG } from "./siteConfig";

// 评论系统配置
export const commentConfig: CommentConfig = {
  enable: true, // 启用评论功能。当设置为 false 时，评论组件将不会显示在文章区域。
  system: "giscus", // 评论系统选择: "twikoo" | "giscus"
  twikoo: {
    envId: "https://twikoo.vercel.app",
    lang: SITE_LANG,
  },
  /*
  giscus: {
    repo: "your-github-username/your-repo-name",
    repoId: "your-repo-id",
    category: "Announcements",
    categoryId: "your-category-id",
    mapping: "pathname",
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "top",
    theme: "preferred_color_scheme",
    lang: SITE_LANG,
    loading: "lazy",
  },
  
<script src="https://giscus.app/client.js"
        data-repo="nNichengYa/blog-Comment"
        data-repo-id="R_kgDOTkn5Eg"
        data-category="Announcements"
        data-category-id="DIC_kwDOTkn5Es4DCDTc"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
*/
  giscus: {
    repo: "nNichengYa/blog-Comment", // ✅ 你的评论仓库
    repoId: "R_kgDOTkn5Eg", // ✅ 仓库 ID
    category: "Announcements", // ✅ 分类名称
    categoryId: "DIC_kwDOTkn5Es4DCDTc", // ✅ 分类 ID
    mapping: "pathname", // ✅ 页面映射方式
    strict: "0", // ✅ 严格匹配关闭
    reactionsEnabled: "1", // ✅ 启用表情反应
    emitMetadata: "0", // ✅ 不发送元数据
    inputPosition: "bottom", // ✅ 输入框在底部
    theme: "preferred_color_scheme", // ✅ 跟随系统主题
    lang: SITE_LANG, // ✅ 语言与站点一致
    loading: "lazy", // ✅ 懒加载
  },
};
