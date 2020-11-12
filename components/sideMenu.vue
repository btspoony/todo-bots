<template>
  <el-drawer
    direction="ltr"
    :with-header="false"
    :visible.sync="isOpened"
  >
    <el-menu
      class="app-side-menu"
      :router="true"
      @select="menuSelected"
    >
      <el-menu-item
        v-for="menu in menus"
        :key="menu.name"
        :index="menu.name"
        :route="menu.route || `/${menu.group}/${menu.name}`"
        :class="[{ 'is-active': currentPageName === menu.name || currentPageGroup === menu.group }]"
      >
        <i v-if="!!menu.icon" :class="menu.icon" />
        <span slot="title">{{ menu.label }}</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SideMenuComponent extends Vue {
  // ---- Computed --
  get menus () {
    return this.$store.getters['app/menus'] as any[]
  }
  get isOpened () {
    return this.$store.getters['app/isSideMenuOpened'] as boolean
  }
  set isOpened (value: boolean) {
    this.$store.commit('app/SET_SIDE_MENU_OPENED', value)
  }
  get currentPageGroup () { return this.$route.path.split('/')[1] }
  get currentPageName () { return this.$route.path.split('/')[2] }
  // ---- Hooks --
  async mounted () {
    // NOTHING
  }
  // ---- Methods --
  /**
   * 菜单选择，关闭 menu
   */
  menuSelected () {
    this.isOpened = false
  }
}
</script>
