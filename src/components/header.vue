<template>
  <el-row class="app-header align-center" :gutter="12">
    <el-col :span="3">
      <el-button class="mt-4-1" size="large" icon="el-icon-menu" circle @click="toggleMenu"></el-button>
    </el-col>
    <el-col :span="18">
      <h2 class="ellipsis-word">
        {{ currentPage ? currentPage.label : "No Quest" }}
      </h2>
    </el-col>
    <el-col :span="3">
      <!-- NOTHING -->
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { QuestSet } from "~/types";

const route = useRoute();
const menus = useMenus();

const currentPageName = computed(() => {
  return route.path.split("/")[2];
});

const currentPage = computed(() => {
  return (
    menus && menus.value.find((menu) => menu.name === currentPageName.value)
  );
});

function toggleMenu() {
  // TODO
}
</script>
