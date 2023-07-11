// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsDark");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Mythic Unofficial Beginner Guide",
    tagline: "",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://your-docusaurus-test-site.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "0tickpulse", // Usually your GitHub org/user name.
    projectName: "mm-unofficial-beginner-guide", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // make the route `/` instead of `/docs/intro`
                    routeBasePath: "/",
                    // make `/` point to `/intro`

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/mythicicon.png",
            navbar: {
                title: "MM Unofficial Guide",
                logo: {
                    alt: "MM Unofficial Guide Logo",
                    src: "img/mythicicon.png",
                },
                items: [
                    {
                        href: "https://github.com/0tickpulse/mm-unofficial-beginner-guide",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "http://www.mythicmobs.net/discord",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Official Wiki",
                                href: "https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/home",
                            },
                            {
                                label: "Official Website",
                                href: "http://www.mythicmobs.net",
                            },
                        ],
                    },
                ],
                copyright: `This project is licensed under the MIT License. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
