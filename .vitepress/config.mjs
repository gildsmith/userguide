import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'Gildsmith • User Guide',
    description: 'User Guide',
    base: '/userguide/',
    head: [
        ['link', {rel: 'icon', href: '/userguide/favicon.ico'}],
    ],
    themeConfig: {
        logo: '/logo.svg',

        editLink: {
            pattern: 'https://github.com/gildsmith/userguide/edit/master/:path',
            text: 'Edit this page on GitHub',
        },

        search: {
            provider: 'local',
        },

        outline: {
            level: 'deep',
        },

        nav: [
            {text: 'Dev Docs', link: 'https://gildsmith.github.io/devdocs/'},
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: '❌ Quick Start', link: '/'},
                    {text: 'Changelog', link: '/changelog'},
                ],
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/gildsmith/gildsmith'},
        ],
    },
})
