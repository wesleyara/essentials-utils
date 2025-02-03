import { type DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Essentials utils",
  description: "Powerfull js/ts functions",
  srcExclude: ["**/parts/**.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Instalation', link: '/guide/Instalation' }
    ],

    sidebar: sidebarGuide(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wesleyara/essentials-utils' }
    ],

    editLink: {
      pattern: 'https://github.com/wesleyara/essential-utils/edit/main/docs/:path',
      text: 'Suggest changes to this page'
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
    },

    search: {
      provider: 'local'
    },
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
          { text: 'Instalation', link: '/instalation/' },
        ]
      },
      {
        text: 'Core',
        base: '/core',
        collapsed: false,
        items: [
          { text: 'arrayEquals', link: '/arrayEquals/' },
          { text: 'arrayLastItem', link: '/arrayLastItem/' },
          { text: 'arrayToObject', link: '/arrayToObject/' },
          { text: 'cepMask', link: '/cepMask/' },
          { text: 'colorLog', link: '/colorLog/' },
          { text: 'cpfMask', link: '/cpfMask/' },
          { text: 'cpnjMask', link: '/cpnjMask/' },
          { text: 'deepClone', link: '/deepClone/' },
          { text: 'delay', link: '/delay/' },
          { text: 'generateArray', link: '/generateArray/' },
          { text: 'generateNullArray', link: '/generateNullArray/' },
          { text: 'generateRandomColor', link: '/generateRandomColor/' },
          { text: 'generateRandomNumber', link: '/generateRandomNumber/' },
          { text: 'generateRandomString', link: '/generateRandomString/' },
          {
            text: 'getNavigatorCurrentLocation',
            link: '/getNavigatorCurrentLocation/'
          },
          { text: 'getPercentage', link: '/getPercentage/' },
          { text: 'getStorage', link: '/getStorage/' },
          { text: 'index.js', link: '/index.js/' },
          { text: 'isEmptyObject', link: '/isEmptyObject/' },
          { text: 'objectToArray', link: '/objectToArray/' },
          { text: 'phoneMask', link: '/phoneMask/' },
          { text: 'removeArrayItemByIndex', link: '/removeArrayItemByIndex/' },
          { text: 'removeArrayItemByValue', link: '/removeArrayItemByValue/' },
          { text: 'removeStorage', link: '/removeStorage/' },
          { text: 'reverseString', link: '/reverseString/' },
          { text: 'setStorage', link: '/setStorage/' },
          { text: 'shuffleArray', link: '/shuffleArray/' },
          { text: 'smartLog', link: '/smartLog/' },
          { text: 'upperFirst', link: '/upperFirst/' },
          { text: 'useRemoveDuplicates', link: '/useRemoveDuplicates/' },
          { text: 'useSecurityStorage', link: '/useSecurityStorage/' },
        ].sort((a, b) => a.text.localeCompare(b.text))
      },
      {
        text: 'React',
        base: '/react',
        collapsed: false,
        items: [
          { text: "useDebounce", link: '/useDebounce/' },
          { text: "useHeight", link: '/useHeight/' },
          { text: "useNow", link: '/useNow/' },
          { text: "useScroll", link: '/useScroll/' },
          { text: "useToggle", link: '/useToggle/' },
          { text: "useWidth", link: '/useWidth/' },
        ].sort((a, b) => a.text.localeCompare(b.text))
      },
    ]
}
