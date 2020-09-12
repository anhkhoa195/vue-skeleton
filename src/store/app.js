import { APP_TYPES } from "@/constants/stateType";
import { CONSTANTS } from "@/constants";

const defaultState = () => {
  return {
    userInfo: null,
    layout: CONSTANTS.LAYOUTS.PUBLIC,
    accessLimit: false,
  };
};

// initial state
const state = defaultState();

const actions = {
  updateUser({ commit }, data) {
    commit(APP_TYPES.UPDATE_USER, data);
  },
  updateLayout({ commit }, data) {
    commit(APP_TYPES.UPDATE_LAYOUT, data);
  },
  updateAccessLimit({ commit }, data) {
    commit(APP_TYPES.UPDATE_ACCESS_LIMIT, data);
  },
  reset({ commit }) {
    commit(APP_TYPES.RESET);
  },
};

const mutations = {
  [APP_TYPES.UPDATE_USER](state, payload) {
    state.userInfo = payload;
  },
  [APP_TYPES.UPDATE_LAYOUT](state, payload) {
    state.layout = payload;
  },
  [APP_TYPES.UPDATE_ACCESS_LIMIT](state, payload) {
    state.accessLimit = payload;
  },
  [APP_TYPES.RESET](state) {
    state.userInfo = null;
    state.layout = CONSTANTS.LAYOUTS.PUBLIC;
  },
  [APP_TYPES.REFRESH]() {},
};

const getters = {
  layout(state) {
    return state.layout;
  },
  userInfo(state) {
    return state.userInfo;
  },
  accessLimit(state) {
    return state.accessLimit;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
