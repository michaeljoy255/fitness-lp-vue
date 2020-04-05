/**
 * Modal module for the store is for dynamic modal state
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
  ACTIVE_TRUE(state) {
    state.isActive = true;
  },
  ACTIVE_FALSE(state) {
    state.isActive = false;
  },
  SET_MODAL(state, modal) {
    state.component = modal.component;
    state.title = modal.title;
    state.content = modal.content;
    state.action = modal.action;
  },
  CLEAR_MODAL(state) {
    state.component = null;
    state.title = null;
    state.content = null;
    state.action = null;
  }
};

export const actions = {
  open({ commit }, modal) {
    commit("SET_MODAL", modal);
    commit("ACTIVE_TRUE");
  },

  close({ commit }) {
    commit("ACTIVE_FALSE");
    commit("CLEAR_MODAL");
  }
};

export const getters = {};
