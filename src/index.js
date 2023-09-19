import { registerMicroApps, start, setDefaultMountApp } from "qiankun";

async function setup() {
  registerMicroApps([
    {
      name: 'vue3',
      entry: '//localhost:8081',
      container: '#container',
      activeRule: '/vue3/'
    }
  ])

  // setDefaultMountApp('/vue3/');

  start()
}

setup()
