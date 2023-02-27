import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home.vue";
import Index from '../views/Index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {//预加载形式
      path: '/',
      name: 'Home',
      component: Home,
      //子路由
      children:[
        {
          path: '/index',
          name: 'Index',
          component: () => import('../views/Index.vue')
        },
        {
          path: '/user',
          name: 'sysUser',
          component: () => import('../views/sys/User.vue')
        },
        {
          path: '/role',
          name: 'sysRole',
          component: () => import('../views/sys/Role.vue')
        },
        {
          path: '/Menu',
          name: 'sysMenu',
          component: () => import('../views/sys/Menu.vue')
        },
      ]
    },
    {//懒加载形式
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },

  ]
})
