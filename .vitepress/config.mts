import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "React源码系列",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'course', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '最小堆算法解析',
        items: [
          { text: 'React中的任务调度', link: '/minHeap/whyUse.md' },
          { text: '什么是最小堆', link: '/minHeap/concept' },
          { text: 'React中最小堆源码实现', link: '/minHeap/source.md' },
          { text: '总结', link: '/minHeap/summary.md' }
        ]
      }
    ],
  }
})
