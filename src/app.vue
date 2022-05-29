<template>
  <div>
    <!-- override html and head -->
    <Html>

    <Head>
      <Title>{{ route.meta.title ?? "Home" }}</Title>
    </Head>

    </Html>

    <el-container>
      <!-- 通用头 -->
      <el-header>
        <Header />
      </el-header>
      <!-- 内容体 -->
      <el-main>
        <NuxtPage />
      </el-main>
    </el-container>
    <!-- 侧边菜单 -->
    <SideMenus />
  </div>
</template>

<script setup>
import { ID_INJECTION_KEY } from "element-plus";

provide(ID_INJECTION_KEY, {
  prefix: 100,
  current: 0,
});

useHead({
  titleTemplate: "%s - Todo Tasks",
});

const route = useRoute();

// const msgs = useMessages();

// watch(lastestMsg, (newVals, oldVals) => {
// // this.$notify({
// //         title: info.title || "",
// //         message: this.$createElement(
// //           "p",
// //           { class: "ellipsis-word" },
// //           info.message
// //         ),
// //         type: info.type,
// //         duration: 2000,
// //       });
// });
</script>
