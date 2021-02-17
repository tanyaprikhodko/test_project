const moduleName = "Counter";

const state = {
  people: [
    require("../assets/images/card2.svg"),
    require("../assets/images/card3.svg"),
    require("../assets/images/card4.svg"),
    require("../assets/images/card5.svg"),
    require("../assets/images/card6.svg"),
  ],
  counts: {
    sad: 0,
    happy: 0,
    heart: 0,
  },
};

export const SET_COUNT_INFO = `${moduleName}/SET_COUNT_INFO`;

const mutations = {
  [SET_COUNT_INFO]: (state, payload) => {
    if (
      state.counts.sad + state.counts.happy + state.counts.heart ===
      state.people.length
    ) {
      state.counts = {
        sad: 0,
        happy: 0,
        heart: 0,
      };
    }
    switch (payload) {
      case "sad": {
        state.counts.sad += 1;
        break;
      }
      case "happy": {
        state.counts.happy += 1;
        break;
      }
      case "heart": {
        state.counts.heart += 1;
        break;
      }
      default: {
        return state.counts;
      }
    }
  },
};
const actions = {
  setCounter({ commit }, payload) {
    commit(SET_COUNT_INFO, payload);
  },
};

export const Counter = {
  state,
  mutations,
  actions,
};
