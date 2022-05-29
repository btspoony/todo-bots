import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export const state = () => ({
  sideMenuOpened: false,
  menus: [
    {
      group: 'quests',
      name: 'addsub',
      label: '加减法测试题',
      icon: 'el-icon-s-finance'
    }
  ]
})

export type ModuleState = ReturnType<typeof state>

export const getters: GetterTree<ModuleState, RootState> = {
  isSideMenuOpened: state => state.sideMenuOpened,
  menus: state => state.menus
}

export const mutations: MutationTree<ModuleState> = {
  SET_SIDE_MENU_OPENED: (state, payload: boolean) => (state.sideMenuOpened = !!payload),
}

export const actions: ActionTree<ModuleState, RootState> = {
  // NOTHING
}
