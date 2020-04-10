/**
 * Modal module is for a dynamic global dismissible modal state
 */

export const namespaced = true;

export const state = {
  isActive: false,
  component: null,
  title: null,
  content: null,
  action: null
};

export const mutations = {
  SET(state, modal) {
    state.component = modal.component;
    state.title = modal.title;
    state.content = modal.content;
    state.action = modal.action;
  },
  CLEAR(state) {
    state.component = "";
    state.title = "";
    state.content = "";
    state.action = "";
  },
  MODAL_TRUE(state) {
    state.isActive = true;
  },
  MODAL_FALSE(state) {
    state.isActive = false;
  }
};

export const actions = {
  open({ commit }, modal) {
    commit("SET", modal);
    commit("MODAL_TRUE");
  },

  close({ commit }) {
    commit("MODAL_FALSE");
    commit("CLEAR");
  }
};

export const getters = {};
