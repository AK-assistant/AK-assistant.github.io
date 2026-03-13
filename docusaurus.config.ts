import type { Config } from '@docusaurus/types';
import type { Preset } from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const siteUrl = process.env.SITE_URL ?? 'https://ak-assistant.github.io';
const siteBaseUrl = process.env.BASE_URL ?? '/';

const config: Config = {
  title: 'AK Assistant',
  tagline: '专为嵌入式开发者打造的新一代串口工具',
  favicon: 'img/logo.svg',
  url: siteUrl,
  baseUrl: siteBaseUrl,
  organizationName: 'AK-assistant',
  projectName: 'AK-assistant.github.io',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '简体中文'
      },
      en: {
        label: 'English'
      }
    }
  },
  customFields: {
    websiteRepoUrl: 'https://github.com/AK-assistant/AK-assistant.github.io',
    appRepoUrl: 'https://github.com/AK-assistant/AK-assistant.github.io',
    releasesUrl: 'https://github.com/AK-assistant/AK-assistant.github.io/releases/latest'
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/AK-assistant/AK-assistant.github.io/tree/main/'
        },
        blog: {
          showReadingTime: true,
          blogTitle: '更新日志',
          blogDescription: 'AK Assistant 官网更新与版本记录',
          editUrl: 'https://github.com/AK-assistant/AK-assistant.github.io/tree/main/',
          onUntruncatedBlogPosts: 'ignore'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    image: 'img/hero-bg.png',
    navbar: {
      title: 'AK Assistant',
      logo: {
        alt: 'AK Assistant Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: '/docs/intro',
          label: '使用文档',
          position: 'left'
        },
        {
          to: '/blog',
          label: '更新日志',
          position: 'left'
        },
        {
          href: 'https://github.com/AK-assistant/AK-assistant.github.io/releases/latest',
          label: '下载',
          position: 'right'
        },
        {
          href: 'https://github.com/AK-assistant/AK-assistant.github.io',
          label: 'GitHub',
          position: 'right'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '站点',
          items: [
            {
              label: '首页',
              to: '/'
            },
            {
              label: '使用文档',
              to: '/docs/intro'
            },
            {
              label: '更新日志',
              to: '/blog'
            }
          ]
        },
        {
          title: '下载',
          items: [
            {
              label: '最新版本',
              href: 'https://github.com/AK-assistant/AK-assistant.github.io/releases/latest'
            }
          ]
        },
        {
          title: '项目',
          items: [
            {
              label: '官网仓库',
              href: 'https://github.com/AK-assistant/AK-assistant.github.io'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AK Assistant`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;
