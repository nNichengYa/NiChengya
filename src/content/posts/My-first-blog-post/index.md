---
title: "第一篇博客：从零搭建我的个人网站"
published: 2026-07-28
pinned: true
description: "记录我从零开始搭建这个博客的完整过程，包括环境配置、主题部署到线上。"
tags: ["博客", "Astro", "Mizuki", "Cloudflare", "部署"]
category: "博客搭建"
licenseName: "MIT"
author: "NiChengYa"
sourceLink: "https://nichengya.pages.dev/posts/My-first-blog-post"
date: 2026-07-28
draft: false
image: "./h.webp"
---

# 第一篇博客：从零搭建我的个人网站

> 这篇文章记录了我从零开始搭建这个博客的完整过程，希望对想搭建个人博客的朋友有所帮助。

---

## 为什么突然想搭博客？

其实想法很简单——就是想有一个属于自己的地方，可以自由地写东西、记录想法、分享技术。

所以决定**自己搭一个博客**。

---

## 🚀 技术选型与环境准备

### 选择的框架：Astro

[Astro](https://astro.build) 是一个现代化的静态网站生成器，非常适合构建博客、文档站等以内容为中心的网站。它的核心优势是**加载速度快**、**SEO 友好**，并且支持在 Markdown 文章中嵌入多种 UI 框架组件。

### 选择的主题：Mizuki

[Mizuki](https://github.com/LyraVoid/Mizuki) 是基于 Astro 的一款功能丰富的博客主题，界面采用 Material Design 3 风格。它内置了**暗色模式**、**搜索**、**评论**、**追番**、**友链**、**音乐播放器**等众多功能，可以帮助你快速搭建一个完整的个人博客。

### 准备开发环境

在开始之前，请确保你的电脑上已安装以下工具：

| 工具                               | 说明                                                                                                                 |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **[Node.js](https://nodejs.org/)** | 推荐使用最新的 LTS（长期支持）版本。Astro 框架依赖 Node.js 环境。                                                    |
| **[pnpm](https://pnpm.io/)**       | 本项目使用 pnpm 作为包管理器，比 npm 更快速且节省磁盘空间。如果没有安装，可执行 `npm install -g pnpm` 进行全局安装。 |
| **[Git](https://git-scm.com/)**    | 用于版本控制和代码提交。                                                                                             |

---

## 通过 ZIP 包安装 Node.js

我下载的是 Node.js 的 **ZIP 压缩包**（免安装版），需要手动解压并配置环境变量。

### 第一步：下载 ZIP 包

1. 访问 [nodejs.org](https://nodejs.org/)
2. 点击 **"Download"** → 选择 **"Prebuilt Binaries"**
3. 选择对应的系统版本：
   - 操作系统：`Windows`
   - 架构：`64-bit` 或 `32-bit`
   - 文件格式：`.zip`
4. 推荐下载 **LTS（长期支持）版本**

### 第二步：解压到指定目录

1. 将下载的 `.zip` 文件解压到你想要的目录，例如：
   D:\nodejs

2. 解压后的目录结构类似：

```
D:\nodejs\
├── node.exe
├── npm.cmd
├── node_modules\
└── ...
```

> **注意**：解压路径中**不要包含中文、空格或特殊字符**，避免后续出现问题。

### 第三步：配置系统环境变量

这一步是为了让系统在任意位置都能识别 `node` 和 `npm` 命令。

#### 1. 打开环境变量设置

- 右键点击 **"此电脑"** → **"属性"**
- 点击 **"高级系统设置"**
- 点击 **"环境变量"**

#### 2. 添加 Node.js 到 Path

在 **"系统变量"** 区域，找到并选中 `Path` 变量，点击 **"编辑"**。

点击 **"新建"**，添加以下路径：
D:\nodejs

#### 3. 验证安装

配置完成后，**重新打开终端**（CMD 或 PowerShell），输入以下命令验证：

```bash
node -v
npm -v
```

如果显示版本号，说明配置成功。

---

## 安装 pnpm 和 Git

### 安装 pnpm

在终端中执行以下命令进行全局安装：

```bash
npm install -g pnpm
```

安装完成后，验证 pnpm 是否安装成功：

```bash
pnpm -v
```

如果显示版本号，说明安装成功。

### 安装 Git

访问 **[Git](https://git-scm.com/)** 官网，下载适合你操作系统的安装包

双击安装包，一路保持默认选项即可

安装完成后，验证 Git 是否安装成功：

```bash
git --version
```

如果显示版本号，说明安装成功。

---

## 克隆主题并本地运行

环境准备好后，就可以开始搭建博客了。选择一个盘并创建一个存放博客的目录。

### 第一步：克隆 Mizuki 主题

在终端中执行以下命令：

```bash
# 克隆主题到本地
git clone https://github.com/LyraVoid/Mizuki.git

# 进入项目目录
cd Mizuki
```

### 第二步：安装依赖

```bash
pnpm install
```

### 第三步：启动开发服务器

```bash
pnpm dev
```

启动成功后，在浏览器中打开 http://localhost:3000 ，你就能看到 Mizuki 主题的默认界面了。

## 个性化配置

主题克隆到本地并成功运行后，就可以开始自定义了。

根据 **[Mizuki 官方文档](https://docs.mizuki.mysqil.com/guide/intro/)** 的指引，你可以自由调整博客的各项配置。从站点标题、主题色，到评论系统、音乐播放器，几乎所有内容都可以按自己的喜好定制。

---

## 将博客部署到公网上

### 第一步：在 GitHub 上创建仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **"+"** → **"New repository"**
3. 填写仓库信息：

| 配置项               | 建议                        |
| :------------------- | :-------------------------- |
| **Repository name**  | `my-blog` 或 `NiChengya`    |
| **Description**      | 可选，描述如 "我的个人博客" |
| **Public / Private** | 选择 **Public**             |
| **其他选项**         | 不要勾选，默认关闭          |

4. 点击 **"Create repository"**

---

### 第二步：初始化本地 Git 仓库

在项目根目录打开终端，执行以下命令：

```bash
# 初始化 Git
git init
```

```bash
# 查看当前状态
git status
```

### 第三步：添加远程仓库

复制 GitHub 仓库的地址，执行以下命令：

```bash
# 添加远程仓库（替换成你自己的仓库地址）
git remote add origin 你的仓库地址
# 查看远程仓库是否添加成功
git remote -v
```

### 第四步：添加并提交文件

```bash
# 添加所有文件到暂存区
git add .
# 提交文件（-m 后面是提交说明）
git commit -m "初始化博客"
```

### 第五步：推送到 GitHub

```bash
# 首次推送（-u 关联本地和远程分支）
git push -u origin main
```

---

### 第六步：登录 Cloudflare Pages

1. 访问 [cloudflare.com](https://cloudflare.com)
2. 点击 **登录**（没有账号先注册）

### 第七步：进入 Pages

1. 登录后，左侧菜单点击 **"Workers & Pages"**
2. 点击 **"创建应用程序"** 按钮
3. 点击底部的 **"Pages"** 选项卡

### 第八步：连接 GitHub

1. 点击 **"连接到 GitHub"**
2. 授权 Cloudflare 访问你的 GitHub 账号
3. 选择你的博客仓库
4. 点击 **"开始设置"**

---

### 第九步：配置构建设置

在构建设置页面，填写以下信息：

| 配置项           | 填写内容                                    |
| :--------------- | :------------------------------------------ |
| **项目名称**     | `NiChengya`（自动生成域名 `xxx.pages.dev`） |
| **生产分支**     | `main`                                      |
| **框架预设**     | 选择 **Astro**                              |
| **构建命令**     | `pnpm install && pnpm run build`            |
| **构建输出目录** | `dist`                                      |

> 如果下拉菜单中没有 Astro，选择"无"，然后手动填写构建命令和输出目录。

---

### 第十步：点击"保存并部署"

等待 1-3 分钟，部署完成后会显示：

**部署成功！**

你的项目已上线：https://NiChengya.pages.dev

### 第十一步：更新 siteURL

部署完成后，回到本地项目，修改 `src/config/siteConfig.ts`：

```typescript
// 修改前
siteURL: "http://localhost:4321/",

// 修改后（替换为你的 Cloudflare 地址）
siteURL: "https://NiChengya.pages.dev/",
```

然后提交并推送：

```bash
git add .
git commit -m "更新 siteURL 为 Cloudflare Pages 地址"
git push
```

Cloudflare Pages 会自动重新部署。

部署成功标志

访问 https://NiChengya.pages.dev 就能能看到博客

每次 git push 自动重新部署

---

## 最后

到这里，一个完整的个人博客就搭建好了！

回顾整个过程，我们从环境准备开始，一步步完成了：

1. **环境搭建**：安装 Node.js、pnpm、Git
2. **主题部署**：克隆 Mizuki 主题并本地运行
3. **个性化配置**：修改站点信息、评论系统、音乐播放器等
4. **公网部署**：推送到 GitHub，通过 Cloudflare Pages 上线

整个过程看起来步骤不少，但其实每一步都有清晰的指引。只要跟着文档操作，遇到问题多查多问，大部分问题都能解决。

### 一点小建议

- **遇到报错不要慌**：复制错误信息去搜索，问AI，大部分问题都能找到答案
- **善用官方文档**：Mizuki 和 Astro 的文档都很详细，遇到配置问题优先查文档
- **多备份**：修改配置前记得备份原文件，方便回滚

### 后续可以继续优化的方向

- 写更多技术文章，丰富博客内容
- 优化主题样式，增加个性化元素
- 配置自定义域名，让博客更专业

博客搭建只是一个开始，持续写作才是更重要的事。

---

> 希望这篇记录能对你有所帮助，如果遇到问题，欢迎在评论区交流讨论！😊
