module.exports = {
  title: "Yvue UI",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  description: "vue2.0 vue组件",
  base: "/yvue-ui/",
  lastUpdated: "Last Updated",
  themeConfig: {
    logo: "/logo.jpg",
    smoothScroll: true,
    nav: [],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-start/',
        ]
      },
      {
        title: '组件',
        children: [
          './components/button.md',
          './components/layout.md',
          './components/container.md',
          './components/tabs.md',
          './components/toast.md',
          './components/popover.md'
        ]
      }
    ]
  }
}
