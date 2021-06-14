import { createStore, useStore } from "vuex";
import trello from "./trello";
import type { State } from "@/type";

const stores = import.meta.globEager("../store/**/*.js");

const store = createStore({
  modules: {
    trello,
  },
});

export default store;

export const useTypedStore = () => useStore<State>();
