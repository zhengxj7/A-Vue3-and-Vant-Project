import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';


// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),  // hash模式：createWebHashHistory; history模式：createWebHistory
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
});

// 抛出路由实例，在 main.js 中引用
export default router;

// vue-router 3.x 与 vue-router 4.x 的不同之处：
// 1. 3.x 中是用实例形式来声明路由，4.x中是用构造函数形式来声明路由；
// 2. 