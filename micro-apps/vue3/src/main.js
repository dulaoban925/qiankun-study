import { createApp } from 'vue'
import App from './App.vue'
import router, { destroyRouter } from './router'
import './public-path'

let app = null

function render(props = {}) {
  const {container} = props
  app = createApp(App)
  app.use(router)
  app.mount(container ? container.querySelector('#app')  : '#app')
}

console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log("🚀 ~ file: main.js:18 ~ bootstrap ~ bootstrap:", bootstrap)
}

export async function mount(props) {
  console.log("🚀 ~ file: main.js:22 ~ mount ~ mount:", mount)
  render(props)
}

export async function unmount() {
  console.log("🚀 ~ file: main.js:27 ~ unmount ~ unmount:", unmount)
  app.unmount()
  app = null
  destroyRouter()
}