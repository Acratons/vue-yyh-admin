import Vue from "vue";
import Vuex from "vuex";

// 该指令必须在 store 创建之前执行
Vue.use(Vuex);

// State: 用于存储数据
const state = {
  menuList: [],
  PermList: [],
  hasRoute: false
};

// Mutations(变化): 修改/操作 state 中的数据
const mutations = {
  setMenuList(state, menus) {
    state.menuList = menus
  },
  setPermList(state, Perms) {
    state.PermList = Perms
  },
  changeRouteStatus(state, hasRoute) {
    state.hasRoute = hasRoute
    sessionStorage.setItem("hasRoute", hasRoute)
  }
};

// Actions(行动): 处理交互行为
const actions = {

};


export default {
  namespaced: true,
  state:state,
  actions:actions,
  mutations:mutations,
}
