import { createStore } from "vuex";
import { Counter } from "./Counter";

export const store = createStore({
  modules: {
    Counter,
  },
});
