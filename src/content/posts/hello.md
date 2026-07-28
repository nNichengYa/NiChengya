---
title: "我的第一篇博客文章"
published: 2026-07-27
description: "这是我的第一篇博客文章，用来展示 Mizuki 主题的各种 Markdown 语法和功能。"
tags: [开始, 教程, 示例]
category: 博客
draft: false
pinned: true
comment: true
lang: zh_CN
---

欢迎来到我的博客！🎉

这是第一篇使用 **Mizuki** 主题发布的文章。Mizuki 是一个基于 Astro 构建的现代化 Material Design 3 博客主题，支持丰富的 Markdown 扩展语法。

---

## 📝 基本排版

### 标题

# H1 - 一级标题

## H2 - 二级标题

### H3 - 三级标题

#### H4 - 四级标题

**加粗文本** 和 _斜体文本_，以及 ~~删除线文本~~。

### 列表

无序列表：

- 项目一
- 项目二
  - 子项目 2.1
  - 子项目 2.2
- 项目三

有序列表：

1. 第一步
2. 第二步
3. 第三步

### 引用

> 这是一个引用块。可以用来引用名言或他人的话。
>
> 可以包含多行内容。

---

## 📊 高级 Markdown 功能

### 1. 注释框（Callouts）

Mizuki 支持 GitHub 风格的注释框：

> [!NOTE]
> 这是一个普通的注释，用于提供补充信息。

> [!TIP]
> 这是一个提示，分享有用的技巧或建议。

> [!IMPORTANT]
> 这是一个重要信息，需要读者特别注意。

> [!CAUTION]
> 这是一个警告，提示潜在的风险或问题。

> [!WARNING]
> 这是一个严重警告，涉及关键问题。

---

### 2. 代码块与语法高亮

支持 Expressive Code 增强的代码块：

```typescript
// 带语法高亮的 TypeScript 代码
interface User {
  id: number;
  name: string;
  email: string;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(greet(user));
```
