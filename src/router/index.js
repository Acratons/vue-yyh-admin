import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home.vue";
import Index from '../views/Index.vue'
import store from "../store";
import axios from "../axios";

Vue.use(Router)

const routes = [
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
          path: '/userCenter',
          name: 'userCenter',
          component: () => import('../views/UserCenter.vue')
        },
        // {
        //   path: '/sys/user',
        //   name: 'sysUser',
        //   component: () => import('../views/sys/User.vue')
        // },
        // {
        //   path: '/sys/role',
        //   name: 'sysRole',
        //   component: () => import('../views/sys/Role.vue')
        // },
        // {
        //   path: '/sys/Menu',
        //   name: 'sysMenu',
        //   component: () => import('../views/sys/Menu.vue')
        // },
      ]
    },
    {//懒加载形式
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
  ]

const router = new Router({
  mode: 'history',
  // base: process.env.BABEL_URl,
  routes
})

/*
 *路由前从后端获取菜单
 */
router.beforeEach((to, from, next) => {

  //限制每次访问路由都去请求次数
  let hasRoute = store.state.menus.hasRoute
  //当没有路由表时
  if (!hasRoute){
    axios.get("/sys/menu/nav", {
      headers:{
        PermList:localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res)
      //拿到menuList,存储菜单和权限
      store.commit('menus/setMenuList', res.data.data.nav)

      //获取用户权限
      store.commit("menus/setPermList", res.data.data.PermList)

      //綁定路由
      let newRoutes = router.options.routes

      res.data.data.nav.forEach( menu => {
        //如果有孩子结点 就继续遍历循环
        if (menu.children) {
          menu.children.forEach(e => {
            //转换成路由
            let route = menuToRoute(e)

            //把路由添加到路由管理中,作为Home下面的嵌套路由
            if (route){
              newRoutes[0].children.push(route)
            }
          })
        }
      })
      //添加上去
      router.addRoutes(newRoutes)

      //把路由表状态添加到vuex
      hasRoute = true
      store.commit('menus/changeRouteStatus', hasRoute)
    })
  }




  next()
})
/*
 *导航转换路由
 */
const menuToRoute = (menu) => {
  //如果没有component就不用转换
  if (!menu.component) {
     return null
  }

  let route = {
    name: menu.name,
    path: menu.path,
    meta: {
      icon: menu.icon,
      title: menu.title
    }
  }
  route.component = () => import('../views/' + menu.component + '.vue')

  return route
}


export default router

