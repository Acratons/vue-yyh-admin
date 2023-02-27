import Vue from "vue";
import Vuex from "vuex";

// 该指令必须在 store 创建之前执行
Vue.use(Vuex);

// State: 用于存储数据
const state = {
  token: ''
};

// Mutations(变化): 修改/操作 state 中的数据
const mutations = {
  // state: 存储的数据；    value: 发送的数据
  changeCommit(state, value) {
    console.log("mutations", state, value);
    // 修改 state 中存储的数据
    state.name = value;
    // 修改后，页面会重新渲染
  },

  SET_TOKEN: (state, token) => {
    state.token = token
    localStorage.setItem("token", token)
  }
};

// Actions(行动): 处理交互行为
const actions = {
  // context: 简化版的 store；    value: 发送过来的数据
  changeDispatch(context, value) {
    console.log("actions", context, value);
    // 将数据 commit 给 mutations
    // 设置 2 个实参: commit 中的方法名 & 发送的数据
    context.commit("changeCommit", value);
  },
};





// 创建并导出 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
