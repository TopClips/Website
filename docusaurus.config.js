/* eslint-disable @typescript-eslint/no-var-requires */
/* @ts-check */

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Countr",
  tagline: "An advanced counting bot to manage a counting channel in your guild!",
  url: "https://countr.xyz",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: "https://github.dev/countr/website/blob/production",
          exclude: [ "README.md", "template.md" ]
        },
        blog: {
          path: "posts",
          routeBasePath: "posts",
          blogTitle: "Countr Community Posts",
          blogDescription: "The latest posts from the Countr community",
          postsPerPage: 10,
          showReadingTime: true,
          editUrl: "https://github.dev/countr/website/blob/production",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Promise Solutions`
          },
          authorsMapPath: "authors.yml",
          exclude: [ "README.md", "template.md" ]
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "6V1I8J0EG",
        apiKey: "a700949f1a3be63bf8c32dea2ea6130c",
        contextualSearch: true,
        indexName: "countr-website",
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true
      },
      metadatas: [
        { name: "theme-color", content: "#bd4632" }
      ],
      navbar: {
        title: "Countr",
        logo: {
          alt: "Countr",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Docs",
            position: "left",
            type: "doc",
            docId: "index"
          },
          {
            label: "Community Posts",
            position: "left",
            to: "/posts"
          },
          {
            label: "Terms of Service",
            position: "left",
            to: "/terms"
          },
          {
            label: "Privacy Policy",
            position: "left",
            to: "/privacy"
          },
          {
            label: "GitHub",
            position: "right",
            href: "https://github.com/countr/countr",
          },
          {
            label: "Status",
            position: "right",
            href: "https://status.countr.xyz",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Promise Solutions`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
    {
      src: "https://arc.io/widget.min.js#watbhJvw",
      async: true,
    }
  ]
};

module.exports = config;
