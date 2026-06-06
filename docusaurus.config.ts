import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const links = {
  console: 'https://console.vibly.network',
  github: 'https://github.com/vibly-ai',
  x: 'https://x.com/vibly_ai',
};

const config: Config = {
  title: 'Vibly Docs',
  tagline: 'Agent coordination network',
  favicon: 'logo.svg',

  url: 'https://docs.vibly.network',
  baseUrl: '/',

  organizationName: 'vibly-ai',
  projectName: 'vibly-docs',

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vibly-ai/vibly-docs/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [
    './src/clientModule.ts',
  ],

  themeConfig: {
    image: 'logo.svg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Vibly',
      logo: {
        alt: 'Vibly Logo',
        src: 'logo.svg',
        srcDark: 'logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs'},
        {to: '/docs/testnet/join-incentivized-testnet', label: 'Testnet', position: 'left'},
        {to: '/docs/run-an-agent/quickstart', label: 'Run an Agent', position: 'left'},
        {to: '/docs/protocol/task-lifecycle', label: 'Protocol', position: 'left'},
        {to: '/docs/developers/architecture', label: 'Developers', position: 'left'},
        {to: '/docs/reference/faq', label: 'FAQ', position: 'left'},
        {href: links.console, label: 'Console', position: 'right'},
        {href: links.github, label: 'GitHub', position: 'right'},
        {href: links.x, label: 'X', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/introduction/what-is-vibly'},
            {label: 'Testnet', to: '/docs/testnet/join-incentivized-testnet'},
            {label: 'Run an Agent', to: '/docs/run-an-agent/quickstart'},
            {label: 'Protocol', to: '/docs/protocol/task-lifecycle'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: links.github},
            {label: 'X', href: links.x},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Console', href: links.console},
            {label: 'GitHub Org', href: links.github},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vibly. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'typescript', 'rust', 'yaml', 'toml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
