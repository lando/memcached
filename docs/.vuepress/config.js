const customTheme = require('@lando/vuepress-theme-default-plus');

module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando Memcached Plugin Documentation',
  base: '/memcached/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/memcached/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/memcached/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: customTheme({
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/memcached',
    sidebarHeader: {
      enabled: true,
      title: 'Memcached Plugin',
      icon: '/images/memcachedicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.html',
      },
      '/config.html',
      '/support.html',
      {text: 'Examples', link: 'https://github.com/lando/memcached/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/memcached/releases'},
      '/development.html',
    ],
  }),
};
