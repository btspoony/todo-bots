<template>
  <el-drawer v-model="isOpened" direction="ltr">
    <el-menu class="app-side-menu" :router="true" @select="menuSelected">
      <el-menu-item v-for="menu in menus" :key="menu.name" :index="menu.name" :route="`/${menu.group}/${menu.name}`"
        :class="[
          {
            'is-active':
              currentPageName === menu.name || currentPageGroup === menu.group,
          },
        ]">
        <i v-if="!!menu.icon" :class="menu.icon" />
        <template #title>
          <span>{{ menu.label }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script setup lang="ts">
const route = useRoute();
const isMenuOpened = useMenuOpened();
const menus = useMenus();

const isOpened = computed({
  get() {
    return isMenuOpened.value;
  },
  set(val: boolean) {
    isMenuOpened.value = val;
  },
});

const currentPageGroup = computed(() => {
  return route.path.split("/")[1];
});

const currentPageName = computed(() => {
  return route.path.split("/")[2];
});

/**
 * 菜单选择，关闭 menu
 */
function menuSelected() {
  // this.isOpened = false;
}
</script>
