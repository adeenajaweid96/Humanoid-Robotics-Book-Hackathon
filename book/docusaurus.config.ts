import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const isGitHubPages = process.env.DEPLOY_TARGET === 'github';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI and Humanoid Robotics',
  tagline: 'An AI-native textbook for embodied intelligence',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },



  url: 'https://humanoid-robotics-book-hackathon-chi.vercel.app/',
baseUrl: '/',


// url: isGitHubPages
//   ? 'https://adeenajaweid96.github.io'
//   : 'https://humanoid-book-hackathon.vercel.app/',

// baseUrl: isGitHubPages ? '/hackathon/' : '/',


  
  // Set the production url of your site here
  // url: 'https://adeenajaweid96.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/hackathon/',





  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adeenajaweid96', // Usually your GitHub org/user name.
  projectName: 'hackathon', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], // Adding Urdu for translation feature
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Adeena',
          position: 'right',
          items: [
            {
              label: 'Author Profile',
              href: '#',
            },
            {
              label: 'Contact',
              href: '#',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact Adeena',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Book. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_ALGOLIA_APP_ID',
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_ALGOLIA_API_KEY',
      indexName: 'physical-ai-humanoid-robotics',
      contextualSearch: true,
      searchPagePath: 'search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
