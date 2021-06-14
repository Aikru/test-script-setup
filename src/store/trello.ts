import { title } from "process";
import { ActionContext } from "vuex";
import type { Column, State, Edit } from "@/type";

const namespaced = true;

interface LocalState {
  columnList: Array<Column>;
}

const state = () => ({
  columnList: [],
});

export const actions = {
  taskManager(
    actionContext: ActionContext<LocalState, State>,
    idx: { idxList: number }
  ) {
    actionContext.commit("SET_NEW_TASK", idx.idxList);
  },
};

export const mutations = {
  SET_NEW_COL(state: LocalState, name: string) {
    state.columnList = [...state.columnList, { name, tasks: [] }];
  },
  SET_NEW_TASK(state: LocalState, idxList: number) {
    const stateColumnList = state.columnList;
    const { tasks } = { ...stateColumnList[idxList] };
    tasks.push({ name: undefined, description: undefined, date: undefined });
  },

  EDIT_TASK(state: LocalState, params: Edit) {
    console.log(params.newName, params.newDescription);

    state.columnList[params.idxList].tasks[params.idxTask] = {
      name: params.newName,
      description: params.newDescription,
      date: params.newDate,
    };
  },
};

export default {
  namespaced,
  state,
  mutations,
  actions,
};
