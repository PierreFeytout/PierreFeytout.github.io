import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "My projects",
  base: "/",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    footer: {
    message: '',
    copyright: ''
  },
  // https://vitepress.dev/reference/default-theme-config
  nav: [
      { text: 'Home', link: '/' }
    ]
  }
})