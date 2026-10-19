import { defineConfig } from 'vitepress'
import radioheads from './sidebars/radioheads.ts'

export default defineConfig({
  title: "Radioheads of Create",
  description: "A wiki for Radioheads of Create",
  srcDir: 'src',
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,

  themeConfig: {
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
    ],

    sidebar: {
      ...radioheads
    }
  },
})
