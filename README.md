# 松果应用

本项目用于构建松果应用的文档，打开[index.md](./index.md)开始阅读。

## 快速开发

本项目基于[Vitepress](https://vitepress.dev/zh/)创建，开始之前请先阅读`Vitepress`文档。

开始开发前，请先确定你已经安装了[Node.js](https://nodejs.org/en)18及以上开发环境。

推荐使用[VSCode](https://code.visualstudio.com/)开发，请安装[Prettier插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)格式化代码。

本项目使用[yarn](https://yarnpkg.com/)作为包管理工具，推荐使用`yarn`命令执行操作。

`docs:dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

```shell
yarn docs:dev
```

## 构建产物

可以运行以下命令来构建文档：

```shell
npm run docs:build
```
