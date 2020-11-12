<template>
  <el-row
    class="app-header align-center"
    :gutter="12"
  >
    <el-col :span="3">
      <el-button
        class="mt-4-1"
        size="large"
        icon="el-icon-menu"
        circle
        @click="toggleMenu"
      ></el-button>
    </el-col>
    <el-col :span="18">
      <h2 class="ellipsis-word">{{ currentPage ? currentPage.label : 'No Quest' }}</h2>
    </el-col>
    <el-col :span="3">
      <!-- NOTHING -->
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { QuestSet } from '~/types'

@Component
export default class HeaderComponent extends Vue {
  // ---- Computed --
  get menus () { return this.$store.getters['app/menus'] as any[] }
  get currentPageName () { return this.$route.path.split('/')[2] }
  get currentPage () { return this.menus && this.menus.find(menu => menu.name === this.currentPageName) }
  // ---- Hooks --
  async mounted () {
    // NOTHING
  }
  // ------ Methods ---
  toggleMenu () {
    this.$store.commit('app/SET_SIDE_MENU_OPENED', true)
  }
}
</script>
