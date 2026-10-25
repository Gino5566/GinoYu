import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    // 動態 import：BuildLog 的程式碼拆成獨立檔案，進到 /log 才下載
    { path: '/log', name: 'BuildLog', component: () => import('./pages/BuildLog.vue') },
  ],
  // 跨頁錨點：帶 hash 的導航捲到對應元素，一般換頁回到頂端
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    }
    return { top: 0 }
  },
})

export default router
