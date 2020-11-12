import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export const state = () => ({
})

export type ModuleState = ReturnType<typeof state>

export const getters: GetterTree<ModuleState, RootState> = {
  // NOTHING
}

export const mutations: MutationTree<ModuleState> = {
  // NOTHING
}

export const actions: ActionTree<ModuleState, RootState> = {
  // NOTHING
}
