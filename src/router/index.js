import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {//预加载形式
      path: '/',
      name: 'Home',
      component: Home
    },
    {//懒加载形式
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }
  ]
})
