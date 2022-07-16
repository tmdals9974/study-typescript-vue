import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
// import getters from "./getters.js";
// import mutations from "./mutations.js";
// import actions from "./actions.js";
import { RootState, state } from "./store";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: state,
  mutations: mutations,
  actions: actions,
};

export default new Vuex.Store(store);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== "production",
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// });
