import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "松果应用",
  description: "基于表单设计器、可视化编程、流程引擎实现的可配置应用程序",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "概览", link: "/overview" },
      { text: "用户手册", link: "/user-guide" },
      { text: "开发文档", link: "/developer-guide" },
    ],

    sidebar: [
      {
        text: "概览",
        link: "/overview",
      },
      {
        text: "用户手册",
        link: "/user-guide",
      },
      {
        text: "开发文档",
        link: "/developer-guide",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pineconejs/docs" },
    ],

    editLink: {
      pattern: "https://github.com/pineconejs/docs/edit/main/:path",
      text: "在 GitHub 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
})
