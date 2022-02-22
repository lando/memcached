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
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
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
        link: '/index.md',
      },
      '/config.md',
      '/caveats.md',
      '/extensions.md',
      {
        text: 'Guides',
        collapsible: true,
        children: [
          {
            text: 'Accessing Memcached Logs',
            link: '/accessing-logs.md',
          },
          {
            text: 'Installing extensions',
            link: '/installing-extensions.md',
          },
          {
            text: 'Installing node',
            link: '/installing-node.md',
          },
        ],
      },
      '/support.md',
      {text: 'Examples', link: 'https://github.com/lando/memcached/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/memcached/releases'},
      '/development.md',
    ],
  },
};
