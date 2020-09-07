module.exports = {
  title: "Yvue UI",
  description: "vue2.0 vue组件",
  base: "/yvue-ui/",
  lastUpdated: "Last Updated",
  themeConfig: {
    logo: "/logo.jpg",
    smoothScroll: true,
    nav: [],
    sidebar: [
      '/introduce/',
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
          './components/layout.md'
        ]
      }
    ]
  }
}
