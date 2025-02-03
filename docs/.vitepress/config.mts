import { type DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Essentials utils",
  description: "Powerfull js/ts functions",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/guide/quickstart' }
    ],

    sidebar: sidebarGuide(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wesleyara/essentials-utils' }
    ],

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edite esta página no GitHub'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Wesley Araújo`
    }
  }
})


function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
      {
        text: 'Introduction',
        base: '/guide',
        collapsed: false,
        items: [
          { text: 'What is Essentials utils?',  link: '/what-is-essentials-utils/' },
          { text: 'Quickstart', link: '/quickstart/' },
        ]
      },
      {
        text: 'Core',
        base: '/core',
        collapsed: false,
        items: [
          { text: "arrayEquals", link: '/arrayEquals/' },
          { text: "delay", link: '/delay/' },
        ].sort((a, b) => a.text.localeCompare(b.text))
      },
    ]
}
