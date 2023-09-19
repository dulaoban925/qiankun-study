import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/home') }
];

let history = createWebHashHistory()

let router = createRouter({
  history,
  routes
})

// 销毁 router
export function destroyRouter() {
  router = null
  history.destroy()
}

export default router