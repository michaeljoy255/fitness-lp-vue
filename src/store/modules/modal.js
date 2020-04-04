/**
 * Modal module for the store is for dynamic modal state
 */

export const namespaced = true;

export const state = {
  isActive: false,
  component: null,
  title: "",
  content: "",
  action: null
};

export const mutations = {
  ACTIVE_TRUE(state) {
    state.isActive = true;
  },
  ACTIVE_FALSE(state) {
    state.isActive = false;
  },
  SET_MODAL(state, { component, title, content, action }) {
    state.component = component;
    state.title = title;
    state.content = content;
    state.action = action;
  },
  CLEAR_MODAL(state) {
    state.component = null;
    state.title = null;
    state.content = null;
    state.action = null;
  }
};

export const actions = {
  open({ commit }, { component, title, content, action }) {
    commit("SET_MODAL", { component, title, content, action });
    commit("ACTIVE_TRUE");
  },
  close({ commit }) {
    commit("ACTIVE_FALSE");
    commit("CLEAR_MODAL");
  }
};

export const getters = {};
