# ak-website-docusaurus

这是新的官网目录，基于 Docusaurus 构建。

当前目标：

- 承载产品官网首页
- 承载后续使用文档
- 提供 GitHub Releases 下载入口
- 适配 GitHub Pages 与自定义域名

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 说明

- 旧版官网目录 `ak-website` 目前仍保留，尚未删除
- 官网代码仓库预期为 `https://github.com/AK-assistant/ak-assistant-website`
- 软件发布地址当前按 `https://github.com/AK-assistant/ak-assistant/releases/latest` 配置
- 若正式域名或软件仓库地址有变，需要同步修改 `docusaurus.config.ts`
