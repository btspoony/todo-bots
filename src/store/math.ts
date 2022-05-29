import { GetterTree, ActionTree, MutationTree } from "vuex";
import { RootState } from "~/store";
import { QuestSet, QuestStrategy } from "~/types";

export const state = () => ({
  generatedQuestSets: [] as QuestSet[],
  currentIndex: -1,
});

export type ModuleState = ReturnType<typeof state>;

export const getters: GetterTree<ModuleState, RootState> = {
  currentQuestSet: (state) =>
    state.currentIndex >= 0 && state.generatedQuestSets.length > 0
      ? state.generatedQuestSets[state.currentIndex]
      : undefined,
};

export const mutations: MutationTree<ModuleState> = {
  SET_CURRENT_QUEST_SET: (state, payload: { index: number }) => {
    if (payload.index < state.generatedQuestSets.length && payload.index > -1) {
      state.currentIndex = payload.index;
    }
  },
  ADD_NEW_QUEST_SET: (state, payload: QuestSet) => {
    state.generatedQuestSets.push(payload);
    state.currentIndex = state.generatedQuestSets.length - 1;
  },
};

export const actions: ActionTree<ModuleState, RootState> = {
  /**
   * 构建题目
   */
  async buildQuests(
    ctx,
    payload: { strategy: QuestStrategy; amount: number; options: any }
  ) {
    ctx.commit(
      "ADD_NEW_QUEST_SET",
      QuestSet.create({ strategies: [payload], withAnswer: true })
    );
  },
};
